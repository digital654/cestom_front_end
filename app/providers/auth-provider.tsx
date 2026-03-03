"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { clearStoredAuth, getStoredToken, isTokenExpired } from "@/lib/auth-storage";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const AUTH_VERIFY_ENDPOINTS = [
  `${API_BASE_URL}/auth/me`,
  `${API_BASE_URL}/auth/verify`,
  `${API_BASE_URL}/auth/profile`,
];

const PUBLIC_PATH_PREFIXES = ["/login", "/", "/register"];
const PROTECTED_PATHS = ["/landingpage"];

type AuthContextValue = {
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function isPublicPath(pathname: string) {
  return PUBLIC_PATH_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.includes(pathname);
}

async function verifyTokenWithApi(token: string): Promise<boolean> {
  for (const endpoint of AUTH_VERIFY_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        return true;
      }

      if (response.status === 401 || response.status === 403) {
        return false;
      }

      if (response.status === 404) {
        continue;
      }
    } catch {
      // Ignore network errors and keep fallback behavior below.
    }
  }

  // If no verification endpoint is available, keep JWT expiration as the baseline check.
  return true;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkAuth() {
      if (!pathname || isPublicPath(pathname) || !isProtectedPath(pathname)) {
        if (!cancelled) {
          setIsAuthenticated(false);
          setIsCheckingAuth(false);
        }
        return;
      }

      if (!cancelled) {
        setIsCheckingAuth(true);
      }

      const token = getStoredToken();
      if (!token || isTokenExpired(token)) {
        clearStoredAuth();
        if (!cancelled) {
          setIsAuthenticated(false);
          router.replace("/login");
        }
        return;
      }

      const isStillValid = await verifyTokenWithApi(token);
      if (!isStillValid) {
        clearStoredAuth();
        if (!cancelled) {
          setIsAuthenticated(false);
          router.replace("/login");
        }
        return;
      }

      if (!cancelled) {
        setIsAuthenticated(true);
        setIsCheckingAuth(false);
      }
    }

    void checkAuth();

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      isCheckingAuth,
      logout: () => {
        clearStoredAuth();
        setIsAuthenticated(false);
        router.replace("/login");
      },
    }),
    [isAuthenticated, isCheckingAuth, router],
  );

  if (pathname && isProtectedPath(pathname) && isCheckingAuth) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
