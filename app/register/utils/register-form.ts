import axios from "axios";

import { City, StudyCycle, UserRegistration } from "@/lib/types";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://cestom-digital-backend.up.railway.app/api";

export const INITIAL_FORM_DATA: UserRegistration = {
  username: "",
  password: "",
  email: "",
  nom: "",
  prenoms: "",
  date_naissance: "",
  lieu_naissance: "",
  profession: "",
  etablissement_formation: "",
  city_id: "",
  numero_passeport: "",
  adresse_maroc: "",
  telephone_maroc: "",
  personne_urgence_togo: "",
  telephone_urgence_togo: "",
  study_cycle_id: "",
  cndp_consent: false,
};

export type RegistrationField = keyof UserRegistration;

export const FORM_STEPS = [
  {
    title: "Compte",
    description: "Informations de connexion",
  },
  {
    title: "Identite",
    description: "Etat civil et naissance",
  },
  {
    title: "Formation",
    description: "Etudes et ville",
  },
  {
    title: "Contacts",
    description: "Coordonnees et urgence",
  },
  {
    title: "Validation",
    description: "Consentement et verification",
  },
] as const;

const REQUIRED_FIELDS_BY_STEP: RegistrationField[][] = [
  ["username", "email", "password"],
  ["nom", "prenoms", "date_naissance", "lieu_naissance"],
  ["profession", "etablissement_formation", "study_cycle_id", "city_id"],
  ["numero_passeport", "adresse_maroc", "telephone_maroc", "personne_urgence_togo", "telephone_urgence_togo"],
  ["cndp_consent"],
];

const FIELD_LABELS: Record<RegistrationField, string> = {
  username: "Nom d'utilisateur",
  password: "Mot de passe",
  email: "Email",
  nom: "Nom",
  prenoms: "Prenoms",
  date_naissance: "Date de naissance",
  lieu_naissance: "Lieu de naissance",
  profession: "Profession",
  etablissement_formation: "Etablissement de formation",
  city_id: "Ville",
  numero_passeport: "Numero de passeport",
  adresse_maroc: "Adresse au Maroc",
  telephone_maroc: "Telephone au Maroc",
  personne_urgence_togo: "Personne d'urgence au Togo",
  telephone_urgence_togo: "Telephone d'urgence au Togo",
  study_cycle_id: "Cycle d'etudes",
  cndp_consent: "Consentement CNDP",
};

const DIGITS_ONLY_REGEX = /\D/g;

const FIELD_VALIDATORS: Partial<Record<RegistrationField, (value: string) => string | null>> = {
  password: (value) =>
    value.length >= 8 ? null : "Le mot de passe doit contenir au moins 8 caracteres.",
  date_naissance: (value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return "La date de naissance est invalide.";
    }

    const parsedDate = new Date(`${value}T00:00:00Z`);
    if (Number.isNaN(parsedDate.getTime())) {
      return "La date de naissance est invalide.";
    }

    const [year, month, day] = value.split("-").map(Number);
    const isSameDate =
      parsedDate.getUTCFullYear() === year &&
      parsedDate.getUTCMonth() + 1 === month &&
      parsedDate.getUTCDate() === day;
    if (!isSameDate) {
      return "La date de naissance est invalide.";
    }

    return null;
  },
  adresse_maroc: (value) =>
    value.trim().length >= 5 ? null : "L'adresse doit contenir au moins 5 caracteres.",
  telephone_maroc: (value) =>
    value.replace(DIGITS_ONLY_REGEX, "").length >= 9
      ? null
      : "Le numero de telephone doit contenir au moins 9 caracteres.",
  telephone_urgence_togo: (value) =>
    value.replace(DIGITS_ONLY_REGEX, "").length >= 9
      ? null
      : "Le numero de telephone d'urgence doit contenir au moins 9 caracteres.",
};

export function validateField(name: RegistrationField, value: string): string | null {
  const validator = FIELD_VALIDATORS[name];
  if (!validator) {
    return null;
  }
  return validator(value);
}

export function validateStep(formData: UserRegistration, stepIndex: number) {
  const requiredFields = REQUIRED_FIELDS_BY_STEP[stepIndex] ?? [];

  for (const field of requiredFields) {
    const value = formData[field];
    if (typeof value === "boolean") {
      if (!value) {
        return {
          field,
          message: `Le champ ${FIELD_LABELS[field]} est requis.`,
        };
      }
      continue;
    }

    if (!value.trim()) {
      return {
        field,
        message: `Le champ ${FIELD_LABELS[field]} est requis.`,
      };
    }

    const fieldError = validateField(field, value);
    if (fieldError) {
      return {
        field,
        message: fieldError,
      };
    }
  }

  return null;
}

export async function fetchStudyCycles(): Promise<StudyCycle[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/study-cycles`);
    if (!response.ok) {
      return [];
    }

    const payload = await response.json();
    if (Array.isArray(payload)) {
      return payload;
    }
    if (Array.isArray(payload?.data)) {
      return payload.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching study cycles:", error);
    return [];
  }
}

export async function fetchCities(): Promise<City[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/cities`);
    if (!response.ok) {
      return [];
    }

    const payload = await response.json();
    if (Array.isArray(payload?.data)) {
      return payload.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}

export function buildRegistrationPayload(formData: UserRegistration): UserRegistration {
  return {
    username: formData.username.trim(),
    password: formData.password.trim(),
    email: formData.email.trim(),
    nom: formData.nom.trim(),
    prenoms: formData.prenoms.trim(),
    date_naissance: formData.date_naissance.trim(),
    lieu_naissance: formData.lieu_naissance.trim(),
    profession: formData.profession.trim(),
    etablissement_formation: formData.etablissement_formation.trim(),
    city_id: formData.city_id.trim(),
    numero_passeport: formData.numero_passeport.trim(),
    adresse_maroc: formData.adresse_maroc.trim(),
    telephone_maroc: formData.telephone_maroc.trim(),
    personne_urgence_togo: formData.personne_urgence_togo.trim(),
    telephone_urgence_togo: formData.telephone_urgence_togo.trim(),
    study_cycle_id: formData.study_cycle_id.trim(),
    cndp_consent: formData.cndp_consent,
  };
}

export function getRegistrationErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const apiMessage = error.response?.data?.message;
    if (typeof apiMessage === "string" && apiMessage.trim()) {
      return apiMessage;
    }
    if (Array.isArray(apiMessage) && apiMessage.length > 0) {
      return apiMessage.join(", ");
    }
    return "Echec de l'inscription. Verifiez vos informations et reessayez.";
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Echec de l'inscription. Verifiez vos informations et reessayez.";
}
