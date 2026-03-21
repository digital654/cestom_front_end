// components/DashboardHeader.tsx
import { Bell, LogOut } from 'lucide-react';
import Image from 'next/image';

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-3.5 flex items-center justify-between">
      
      <h1 className="text-xl font-bold text-gray-800">Tableau de bord</h1>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors">
          <Bell className="w-6 h-6" />
        </button>

        <div className="relative w-10 h-10 shrink-0">
          <Image 
            src="/H1.jpg" 
            alt="Avatar de Kodjo"
            fill
            className="rounded-full object-cover border border-gray-100 shadow-sm"
          />
        </div>

        <div className="text-sm">
          <div className="font-bold text-gray-950">Kodjo</div>
          <div className="text-xs text-gray-500 font-medium">Membre actif</div>
        </div>

        <button className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors group">
          <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform" />
        </button>

      </div>
    </header>
  );
}