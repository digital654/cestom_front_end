"use client";

import React, { useState } from "react";

// Structure des données basée sur ta photo
const newsPosts = [
  {
    id: 1,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Evénement",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humanitaire à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Annonce",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humanitaire à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Evenements",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humanitaire à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1523240715639-9978131bbf28?w=600&h=400&fit=crop",
  },
];

export default function LatestNews() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      className="relative py-20 overflow-hidden font-sans"
      style={{
        background: "linear-gradient(135deg, #f0f4e8 0%, #e8f4e8 30%, #f4f0e8 60%, #e8f0f4 100%)"
      }}
    >
      {/* Rayons lumineux en arrière-plan pour correspondre à la FAQ/Blog */}
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `
            linear-gradient(115deg, rgba(255,255,255,0.6) 0%, transparent 38%),
            linear-gradient(245deg, rgba(255,255,255,0.35) 0%, transparent 38%)
          `
        }}
      />

      

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-bold mb-4">
            <span className="text-gray-300">+</span>
            <span className="uppercase tracking-widest">Notre Blog</span>
            <span className="text-gray-300">+</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Dernières nouvelles
          </h2>
        </div>

        {/* GRILLE DES ARTICLES  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer border border-white/50"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top: Metadata & Titre */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-4 text-[13px] text-gray-400 font-medium mb-3">
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {post.date}
                  </div>
                </div>
                <h3 className="text-[17px] font-bold text-[#0f172a] leading-snug group-hover:text-[#4ead72] transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Milieue: Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden mx-4 rounded-xl">
                {/* Badge Catégorie */}
                <div className="absolute top-4 left-4 z-20 bg-[#1f2937] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay "Lire la suite" (Vert) */}
                <div className={`absolute inset-0 bg-[#4ead72]/90 flex items-center justify-center transition-opacity duration-300 z-30 ${hoveredId === post.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="flex items-center gap-2 text-white font-bold text-sm">
                    Lire la suite
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom: Excerpt */}
              <div className="p-6 pt-5">
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}