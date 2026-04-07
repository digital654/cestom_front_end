export interface Member {
  id: string;
  name: string;
  avatar?: string;
  etablissement: string;
  type: "AMCI" | "OFFPT" | "NON BOURSIER" | "Privé";
  statut: "en attente" | "validé" | "rejeté";
  dateInscription: string;
}

export const members: Member[] = [
  {
    id: "1",
    name: "Echimit Syalla",
    etablissement: "UMEP",
    type: "AMCI",
    statut: "en attente",
    dateInscription: "30 Juin 2022"
  },
  {
    id: "2",
    name: "Lamine Vyney",
    avatar: "figma:asset/56d9e68ccff12413f144bdf75269165f5e84005a.png",
    etablissement: "ASSAN II",
    type: "OFFPT",
    statut: "validé",
    dateInscription: "23 Juin 2022"
  },
  {
    id: "3",
    name: "Ebrahim Tayla",
    avatar: "figma:asset/8f649ffb9509e27c1a5cfa2575f93e2a1f744127.png",
    etablissement: "ASSAN II",
    type: "NON BOURSIER",
    statut: "validé",
    dateInscription: "23 Juin 2022"
  },
  {
    id: "4",
    name: "Saachi Booth",
    avatar: "figma:asset/6037748207f9c7910c91db1bd9b0f380e0225194.png",
    etablissement: "ASSAN II",
    type: "AMCI",
    statut: "rejeté",
    dateInscription: "23 Juin 2022"
  },
  {
    id: "5",
    name: "Youssef Benali",
    avatar: "figma:asset/0d5da6ab018faf09b0940ac3e0ab4d6d514c431f.png",
    etablissement: "UMEP",
    type: "AMCI",
    statut: "validé",
    dateInscription: "20 Juin 2022"
  },
  {
    id: "6",
    name: "Fatima Zahra",
    etablissement: "ASSAN II",
    type: "NON BOURSIER",
    statut: "en attente",
    dateInscription: "18 Juin 2022"
  },
  {
    id: "7",
    name: "Mohammed Amine",
    avatar: "figma:asset/5e01b1436c0e2bd719fa966d920a1d73288771df.png",
    etablissement: "ASSAN II",
    type: "NON BOURSIER",
    statut: "validé",
    dateInscription: "15 Juin 2022"
  },
  {
    id: "8",
    name: "Salma Idrissi",
    etablissement: "UMEP",
    type: "OFFPT",
    statut: "en attente",
    dateInscription: "12 Juin 2022"
  },
  {
    id: "9",
    name: "Karim Benjelloun",
    etablissement: "ASSAN II",
    type: "AMCI",
    statut: "validé",
    dateInscription: "10 Juin 2022"
  },
  {
    id: "10",
    name: "Nadia El Amrani",
    etablissement: "UMEP",
    type: "OFFPT",
    statut: "en attente",
    dateInscription: "08 Juin 2022"
  }
];
