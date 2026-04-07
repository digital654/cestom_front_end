'use client';
// Imports fusionnés et nettoyés
import { DashboardHeader } from "@/components/ui/DashboardHeader";
import { WelcomeCard } from "@/components/ui/WelcomeCard";
import DocumentList from "./components/documents/DocumentList";
import { PaymentCard } from "./components/profil/paymentcard";
import { StatsCards } from "./components/stats/stats";
import { ProfileCompletion } from "./components/profil/profilecompletion";
import { getUserFromToken } from "@/lib/decode";
import MembersTable from "./components/members/MembersTable";
import { members } from "@/lib/mockMembers";

export default function Page() {
  const user = getUserFromToken();
  console.log("User from token:", user);
  console.log("Hello")
  
  return (
    <main className="p-6 space-y-6">
      <DashboardHeader />
      <WelcomeCard /> 
      <StatsCards />
      {/* On utilise une grille pour mettre les docs à gauche et le profil à droite comme sur l'image */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        {/* Colonne de gauche (Documents) - prend 2 tiers de l'espace */}
        <div className="lg:col-span-2">
          <DocumentList />
        </div>

        {/* Colonne de droite (Profil & Paiement) - prend 1 tiers */}
        <div className="space-y-6">
          <ProfileCompletion />
          <PaymentCard />
        </div>
        
      </div>
      <MembersTable members={members} />
    </main>
  );
}