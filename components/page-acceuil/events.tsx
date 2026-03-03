import "@/styles/events.css";
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
      "La CESTOM Agadir organise une soirée de retrouvailles pour célébrer l’indépendance dans une ambiance conviviale.",
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
      "Trois jours d’activités culturelles, artistiques et d’échanges entre étudiants de différentes villes.",
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
    <section className="events-section">
      <a href="#" target="_blank" rel="noreferrer noopener" className="see-all-link">
        + Nos Récents Evenements +
      </a>

      <h2>
        Explorer Nos Derniers
        <br />
        Événements
      </h2>

      <div className="events-grid">
        {events.map((event, index) => (
          <a
            key={index}
            href={event.link || "#"}
            className="event-card"
            target={event.link ? "_blank" : undefined}
            rel={event.link ? "noreferrer noopener" : undefined}
          >
            <img src={event.imageUrl} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.date && <span className="event-date">{event.date}</span>}
              {event.time && <span className="event-time">{event.time}</span>}
              {event.location && <span className="event-location">{event.location}</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

