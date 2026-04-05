"use client";
import { useState } from "react";
import type { Member } from "@/lib/mockMembers";
import { Search, Download } from "lucide-react";

interface MembersTableProps {
  members: Member[];
}

export default function MembersTable({ members }: MembersTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("Tout");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filters = ["Tout", "AMCI", "Privé", "OFFPT"];

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.etablissement.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "Tout" || member.type === filterType;
    return matchesSearch && matchesType;
  });

  // Paginate
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "en attente":
        return (
          <span className="inline-flex items-center gap-[4px] px-[8px] py-[4px] bg-[rgba(255,193,7,0.1)] rounded-[6px]">
            <span className="w-[6px] h-[6px] bg-[#FFC107] rounded-full" />
            <span className="font-['Inter'] text-[12px] text-[#CA8A04]">en attente</span>
          </span>
        );
      case "validé":
        return (
          <span className="inline-flex items-center gap-[4px] px-[8px] py-[4px] bg-[rgba(22,163,74,0.1)] rounded-[6px]">
            <span className="w-[6px] h-[6px] bg-[#16A34A] rounded-full" />
            <span className="font-['Inter'] text-[12px] text-[#16A34A]">validé</span>
          </span>
        );
      case "rejeté":
        return (
          <span className="inline-flex items-center gap-[4px] px-[8px] py-[4px] bg-[rgba(220,38,38,0.1)] rounded-[6px]">
            <span className="w-[6px] h-[6px] bg-[#DC2626] rounded-full" />
            <span className="font-['Inter'] text-[12px] text-[#DC2626]">rejeté</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-[12px] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      {/* Search and filters */}
      <div className="p-[24px] border-b border-[#f3f4f6]">
        <div className="flex items-center gap-[16px] flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#6b7280]" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-[40px] pr-[16px] py-[10px] border border-[#e5e7eb] rounded-[8px] font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex gap-[8px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterType(filter)}
                className={`px-[16px] py-[8px] rounded-[8px] font-['Inter'] text-[14px] font-medium transition-colors ${
                  filterType === filter
                    ? "bg-[#16a34a] text-white"
                    : "bg-white border border-[#e5e7eb] text-[#6b7280] hover:bg-gray-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Export button */}
          <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[#16a34a] text-white rounded-[8px] font-['Inter'] text-[14px] font-medium hover:bg-[#15803d] transition-colors">
            <Download className="w-[16px] h-[16px]" />
            Télécharger Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#f9fafb] border-b border-[#f3f4f6]">
            <tr>
              <th className="text-left px-[24px] py-[12px] font-['Inter'] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Nom & Prénom
              </th>
              <th className="text-left px-[24px] py-[12px] font-['Inter'] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Etablissements
              </th>
              <th className="text-left px-[24px] py-[12px] font-['Inter'] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Type d'étudiant
              </th>
              <th className="text-left px-[24px] py-[12px] font-['Inter'] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Statut
              </th>
              <th className="text-left px-[24px] py-[12px] font-['Inter'] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Date Inscription
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f3f4f6]">
            {paginatedMembers.map((member) => (
              <tr key={member.id} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-[24px] py-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                      <span className="font-['Inter'] font-medium text-[#6b7280]">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] text-[#111827]">{member.name}</span>
                  </div>
                </td>
                <td className="px-[24px] py-[16px]">
                  <span className="font-['Inter'] text-[14px] text-[#6b7280]">{member.etablissement}</span>
                </td>
                <td className="px-[24px] py-[16px]">
                  <span className="font-['Inter'] text-[14px] text-[#6b7280]">{member.type}</span>
                </td>
                <td className="px-[24px] py-[16px]">
                  {getStatusBadge(member.statut)}
                </td>
                <td className="px-[24px] py-[16px]">
                  <span className="font-['Inter'] text-[14px] text-[#6b7280]">{member.dateInscription}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-[24px] py-[16px] border-t border-[#f3f4f6] flex items-center justify-between">
        <p className="font-['Inter'] text-[14px] text-[#6b7280]">
          {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredMembers.length)} sur {filteredMembers.length}
        </p>
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-[12px] py-[6px] rounded-[6px] border border-[#e5e7eb] font-['Inter'] text-[14px] text-[#6b7280] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-[12px] py-[6px] rounded-[6px] font-['Inter'] text-[14px] ${
                currentPage === page
                  ? "bg-[#16a34a] text-white"
                  : "border border-[#e5e7eb] text-[#6b7280] hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-[12px] py-[6px] rounded-[6px] border border-[#e5e7eb] font-['Inter'] text-[14px] text-[#6b7280] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            →
          </button>
          <span className="ml-[8px] font-['Inter'] text-[14px] text-[#6b7280]">Suivant</span>
        </div>
      </div>
    </div>
  );
}
