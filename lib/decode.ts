/**
 * Decodes a JWT token and returns the payload
 * @param token - The JWT token string
 * @returns The decoded payload as an object, or null if decoding fails
 */
export function decodeToken(token: string): Record<string, unknown> | null {
  if (!token || typeof token !== "string") {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const [, payloadPart] = parts;
  if (!payloadPart) {
    return null;
  }

  try {
    // Decode base64url to base64
    const normalized = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
    const decoded = atob(padded);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

/**
 * Gets the expiration date from a JWT token
 * @param token - The JWT token string
 * @returns Date object if token has exp claim, null otherwise
 */
export function getTokenExpiration(token: string): Date | null {
  const payload = decodeToken(token);
  if (!payload || typeof payload.exp !== "number") {
    return null;
  }
  return new Date(payload.exp * 1000);
}

/**
 * Checks if a JWT token is expired
 * @param token - The JWT token string
 * @returns true if token is expired or invalid, false otherwise
 */
export function isTokenExpired(token: string): boolean {
  const expiration = getTokenExpiration(token);
  if (!expiration) {
    return false;
  }
  return Date.now() >= expiration.getTime();
}

/**
 * Gets a specific claim from the JWT token payload
 * @param token - The JWT token string
 * @param key - The claim key to retrieve
 * @returns The claim value, or undefined if not found
 */
export function getTokenClaim<T = unknown>(token: string, key: string): T | undefined {
  const payload = decodeToken(token);
  if (!payload) {
    return undefined;
  }
  return payload[key] as T | undefined;
}


export function getUserFromToken() {
  const token = localStorage.getItem("auth_token");
  if (!token) return null;

  return decodeToken(token);
}