"use client";

interface EventCard {
  title: string;
  description: string;
  date?: string;
  time?: string;
  location?: string;
  imageUrl: string;
  link?: string;
}

const events: EventCard[] = [
  {
    title: "Retrouvailles Soirée d'Indépendance",
    description:
      "La CESTOM Agadir organise une soirée de retrouvailles pour célébrer l'indépendance dans une ambiance conviviale.",
    date: "26 juin",
    time: "17h00",
    location: "Salle Omnisports",
    imageUrl: "/images/img-events1.jpg",
    link: "#",
  },
  {
    title: "Projet Cestom Digital",
    description:
      "Lancement officiel du projet Cestom Digital : innovation, formation et opportunités pour les étudiants.",
    date: "30 juin",
    time: "10h00",
    location: "Campus CESTOM Agadir",
    imageUrl: "/images/img-events2.jpg",
    link: "#",
  },
  {
    title: "Journées Culturelles",
    description:
      "Trois jours d'activités culturelles, artistiques et d'échanges entre étudiants de différentes villes.",
    date: "11 au 13 juillet",
    time: "09h30",
    location: "Rabat",
    imageUrl: "/images/img-events3.jpg",
    link: "#",
  },
  {
    title: "Candidate Marrakech",
    description: "Présentation de la candidate : Akoueson Adoké Thérèse Gloria.",
    date: "18 juillet",
    time: "16h00",
    location: "Marrakech",
    imageUrl: "/images/img-events4.jpg",
    link: "#",
  },
];

export default function EventsSection() {
  return (
    <section id="evenements" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0b3d0b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d9f92a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
            <span className="text-[#0b3d0b] font-semibold text-sm">Événements</span>
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explorer Nos Derniers
            <span className="text-[#0b3d0b] block">Événements</span>
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto">
            Découvrez les dernières activités, rencontres et opportunités organisées par la communauté CESTOM au Maroc.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.link || "#"}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              target={event.link ? "_blank" : undefined}
              rel={event.link ? "noreferrer noopener" : undefined}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Date Badge */}
                {event.date && (
                  <div className="absolute top-4 left-4 bg-[#0b3d0b] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                    {event.date}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[#0b3d0b] transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  {event.time && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#0b3d0b] font-semibold hover:gap-3 transition-all"
          >
            Voir tous les événements
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
