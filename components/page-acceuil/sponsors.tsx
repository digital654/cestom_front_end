"use client";

import React from 'react';

const SponsorsSection = () => {
  const partners = [
    { name: "AMCI", logo: "/img-sponsors/img-amci.png", description: "Agence Marocaine de Coopération Internationale" },
    { name: "Polyclinique", logo: "/img-sponsors/img-polycliniq.jpeg", description: "Partenaire santé de la communauté" },
    { name: "Partenaire", logo: "/img-sponsors/img-polycliniq.jpeg", description: "Soutien à l'éducation et la formation" },
  ];

  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#d9f92a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#0b3d0b]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#d9f92a]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
            <span className="text-[#0b3d0b] font-semibold text-sm">Nos Partenaires</span>
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos Sponsors et
            <span className="text-[#0b3d0b] block">Partenaires Officiels</span>
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nous sommes reconnaissants envers nos partenaires qui soutiennent la communauté CESTOM et l'éducation au Maroc.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Main Visual */}
          <div className="space-y-8">
            {/* OCP & Engie Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <img
                src="/img-sponsors/img-ocpengie.jpg"
                alt="OCP & Engie Partners"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="inline-flex items-center gap-2 bg-[#d9f92a] text-[#0b3d0b] px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                  Sponsor Principal
                </div>
                <h3 className="text-white text-2xl font-bold">OCP Group × Engie</h3>
                <p className="text-white/80 mt-2">Leader mondial du phosphate et partenaires de longue date</p>
              </div>
            </div>

            {/* Partner Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-center text-sm">{partner.name}</h4>
                  <p className="text-gray-500 text-xs text-center mt-1 line-clamp-2">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:sticky lg:top-24">
            {/* OCP Feature */}
            <div className="bg-gradient-to-br from-[#0b3d0b] to-[#14452f] rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#d9f92a] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0b3d0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#d9f92a] font-medium">Sponsor Officiel</div>
                  <div className="text-xl font-bold">OCP Morocco</div>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-8">
                Leader mondial sur le marché du phosphate et de ses dérivés, l'OCP 
                est aussi l'un des plus grands producteurs d'engrais au Maroc. 
                Grâce à leur soutien, nous pouvons poursuivre notre mission d'accompagnement 
                des étudiants togolais au Maroc.
              </p>

              {/* Anniversary Badge with OCP Image */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-[#d9f92a] rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-black text-[#0b3d0b]">+25</div>
                      <div className="text-xs text-[#0b3d0b] font-bold">Ans</div>
                    </div>
                  </div>
                  {/* Circular text */}
                  <svg className="absolute inset-0 w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <path id="circleText" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none"/>
                    </defs>
                    <text className="text-[6px] fill-white font-bold">
                      <textPath href="#circleText" startOffset="0%">
                        • ANNÉES DE PARTENARIAT • ANNÉES DE PARTENARIAT •
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <img
                    src="/img-sponsors/img-ocp.jpg"
                    alt="OCP"
                    className="w-full h-20 object-contain rounded-lg bg-white p-2"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a 
                href="#"
                className="inline-flex items-center gap-3 bg-[#d9f92a] text-[#0b3d0b] px-8 py-4 rounded-full font-semibold hover:bg-[#c4e524] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Devenir Partenaire
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
