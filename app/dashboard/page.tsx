// Imports fusionnés
import { DashboardHeader } from "@/components/ui/DashboardHeader";
import { WelcomeCard } from "@/components/ui/WelcomeCard";
import DocumentList from "./components/documents/DocumentList";
import { PaymentCard } from "./components/profil/paymentcard";
import { ProfileCompletion } from "./components/profil/profilecompletion";

export default function Page() {
  return (
    <main>
        <DashboardHeader />
        <WelcomeCard /> 
        <ProfileCompletion />
      <div>
        <DocumentList />
        <PaymentCard />
      </div>
    </main>
  );
}