import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Demandes() {
  const demandes = [
    {
      id: "1",
      nom: "Ahmed Bennani",
      type: "Nouvelle adhésion",
      date: "23 Mars 2026",
      status: "en attente"
    },
    {
      id: "2",
      nom: "Sara El Mansouri",
      type: "Renouvellement",
      date: "22 Mars 2026",
      status: "approuvé"
    },
    {
      id: "3",
      nom: "Youssef Alami",
      type: "Modification profil",
      date: "21 Mars 2026",
      status: "rejeté"
    },
    {
      id: "4",
      nom: "Laila Benkirane",
      type: "Nouvelle adhésion",
      date: "20 Mars 2026",
      status: "en attente"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "en attente":
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#fef9c3] rounded-[8px]">
            <Clock className="w-[14px] h-[14px] text-[#ca8a04]" />
            <span className="font-['Inter'] text-[14px] text-[#ca8a04] font-medium">En attente</span>
          </span>
        );
      case "approuvé":
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#dcfce7] rounded-[8px]">
            <CheckCircle className="w-[14px] h-[14px] text-[#16a34a]" />
            <span className="font-['Inter'] text-[14px] text-[#16a34a] font-medium">Approuvé</span>
          </span>
        );
      case "rejeté":
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#fee2e2] rounded-[8px]">
            <XCircle className="w-[14px] h-[14px] text-[#dc2626]" />
            <span className="font-['Inter'] text-[14px] text-[#dc2626] font-medium">Rejeté</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-[24px]">
      <div>
        <h1 className="font-['Inter'] font-bold text-[32px] text-[#111827] mb-[8px]">
          Demandes
        </h1>
        <p className="font-['Inter'] text-[16px] text-[#6b7280]">
          Gérez les demandes d'adhésion et de modification
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <div className="bg-white border border-[#f3f4f6] rounded-[12px] p-[24px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[48px] h-[48px] bg-[#fef9c3] rounded-[12px] flex items-center justify-center">
              <Clock className="w-[24px] h-[24px] text-[#ca8a04]" />
            </div>
            <div>
              <p className="font-['Inter'] text-[14px] text-[#6b7280]">En attente</p>
              <p className="font-['Inter'] font-bold text-[24px] text-[#111827]">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[12px] p-[24px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[48px] h-[48px] bg-[#dcfce7] rounded-[12px] flex items-center justify-center">
              <CheckCircle className="w-[24px] h-[24px] text-[#16a34a]" />
            </div>
            <div>
              <p className="font-['Inter'] text-[14px] text-[#6b7280]">Approuvées</p>
              <p className="font-['Inter'] font-bold text-[24px] text-[#111827]">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[12px] p-[24px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[48px] h-[48px] bg-[#fee2e2] rounded-[12px] flex items-center justify-center">
              <XCircle className="w-[24px] h-[24px] text-[#dc2626]" />
            </div>
            <div>
              <p className="font-['Inter'] text-[14px] text-[#6b7280]">Rejetées</p>
              <p className="font-['Inter'] font-bold text-[24px] text-[#111827]">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demandes List */}
      <div className="bg-white border border-[#f3f4f6] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="p-[24px] border-b border-[#f3f4f6]">
          <h3 className="font-['Inter'] font-semibold text-[18px] text-[#111827]">
            Demandes récentes
          </h3>
        </div>
        <div className="divide-y divide-[#f3f4f6]">
          {demandes.map((demande) => (
            <div key={demande.id} className="p-[24px] hover:bg-[#f9fafb] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[48px] h-[48px] bg-[#e5e7eb] rounded-full flex items-center justify-center">
                    <FileText className="w-[24px] h-[24px] text-[#6b7280]" />
                  </div>
                  <div>
                    <p className="font-['Inter'] font-medium text-[16px] text-[#111827]">
                      {demande.nom}
                    </p>
                    <p className="font-['Inter'] text-[14px] text-[#6b7280]">
                      {demande.type} • {demande.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  {getStatusBadge(demande.status)}
                  {demande.status === "en attente" && (
                    <div className="flex gap-[8px]">
                      <button className="px-[16px] py-[8px] bg-[#16a34a] text-white rounded-[8px] font-['Inter'] text-[14px] font-medium hover:bg-[#15803d] transition-colors">
                        Approuver
                      </button>
                      <button className="px-[16px] py-[8px] bg-white border border-[#e5e7eb] text-[#6b7280] rounded-[8px] font-['Inter'] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        Rejeter
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}