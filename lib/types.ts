
export type UserRegistration = {
  username: string;           // Min 3 caractères
  password: string;           // Min 8 caractères
  email: string;              // Format email valide
  nom: string;                // Non vide
  prenoms: string;            // Non vide
  city_id: string;            // UUID valide
  cndp_consent: boolean;      // True obligatoire
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

export type LoginCredentials = {
  username: string;
  password: string;
};
