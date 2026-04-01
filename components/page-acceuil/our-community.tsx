"use client";

export default function OurCommunity(){
    return (
        <section id="a-propos" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f0fdf4] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d9f92a]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column - Image & Stats */}
                    <div className="relative order-1">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#d9f92a]/30 rounded-lg"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#0b3d0b]/20 rounded-lg"></div>
                            
                            <img
                                src="/Calque 1a.png"
                                alt="Logo CESTOM"
                                className="relative w-64 lg:w-80 mx-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Stats Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 bg-white rounded-2xl shadow-2xl p-6 min-w-[280px] border border-gray-100">
                            <div className="text-center mb-4">
                                <div className="text-5xl font-bold text-[#0b3d0b]">+1000</div>
                                <div className="text-gray-500 font-medium">Membres actifs</div>
                            </div>
                            
                            {/* Avatar Stack */}
                            <div className="flex justify-center -space-x-3 mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <img 
                                        key={i}
                                        className="w-10 h-10 rounded-full border-3 border-white shadow-md" 
                                        src="/avatar1.jpg" 
                                        alt={`Membre ${i}`} 
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full border-3 border-white shadow-md bg-[#0b3d0b] flex items-center justify-center text-white text-xs font-bold">
                                    +995
                                </div>
                            </div>

                            {/* Gradient overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#d9f92a]/10 to-transparent rounded-2xl pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-2">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#d9f92a]/30 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
                            <span className="text-[#0b3d0b] font-semibold text-sm">Notre Communauté</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Coordination des Etudiants et
                            <span className="text-[#0b3d0b] block">Stagiaires Togolais au Maroc</span>
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                La CESTOM Maroc réunit en son sein près de <strong>650 membres</strong> actifs. 
                                Elle s'est fixé pour objectif de renforcer la solidarité entre ses membres, 
                                d'assurer leur intégration et de nouer des liens forts tant avec le Togo 
                                que le pays d'accueil, le Royaume du Maroc.
                            </p>
                            <p>
                                La CESTOM est reconnue et hébergée par <strong>l'Ambassade du Togo au Maroc</strong>, 
                                ce qui témoigne de son importance et de son engagement envers la communauté estudiantine togolaise.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-gradient-to-br from-[#f0fdf4] to-white p-5 rounded-xl border border-[#d9f92a]/20">
                                <div className="w-12 h-12 bg-[#0b3d0b] rounded-xl flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-[#d9f92a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Notre Ambition</h3>
                                <p className="text-gray-500 text-sm">
                                    Unir et valoriser la communauté estudiantine togolaise au Maroc
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#f0fdf4] to-white p-5 rounded-xl border border-[#d9f92a]/20">
                                <div className="w-12 h-12 bg-[#0b3d0b] rounded-xl flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-[#d9f92a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Notre Objectif</h3>
                                <p className="text-gray-500 text-sm">
                                    Soutenir la réussite et défendre les intérêts des étudiants togolais
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 bg-[#0b3d0b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#14452f] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                            >
                                En savoir plus sur nous
                                <span className="bg-[#d9f92a]/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                                    <svg className="w-5 h-5 text-[#d9f92a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
