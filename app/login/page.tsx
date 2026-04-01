'use client';
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { loginUser } from "@/lib/api";
import { persistAuthData } from "@/lib/auth-storage";
import { decodeToken } from "@/lib/decode";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const authData = await loginUser({ username: username.trim(), password: password.trim() });
      const token = persistAuthData(authData);
      console.log("Token JWT :", token);

      console.log(decodeToken(token as string));


      if (!token) {
        setError("Token de session introuvable. Veuillez vous reconnecter.");
        return;
      }

      console.log("La reponse :", authData);
      setTimeout(() => {
        //router.push("/");
        //router.refresh();
      }, 1000);

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message || "Échec de la connexion. Veuillez vérifier vos identifiants.";
        setError(message);
      } else {
        setError("Une erreur inattendue s'est produite.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-cyan-100 p-4 sm:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-md items-center justify-center sm:min-h-[calc(100vh-3rem)]">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>Bon retour</CardTitle>
              <CardDescription>Connectez-vous pour continuer.</CardDescription>
            </div>
            <Image
              src="/cestom_logo.png"
              alt="Logo Cestom"
              width={72}
              height={72}
              priority
              className="h-auto w-14 shrink-0 sm:w-16"
            />
          </CardHeader>

          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="username">Nom d&apos;utilisateur</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="jdupont"
                  required
                  disabled={isLoading}
                  value={username}
                  onChange={handleUsernameChange}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  autoComplete="username"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={isLoading}
                  value={password}
                  onChange={handlePasswordChange}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  autoComplete="current-password"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center text-sm text-slate-600">
            Pas encore de compte ?&nbsp;
            <Link href="/register" className="font-medium text-sky-700 hover:underline">
              Créer un compte
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
