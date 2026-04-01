"use client";

export default function Hero() {
    return (
        <div className="relative w-full min-h-[90vh] overflow-hidden flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="/hero.jpg" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                            <span className="text-white/90 text-sm font-medium">Bienvenue sur le site officiel</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                            <span className="block">La </span>
                            <span className="relative inline-block">
                                <span className="relative z-10 text-yellow-400">CESTOM</span>
                            </span>
                            <span className="block mt-2">Maroc</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
                            La Coordination des Etudiants et Stagiaires Togolais au Maroc. 
                            Unir, accompagner et valoriser la communauté estudiantine togolaise au Maroc.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="#a-propos" 
                                className="group inline-flex items-center gap-3 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                En savoir plus
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a 
                                href="#contact" 
                                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300"
                            >
                               Contactez-nous
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">+1000</div>
                                <div className="text-white/70 text-sm">Membres</div>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">25+</div>
                                <div className="text-white/70 text-sm">Années d'existence</div>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">10+</div>
                                <div className="text-white/70 text-sm">Partenaires</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="hidden lg:block relative">
                        <div className="relative">
                            {/* Main Image with Frame */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-2xl"></div>
                                <img 
                                    src="/hero_side.jpg" 
                                    alt="CESTOM Morocco" 
                                    className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Reconnue par</div>
                                        <div className="text-xs text-gray-500">Ambassade du Togo au Maroc</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
