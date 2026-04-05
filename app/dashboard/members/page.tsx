import MembersTable from "../components/members/MembersTable";
import MembersStatsCard from "../components/members/MembersStatsCard";
import { members } from "@/lib/mockMembers";

export default function MembresPage() {
  const stats = {
    total: 248,
    enAttente: 32,
    valides: 216,
    rejetes: 12,
  };

  return (
    <div className="p-6 space-y-[32px]">
      <div>
        <h1 className="font-['Inter'] font-bold text-[32px] text-[#111827] mb-[8px]">
          Gestion des Membres
        </h1>
        <p className="font-['Inter'] text-[16px] text-[#6b7280]">
          Gérez et consultez tous les membres de votre section
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        <MembersStatsCard title="Total Membres" value={stats.total} change="+12%" type="total" />
        <MembersStatsCard title="En Attente" value={stats.enAttente} change="15 new" type="pending" />
        <MembersStatsCard title="Validés" value={stats.valides} change="+8%" type="validated" />
        <MembersStatsCard title="Rejetés" value={stats.rejetes} change="-3%" type="rejected" />
      </div>

      <MembersTable members={members} />
    </div>
  );
}