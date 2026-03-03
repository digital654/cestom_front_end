export type UserRegistration = {
  username: string;
  password: string;
  email: string;
  nom: string;
  prenoms: string;
  date_naissance: string;
  lieu_naissance: string;
  profession: string;
  etablissement_formation: string;
  city_id: string;
  numero_passeport: string;
  adresse_maroc: string;
  telephone_maroc: string;
  personne_urgence_togo: string;
  telephone_urgence_togo: string;
  study_cycle_id: string;
  cndp_consent: boolean;
};

export type City = {
  id: string;
  name: string;
  label: string;
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  region: string;
};

export type StudyCycle = {
  id: string;
  name: string;
  label: string;
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type LoginCredentials = {
  username: string;
  password: string;
};
