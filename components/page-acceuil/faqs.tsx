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
        background: "linear-gradient(135deg, #f0fdf4 0%, #f0fdf4 50%, #ffffff 100%)"
      }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d9f92a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0b3d0b]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0b3d0b 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column */}
        <div className="relative flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d9f92a]/30 px-5 py-2 rounded-full text-[13px] font-bold text-[#0b3d0b] w-fit mb-8 shadow-lg">
            <span className="text-[#0b3d0b]">✦</span> Questions Fréquentes <span className="text-[#0b3d0b]">✦</span>
          </div>
          
          <div className="relative group">
            {/* Decorative Question Mark */}
            <div 
              className="absolute -bottom-20 -right-8 lg:-right-20 text-[300px] font-black pointer-events-none select-none italic leading-none z-0"
              style={{
                fontFamily: 'serif',
                color: 'rgba(11, 61, 11, 0.04)',
                transform: 'rotate(-5deg)'
              }}
            >
              ?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 relative z-10">
              Vous avez des questions ?
              <span className="block text-[#0b3d0b]">Voici quelques réponses.</span>
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg mb-8 relative z-10">
              Trouvez rapidement les informations essentielles concernant votre adhésion, 
              vos droits et le fonctionnement de la communauté CESTOM au Maroc.
            </p>
          </div>

          <button className="flex items-center gap-3 bg-[#0b3d0b] text-white px-8 py-4 rounded-full font-semibold text-sm w-fit hover:bg-[#14452f] transition-all shadow-xl hover:-translate-y-1 relative z-10 group">
            Posez votre question
            <div className="bg-[#d9f92a]/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex flex-col gap-4 justify-center relative z-10">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="rounded-[16px] overflow-hidden transition-all duration-300 shadow-md border border-gray-100 hover:shadow-lg"
                style={{
                  background: isOpen ? 'linear-gradient(135deg, #0b3d0b 0%, #14452f 100%)' : '#ffffff'
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[15px] transition-all duration-300 ${
                    isOpen ? "text-white" : "text-gray-900 hover:text-[#0b3d0b]"
                  }`}
                >
                  <span className="flex-1 pr-4">{item.question}</span>
                  <div 
                    className={`rounded-full p-2 transition-transform duration-500 flex-shrink-0 ${
                      isOpen ? "bg-white/20 rotate-180" : "bg-gray-100"
                    }`}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={isOpen ? "white" : "#0b3d0b"} 
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] pb-6 px-6 opacity-100" : "max-h-0 pb-0 px-6 opacity-0"
                  }`}
                >
                  <p className={isOpen ? "text-white/90 text-[14px] leading-relaxed" : "text-gray-600 text-[14px] leading-relaxed"}>
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
