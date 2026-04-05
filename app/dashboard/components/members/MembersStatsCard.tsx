import { Users, Clock, CheckCircle, XCircle } from "lucide-react";

interface MembersStatsCardProps {
  title: string;
  value: number;
  change?: string;
  type: "total" | "pending" | "validated" | "rejected";
}

export default function MembersStatsCard({ title, value, change, type }: MembersStatsCardProps) {
  const getIcon = () => {
    switch (type) {
      case "total":
        return <div className="w-[48px] h-[48px] bg-[#dcfce7] rounded-[8px] flex items-center justify-center"><Users className="w-[24px] h-[24px] text-[#16A34A]" /></div>;
      case "pending":
        return <div className="w-[48px] h-[48px] bg-[#fef9c3] rounded-[8px] flex items-center justify-center"><Clock className="w-[24px] h-[24px] text-[#CA8A04]" /></div>;
      case "validated":
        return <div className="w-[48px] h-[48px] bg-[#dcfce7] rounded-[8px] flex items-center justify-center"><CheckCircle className="w-[24px] h-[24px] text-[#16A34A]" /></div>;
      case "rejected":
        return <div className="w-[48px] h-[48px] bg-[#fee2e2] rounded-[8px] flex items-center justify-center"><XCircle className="w-[24px] h-[24px] text-[#DC2626]" /></div>;
    }
  };

  const getChangeColor = () => {
    if (!change) return "";
    if (change.startsWith("+")) return "text-[#16a34a]";
    if (change.startsWith("-")) return "text-[#dc2626]";
    return "text-[#ca8a04]";
  };

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[24px] flex-1">
      <div className="flex items-start justify-between mb-[16px]">
        {getIcon()}
        {change && (
          <span className={`font-['Inter'] font-semibold text-[12px] ${getChangeColor()}`}>
            {change}
          </span>
        )}
      </div>
      <p className="font-['Inter'] font-medium text-[14px] text-[#6b7280] mb-[4px]">{title}</p>
      <p className="font-['Inter'] font-bold text-[30px] text-[#111827]">{value}</p>
    </div>
  );
}