'use client';
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { City, UserRegistration } from "@/lib/types";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api";
import axios from "axios";

export default function Register() {
  const [cities, setCities] = useState<City[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserRegistration>({
    username: "",
    password: "",
    email: "",
    nom: "",
    prenoms: "",
    city_id: "",
    cndp_consent: false,
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchCities() {
      try {

        const response = await fetch("https://cestom-digital-backend.up.railway.app/api/cities");
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setCities(data.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }

    fetchCities();
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    try {
      const data = await registerUser({
        username: formData.username.trim(),
        password: formData.password,
        email: formData.email.trim(),
        nom: formData.nom.trim(),
        prenoms: formData.prenoms.trim(),
        city_id: formData.city_id,
        cndp_consent: formData.cndp_consent,
      });
      console.log("Registration successful:", data);
      setSubmitSuccess("Inscription reussie. Vous pouvez maintenant vous connecter.");
      setFormData({
        username: "",
        password: "",
        email: "",
        nom: "",
        prenoms: "",
        city_id: "",
        cndp_consent: false,
      });
      router.push("/login");
    } catch (error: unknown) {
      console.error("Error during registration:", error);
      if (axios.isAxiosError(error)) {
        const apiMessage = error.response?.data?.message;
        if (typeof apiMessage === "string" && apiMessage.trim()) {
          setSubmitError(apiMessage);
        } else if (Array.isArray(apiMessage) && apiMessage.length > 0) {
          setSubmitError(apiMessage.join(", "));
        } else {
          setSubmitError("Echec de l'inscription. Verifiez vos informations et reessayez.");
        }
      } else if (error instanceof Error && error.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Echec de l'inscription. Verifiez vos informations et reessayez.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-indigo-100 p-4 sm:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-2xl items-center justify-center sm:min-h-[calc(100vh-3rem)]">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>Créer votre compte</CardTitle>
              <CardDescription>
                Renseignez vos informations pour vous inscrire sur Cestom.
              </CardDescription>
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
              <div className="grid gap-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="jdupont"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="j.dupont@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="MotDePasse123!"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    name="nom"
                    placeholder="Dupont"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="prenoms">Prénoms</Label>
                  <Input
                    id="prenoms"
                    name="prenoms"
                    placeholder="Jean Marie"
                    value={formData.prenoms}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="city_id">Ville</Label>
                <select
                  id="city_id"
                  name="city_id"
                  required
                  className="flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1"
                  value={formData.city_id}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Sélectionnez une ville
                  </option>
                  {Array.isArray(cities) && cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                <Checkbox
                  id="cndp_consent"
                  name="cndp_consent"
                  checked={formData.cndp_consent}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cndp_consent: e.target.checked,
                    }))
                  }
                  required
                />

                <Label htmlFor="cndp_consent" className="leading-5">
                  J'accepte la politique de consentement des données CNDP.
                </Label>
              </div>

              {submitError && <p className="text-sm text-red-600">{submitError}</p>}
              {submitSuccess && <p className="text-sm text-green-700">{submitSuccess}</p>}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Inscription en cours..." : "Créer un compte"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center text-sm text-slate-600">
            Vous avez déjà un compte ?&nbsp;
            <Link href="/login" className="font-medium text-sky-700 hover:underline">
              Se connecter
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
