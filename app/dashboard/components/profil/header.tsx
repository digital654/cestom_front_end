import Image from "next/image";
import { Search, Bell } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900">Tableau de bord</h1>

      <div className="flex items-center gap-6">
        

        {/* Notifications */}
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <Image
            src="/avatar1.jpg"
            alt="Profile Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-semibold text-gray-900">Kodjo A.</div>
            <div className="text-xs text-gray-500">Étudiant</div>
          </div>
        </div>
      </div>
    </div>
  );
}
