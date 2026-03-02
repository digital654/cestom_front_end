"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Qui peut devenir membre de CESTOM ?",
    reponse: "Tout étudiant ou stagiaire togolais inscrit dans un établissement au Maroc peut devenir membre en créant un compte et en complétant son dossier."
  },
  {
    id: 2,
    question: "Quelles sont les conditions d'adhésion ?",
    reponse: "Il faut être de nationalité togolaise, résider au Maroc pour les études ou un stage, et s'acquitter des formalités d'inscription via la plateforme."
  },
  {
    id: 3,
    question: "Comment renouveler son adhésion annuelle ?",
    reponse: "Le renouvellement se fait directement depuis votre espace membre en mettant à jour votre certificat de scolarité pour l'année en cours."
  },
  {
    id: 4,
    question: "La plateforme est-elle accessible aux non-étudiants ?",
    reponse: "La plateforme est prioritairement dédiée aux étudiants et stagiaires, mais certaines ressources sont accessibles aux partenaires de la communauté."
  },
  {
    id: 5,
    question: "Comment contacter l'assistance en cas de problème ?",
    reponse: "Vous pouvez utiliser le bouton 'Posez votre question' ou nous contacter directement via les réseaux sociaux officiels de la CESTOM."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 overflow-hidden font-sans min-h-[80vh] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f0f4e8 0%, #e8f4e8 30%, #f4f0e8 60%, #e8f0f4 100%)"
      }}
    >
      {/* ── MOTIF DE POINTS  ── */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* ── COLONNE GAUCHE ── */}
        <div className="relative flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full text-[13px] font-bold text-gray-700 w-fit mb-8 shadow-sm">
            <span className="text-gray-400">+</span> Questions <span className="text-gray-400">+</span>
          </div>
          
          <div className="relative group">
            {/* POINT D'INTERROGATION DÉCORATIF GÉANT  */}
            <div 
              className="absolute -bottom-16 -right-8 lg:-right-16 text-[280px] font-black pointer-events-none select-none italic leading-none z-0"
              style={{
                fontFamily: 'serif',
                color: 'rgba(15, 23, 42, 0.06)', // Couleur sombre mais très transparente
                transform: 'rotate(-5deg)'
              }}
            >
              ?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-8 relative z-10">
              Vous avez des questions ? Voici quelques réponses.
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-md mb-10 relative z-10">
              Trouvez rapidement les informations essentielles concernant votre adhésion, 
              vos droits et le fonctionnement de la communauté CESTOM au Maroc.
            </p>
          </div>

          <button className="flex items-center gap-3 bg-[#16a34a] text-white px-8 py-4 rounded-full font-bold text-sm w-fit hover:bg-[#15803d] transition-all shadow-xl hover:-translate-y-1 relative z-10">
            Posez votre question
            <div className="bg-white/20 rounded-full p-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </button>
        </div>

        {/* ── COLONNE DROITE (ACCORDÉON) ── */}
        <div className="flex flex-col gap-4 justify-center relative z-10">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-[16px] overflow-hidden transition-all duration-300 shadow-sm border border-white/50">
                
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center justify-between px-7 py-5 text-left font-bold text-[15px] transition-all duration-300 ${
                    isOpen ? "bg-[#4ead72] text-white" : "bg-[#fadadd] text-[#1f2937] hover:bg-[#f9c1c7]"
                  }`}
                >
                  <span className="flex-1 pr-4">{item.question}</span>
                  <div className={`rounded-full p-1.5 border-2 transition-transform duration-500 ${
                    isOpen ? "rotate-180 border-white/40 bg-white/10" : "border-black/5 bg-black/5"
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>

                
                <div 
                  className={`bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] py-7 px-8 opacity-100" : "max-h-0 py-0 px-8 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {item.reponse}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}