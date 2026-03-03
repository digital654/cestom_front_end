'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { registerUser } from "@/lib/api";
import { City, StudyCycle, UserRegistration } from "@/lib/types";
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
import {
  FORM_STEPS,
  INITIAL_FORM_DATA,
  buildRegistrationPayload,
  fetchCities,
  fetchStudyCycles,
  getRegistrationErrorMessage,
  type RegistrationField,
  validateField,
  validateStep,
} from "./utils/register-form";

export default function Register() {
  const [cities, setCities] = useState<City[]>([]);
  const [studyCycles, setStudyCycles] = useState<StudyCycle[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<RegistrationField, string>>>({});
  const [formData, setFormData] = useState<UserRegistration>(INITIAL_FORM_DATA);
  const router = useRouter();

  useEffect(() => {
    async function fetchReferences() {
      try {
        const [fetchedCities, fetchedStudyCycles] = await Promise.all([
          fetchCities(),
          fetchStudyCycles(),
        ]);
        setCities(fetchedCities);
        setStudyCycles(fetchedStudyCycles);
      } catch (error) {
        console.error("Error fetching registration references:", error);
      }
    }

    fetchReferences();
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    const fieldName = name as RegistrationField;
    const errorMessage = validateField(fieldName, value);

    setSubmitError(null);
    setFieldErrors((prev) => {
      if (errorMessage) {
        return {
          ...prev,
          [fieldName]: errorMessage,
        };
      }

      if (!prev[fieldName]) {
        return prev;
      }

      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    setSubmitError(null);
    setFormData((prev) => ({
      ...prev,
      cndp_consent: checked,
    }));
  }

  function goToNextStep() {
    const validationResult = validateStep(formData, currentStep);
    if (validationResult) {
      setFieldErrors((prev) => ({
        ...prev,
        [validationResult.field]: validationResult.message,
      }));
      setSubmitError(validationResult.message);
      return;
    }

    setSubmitError(null);
    setCurrentStep((prev) => Math.min(prev + 1, FORM_STEPS.length - 1));
  }

  function goToPreviousStep() {
    setSubmitError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function submitRegistration() {
    if (currentStep !== FORM_STEPS.length - 1) {
      return;
    }

    const validationResult = validateStep(formData, currentStep);
    if (validationResult) {
      setFieldErrors((prev) => ({
        ...prev,
        [validationResult.field]: validationResult.message,
      }));
      setSubmitError(validationResult.message);
      return;
    }

    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    const payload: UserRegistration = buildRegistrationPayload(formData);

    try {
      const data = await registerUser(payload);
      console.log("Registration successful:", data);
      setSubmitSuccess("Inscription reussie. Vous pouvez maintenant vous connecter.");
      setFormData(INITIAL_FORM_DATA);
      setFieldErrors({});
      setCurrentStep(0);
      router.push("/login");
    } catch (error: unknown) {
      console.error("Error during registration:", error);
      setSubmitError(getRegistrationErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedCity = cities.find((city) => city.id === formData.city_id)?.name ?? "Non selectionnee";
  const selectedStudyCycle = studyCycles.find((cycle) => cycle.id === formData.study_cycle_id);
  const selectedStudyCycleLabel = selectedStudyCycle?.label ?? selectedStudyCycle?.name ?? "Non selectionne";
  const progress = ((currentStep + 1) / FORM_STEPS.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-indigo-100 p-4 sm:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-3xl items-center justify-center sm:min-h-[calc(100vh-3rem)]">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>Creer votre compte</CardTitle>
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
            <form className="grid gap-4" onSubmit={handleFormSubmit}>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Etape {currentStep + 1} / {FORM_STEPS.length}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{FORM_STEPS[currentStep].title}</p>
                <p className="text-xs text-slate-600">{FORM_STEPS[currentStep].description}</p>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-sky-600 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {currentStep === 0 && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Nom d&apos;utilisateur</Label>
                    <Input
                      id="username"
                      name="username"
                      placeholder="johndoe"
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
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    {fieldErrors.password && (
                      <p className="text-sm text-red-600">{fieldErrors.password}</p>
                    )}
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password123!"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        name="nom"
                        placeholder="Doe"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="prenoms">Prenoms</Label>
                      <Input
                        id="prenoms"
                        name="prenoms"
                        placeholder="John Marie"
                        value={formData.prenoms}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      {fieldErrors.date_naissance && (
                        <p className="text-sm text-red-600">{fieldErrors.date_naissance}</p>
                      )}
                      <Label htmlFor="date_naissance">Date de naissance</Label>
                      <Input
                        id="date_naissance"
                        name="date_naissance"
                        type="date"
                        value={formData.date_naissance}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lieu_naissance">Lieu de naissance</Label>
                      <Input
                        id="lieu_naissance"
                        name="lieu_naissance"
                        placeholder="Lome"
                        value={formData.lieu_naissance}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        name="profession"
                        placeholder="Etudiant"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="etablissement_formation">Etablissement de formation</Label>
                      <Input
                        id="etablissement_formation"
                        name="etablissement_formation"
                        placeholder="Universite de Lome"
                        value={formData.etablissement_formation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="study_cycle_id">Cycle d&apos;etudes</Label>
                      <select
                        id="study_cycle_id"
                        name="study_cycle_id"
                        required
                        className="flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1"
                        value={formData.study_cycle_id}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Selectionnez un cycle
                        </option>
                        {studyCycles.map((cycle) => (
                          <option key={cycle.id} value={cycle.id}>
                            {cycle.label ?? cycle.name}
                          </option>
                        ))}
                      </select>
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
                          Selectionnez une ville
                        </option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="numero_passeport">Numero de passeport</Label>
                      <Input
                        id="numero_passeport"
                        name="numero_passeport"
                        placeholder="P12345678"
                        value={formData.numero_passeport}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      {fieldErrors.telephone_maroc && (
                        <p className="text-sm text-red-600">{fieldErrors.telephone_maroc}</p>
                      )}
                      <Label htmlFor="telephone_maroc">Telephone au Maroc</Label>
                      <Input
                        id="telephone_maroc"
                        name="telephone_maroc"
                        placeholder="+212600000000"
                        value={formData.telephone_maroc}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    {fieldErrors.adresse_maroc && (
                      <p className="text-sm text-red-600">{fieldErrors.adresse_maroc}</p>
                    )}
                    <Label htmlFor="adresse_maroc">Adresse au Maroc</Label>
                    <Input
                      id="adresse_maroc"
                      name="adresse_maroc"
                      placeholder="123 Rue Hassan, Casablanca 20000"
                      value={formData.adresse_maroc}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="personne_urgence_togo">Personne d&apos;urgence au Togo</Label>
                      <Input
                        id="personne_urgence_togo"
                        name="personne_urgence_togo"
                        placeholder="Maman Doe"
                        value={formData.personne_urgence_togo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      {fieldErrors.telephone_urgence_togo && (
                        <p className="text-sm text-red-600">{fieldErrors.telephone_urgence_togo}</p>
                      )}
                      <Label htmlFor="telephone_urgence_togo">Telephone d&apos;urgence au Togo</Label>
                      <Input
                        id="telephone_urgence_togo"
                        name="telephone_urgence_togo"
                        placeholder="+22890000000"
                        value={formData.telephone_urgence_togo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <div className="rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700">
                    <p className="font-medium text-slate-900">Resume</p>
                    <p className="mt-2">Compte: {formData.username} ({formData.email})</p>
                    <p>
                      Identite: {formData.nom} {formData.prenoms}, ne(e) le {formData.date_naissance} a {formData.lieu_naissance}
                    </p>
                    <p>
                      Formation: {formData.profession}, {formData.etablissement_formation}, {selectedStudyCycleLabel}
                    </p>
                    <p>Ville: {selectedCity}</p>
                    <p>Passeport: {formData.numero_passeport}</p>
                    <p>Adresse Maroc: {formData.adresse_maroc}</p>
                    <p>Telephone Maroc: {formData.telephone_maroc}</p>
                    <p>
                      Contact urgence Togo: {formData.personne_urgence_togo} ({formData.telephone_urgence_togo})
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                    <Checkbox
                      id="cndp_consent"
                      name="cndp_consent"
                      checked={formData.cndp_consent}
                      onChange={handleConsentChange}
                      required
                    />

                    <Label htmlFor="cndp_consent" className="leading-5">
                      J&apos;accepte la politique de consentement des donnees CNDP.
                    </Label>
                  </div>
                </>
              )}

              {submitError && <p className="text-sm text-red-600">{submitError}</p>}
              {submitSuccess && <p className="text-sm text-green-700">{submitSuccess}</p>}

              <div className="flex items-center gap-3">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    className="inline-flex items-center justify-center !border !border-slate-300 !bg-slate-200 px-4 py-2 text-sm font-medium !text-slate-900 hover:!bg-slate-300 whitespace-nowrap"
                    onClick={goToPreviousStep}
                  >
                    Precedent
                  </Button>
                )}

                {currentStep < FORM_STEPS.length - 1 ? (
                  <Button type="button" className="ml-auto" onClick={goToNextStep}>
                    Suivant
                  </Button>
                ) : (
                  <Button type="button" className="ml-auto" disabled={isSubmitting} onClick={submitRegistration}>
                    {isSubmitting ? "Inscription en cours..." : "Creer un compte"}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center text-sm text-slate-600">
            Vous avez deja un compte ?&nbsp;
            <Link href="/login" className="font-medium text-sky-700 hover:underline">
              Se connecter
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

