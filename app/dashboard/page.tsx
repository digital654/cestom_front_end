// Imports des composants Documents
import { DashboardHeader } from "@/components/ui/DashboardHeader";
import { WelcomeCard } from "@/components/ui/WelcomeCard";
import DocumentList from "./components/documents/DocumentList";

export default function Page() {
  return (
    <main >
        <DashboardHeader />
        <WelcomeCard /> 
      <div >
        <DocumentList />
      </div>
    </main>
  );
}
