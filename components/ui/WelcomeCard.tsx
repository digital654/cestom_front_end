
import { MapPin, GraduationCap, Edit } from 'lucide-react';
import Image from 'next/image';

export function WelcomeCard() {
  return (
    <div className="relative overflow-hidden bg-cestom-green rounded-[24px] p-8 text-white shadow-lg">
      
      {/* Cercles décoratifs d'arrière-plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-24 -mt-24 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cestom-light/40 rounded-full -ml-16 -mb-16 blur-3xl" />
      

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {/* photo et bordure jaune */}

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/H1.jpg" 
              alt="Kodjo"
              fill
              className="rounded-full object-cover border-[4px] border-cestom-yellow shadow-lg"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold flex items-center gap-3">
              Bonjour Kodjo ! 👋
            </h2>
            <p className="text-gray-100 font-medium text-sm">
              Heureux de vous revoir sur votre espace CESTOM
            </p>
            
            <div className="flex flex-wrap items-center gap-5 mt-4 text-sm font-medium">
              <span className="bg-cestom-yellow/10 text-cestom-yellow px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">
                Membre actif
              </span>
              <div className="flex items-center gap-1.5 text-gray-50">
                <MapPin className="w-4 h-4 text-gray-200" />
                Rabat
              </div>
              <div className="flex items-center gap-1.5 text-gray-50">
                <GraduationCap className="w-4 h-4 text-gray-200" />
                Université XXX
              </div>
            </div>
          </div>
        </div>

        {/*BOUTON */}
        <button className="flex items-center gap-2.5 bg-gray-100 hover:bg-gray-200 backdrop-blur-sm px-7 py-3 rounded-full transition-colors font-bold text-gray-800 text-sm shadow-inner group">
          <Edit className="w-5 h-5 text-gray-800" />
          Modifier mon profil
        </button>
        
      </div>
    </div>
  );
}