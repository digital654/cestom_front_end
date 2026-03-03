

// components/EventsSection.tsx
import "@/styles/events.css";
import React from "react";

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
    description: "La CESTOM Agadir organise...",
    date: "26 juin",
    time: "17h00",
    location: "Salle Omnisports",
    imageUrl: "/images/img-events1.jpg",
  },
  {
    title: "Projet Cestom Digital",
    description: "Lancement officiel du projet Cestom Digital",
    imageUrl: "/images/img-events2.jpg",
    link: "#",
  },
  {
    title: "Journées Culturelles",
    description: "J'y serai !",
    date: "11 au 13 juillet",
    location: "Rabat",
    imageUrl: "/images/img-events3.jpg",
  },
  {
    title: "Candidat Marakech",
    description: "Akoueson Adoké Thérèse Gloria",
    imageUrl: "/images/img-events4.jpg",
  },
];

const EventsSection: React.FC = () => {
  return (
    <section className="events-section">
        <a href="#" target="_blank" className="see-all-link">+ Nos Récents Evenements +</a>
        <h2>Explorer Nos Derniers 
            Événements</h2>
        <div className="events-grid">
            {events.map((event, index) => (
            <a
                key={index}
                href={event.link || "#"}
                className="event-card"
                target={event.link ? "_blank" : undefined}
            >
                <img src={event.imageUrl} alt={event.title} />
                <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                {event.date && <span className="event-date">{event.date}</span>}
                {event.time && <span className="event-time">{event.time}</span>}
                {event.location && (
                    <span className="event-location">{event.location}</span>
                )}
                </div>
            </a>
            ))}
        </div>
    </section>
  );
};

export default EventsSection;