import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/app/providers/auth-provider";

export const metadata: Metadata = {
  title: "CESTOM",
  description: "CESTOM - Centre de Formation Professionnelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
