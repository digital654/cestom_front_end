const TOKEN_STORAGE_KEY = "auth_token";
const USER_STORAGE_KEY = "user";

const JWT_REGEX = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
const TOKEN_KEYS = ["token", "access_token", "accessToken", "jwt", "id_token", "idToken"] as const;
const NESTED_KEYS = ["data", "result", "auth", "session", "user"] as const;

type JsonRecord = Record<string, unknown>;

function isBrowser() {
  return typeof window !== "undefined";
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringTokenCandidate(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "" && value !== "null" && value !== "undefined";
}

function decodeBase64Url(value: string) {
  if (typeof atob !== "function") {
    return "";
  }

  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  return atob(padded);
}

function parseJsonSafely(raw: string | null): unknown {
  if (!raw || raw === "null" || raw === "undefined") {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function extractTokenFromPayload(payload: unknown, depth = 0): string | null {
  if (depth > 4 || payload === null || payload === undefined) {
    return null;
  }

  if (isStringTokenCandidate(payload) && JWT_REGEX.test(payload)) {
    return payload;
  }

  if (!isRecord(payload)) {
    return null;
  }

  for (const key of TOKEN_KEYS) {
    const value = payload[key];
    if (isStringTokenCandidate(value)) {
      return value;
    }
  }

  for (const key of NESTED_KEYS) {
    const nestedValue = payload[key];
    const extracted = extractTokenFromPayload(nestedValue, depth + 1);
    if (extracted) {
      return extracted;
    }
  }

  return null;
}

export function persistAuthData(payload: unknown): string | null {
  if (!isBrowser()) {
    return null;
  }

  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload));

  const token = extractTokenFromPayload(payload);
  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }

  return token;
}

export function getStoredToken(): string | null {
  if (!isBrowser()) {
    return null;
  }

  const directToken = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (isStringTokenCandidate(directToken)) {
    return directToken;
  }

  const storedUser = parseJsonSafely(localStorage.getItem(USER_STORAGE_KEY));
  const token = extractTokenFromPayload(storedUser);
  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    return token;
  }

  return null;
}

export function clearStoredAuth() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
}

export function isTokenExpired(token: string): boolean {
  if (!JWT_REGEX.test(token)) {
    return false;
  }

  const [, payloadPart] = token.split(".");
  if (!payloadPart) {
    return false;
  }

  try {
    const payload = JSON.parse(decodeBase64Url(payloadPart)) as { exp?: number };
    if (typeof payload.exp !== "number") {
      return false;
    }
    return Date.now() >= payload.exp * 1000;
  } catch {
    return false;
  }
}
