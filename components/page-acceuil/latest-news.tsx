"use client";

import React, { useState } from "react";

const newsPosts = [
  {
    id: 1,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Événement",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humaine à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Annonce",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humaine à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    author: "Admin",
    date: "2 octobre 2025",
    title: "L'engagement étudiant au cœur de notre mission",
    category: "Actualités",
    excerpt: "La Cestom renouvelle sa gratitude à BANK OF AFRICA - Togo Pour son soutien et son engagement à l'éducation et la caravane humaine à travers un don de 500 cahiers",
    image: "https://images.unsplash.com/photo-1523240715639-9978131bbf28?w=600&h=400&fit=crop",
  },
];

export default function LatestNews() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="news" className="relative py-24 overflow-hidden font-sans bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#d9f92a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0b3d0b]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#d9f92a]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
            <span className="text-[#0b3d0b] font-semibold text-sm">Notre Blog</span>
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Dernières <span className="text-[#0b3d0b]">Nouvelles</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Restez informé des dernières activités, annonces et événements de la communauté CESTOM au Maroc.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[20px] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group cursor-pointer border border-gray-100 overflow-hidden hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top: Metadata & Title */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between text-[13px] text-gray-400 font-medium mb-3">
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {post.date}
                  </div>
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[#0b3d0b] transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Middle: Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden mx-4 rounded-xl">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#0b3d0b] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0b3d0b]/90 via-[#0b3d0b]/40 to-transparent flex items-center justify-center transition-opacity duration-300 z-30 ${hoveredId === post.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    Lire la suite
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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

        {/* View All */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#0b3d0b] font-semibold hover:gap-3 transition-all group"
          >
            Voir tous les articles
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
