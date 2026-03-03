"use client";

const member = {
  name: "Ronald Richards",
  role: "Conseiller financier",
  phone: "123-456-7890",
  email: "zenvia@example.com",
  bio: "L'excellence projetée est remarquablement estimée à Devonshire. Côté vie passée. Continuez à parler, c'était horrible pour la position domestique. L'excellence projetée est estimée à Devonshire. Côté vie passée. Continuez à parler.",
  social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" },
  
  photo: "/p1.jpeg",
};

function SocialIcon({ type }: { type: string }) {
  if (type === "facebook") return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
  if (type === "linkedin") return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
  if (type === "twitter") return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
  if (type === "instagram") return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
  return null;
}

export default function ClientReviews() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .tl-page, .tl-page *, .tl-page *::before, .tl-page *::after {
          box-sizing: border-box;
        }
        .tl-page *, .tl-page *::before, .tl-page *::after {
          margin: 0;
          padding: 0;
        }

        .tl-page {
          /* Fond global avec motif points */
          background: #eaf1f8;
          width: 100%;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 48px 20px;
          font-family: 'DM Sans', sans-serif;
          position: relative; overflow: hidden;
        }
        .tl-page::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(180,200,220,0.6) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        /* Carte : flex row, les 2 panneaux côte à côte, MÊME fond blanc */
        .tl-card {
          max-width: 920px; width: 100%;
          display: flex; flex-direction: row;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.10);
          position: relative; z-index: 1;
          overflow: visible; /* ronds peuvent déborder */
        }

        /* PANNEAU GAUCHE  */
        .tl-left {
          /* Même fond blanc que la carte */
          background: #ffffff;
          border-radius: 24px 0 0 24px;
          width: 420px;
          min-width: 420px;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 36px;
          min-height: 420px;
        }

        /* Cadre de la photo  */
        .tl-frame {
          width: 300px;
          height: 340px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          background: #e2e8f0;
          flex-shrink: 0;
          position: relative;
        }
        .tl-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* centré sur le visage */
          object-position: center 20%;
          display: block;
        }

        /*
          Miniatures rondes positionnées en absolute,
          centrées sur le bord DROIT du cadre.

          .tl-left est large de 420px, padding gauche 36px.
          Centre horizontal du cadre (300px) : 36 + 300 = 336px depuis le bord gauche de .tl-left
          On veut les ronds (52px) à cheval sur ce bord droit → left = 336 - 26 = 310px
        */
        .tl-thumbs {
          position: absolute;
          left: calc(36px + 300px - 26px); /* bord droit du cadre - rayon du rond */
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 20;
        }

        .tl-thumb {
          width: 52px; height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
          background: #94a3b8;
          flex-shrink: 0;
          cursor: default;
        }
        /* Premier rond  */
        .tl-thumb:first-child {
          width: 58px; height: 58px;
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.22), 0 3px 12px rgba(0,0,0,0.18);
          margin-left: -3px; /* compense taille */
        }
        .tl-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 20%;
          display: block;
        }

        /* PANNEAU DROIT  */
        .tl-right {
          flex: 1;
          background: #ffffff;
          border-radius: 0 24px 24px 0;
          /* padding-left généreux pour que les ronds (qui débordent de ~26px) ne chevauchent pas le texte */
          padding: 44px 40px 40px 48px;
          display: flex; flex-direction: column; justify-content: center;
        }

        /* Badge "+ Nos Leaders +" */
        .tl-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f0fdf4;
          border: 1.5px solid #bbf7d0;
          border-radius: 50px;
          padding: 5px 15px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; color: #15803d;
          width: fit-content; margin-bottom: 12px;
          user-select: none;
        }

        .tl-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 30px; font-weight: 700;
          color: #0f172a; line-height: 1.2;
          margin-bottom: 20px;
        }

        .tl-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px; font-weight: 700;
          color: #0f172a; margin-bottom: 3px;
        }
        .tl-role {
          font-size: 12px; font-weight: 700;
          color: #16a34a; letter-spacing: 0.05em;
          margin-bottom: 14px;
        }
        .tl-bio {
          font-size: 13px; line-height: 1.78;
          color: #64748b; margin-bottom: 18px;
        }

        .tl-contacts { display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px; }
        .tl-contact {
          display: flex; align-items: center; gap: 9px;
          font-size: 13px; color: #334155; font-weight: 500;
        }
        .tl-contact svg { color: #64748b; flex-shrink: 0; }

        .tl-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }

        .tl-socials { display: flex; gap: 8px; }
        .tl-social {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1.5px solid #e2e8f0; background: #fff;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; text-decoration: none;
          transition: all 0.2s ease;
        }
        .tl-social:hover { background: #0f172a; color: #fff; border-color: #0f172a; transform: translateY(-2px); }
        .tl-social.li:hover { background: #0077b5; border-color: #0077b5; }

        .tl-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #16a34a; color: #fff;
          border: none; border-radius: 50px;
          padding: 11px 20px;
          font-size: 12.5px; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease; white-space: nowrap;
        }
        .tl-cta:hover {
          background: #15803d; transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(22,163,74,0.28);
        }
        .tl-cta-circle {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
        }

        @media (max-width: 1024px) {
          .tl-page {
            padding: 36px 18px;
          }
          .tl-card {
            max-width: 820px;
          }
          .tl-left {
            width: 360px;
            min-width: 360px;
            padding: 34px 24px;
          }
          .tl-frame {
            width: 260px;
            height: 300px;
          }
          .tl-thumbs {
            left: calc(24px + 260px - 24px);
          }
          .tl-right {
            padding: 34px 28px 34px 38px;
          }
          .tl-heading {
            font-size: 26px;
          }
        }

        @media (max-width: 860px) {
          .tl-page {
            min-height: auto;
            padding: 24px 12px;
          }
          .tl-card {
            flex-direction: column;
            border-radius: 20px;
            overflow: hidden;
          }
          .tl-left {
            width: 100%;
            min-width: 0;
            min-height: auto;
            padding: 24px 18px 18px;
            border-radius: 20px 20px 0 0;
            flex-direction: column;
          }
          .tl-frame {
            width: min(100%, 360px);
            height: auto;
            aspect-ratio: 4 / 5;
          }
          .tl-thumbs {
            position: static;
            transform: none;
            margin-top: 14px;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            gap: 8px;
          }
          .tl-thumb {
            width: 44px;
            height: 44px;
          }
          .tl-thumb:first-child {
            width: 48px;
            height: 48px;
            margin-left: 0;
          }
          .tl-right {
            padding: 22px 18px 20px;
            border-radius: 0 0 20px 20px;
          }
          .tl-heading {
            font-size: clamp(24px, 5.8vw, 30px);
            margin-bottom: 14px;
          }
          .tl-name {
            font-size: 20px;
          }
          .tl-bio {
            line-height: 1.62;
          }
          .tl-footer {
            align-items: stretch;
            gap: 10px;
          }
          .tl-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .tl-page {
            padding: 16px 10px;
          }
          .tl-left {
            padding: 18px 12px 14px;
          }
          .tl-right {
            padding: 18px 12px 14px;
          }
          .tl-badge {
            font-size: 10px;
            padding: 4px 12px;
          }
          .tl-heading {
            font-size: 22px;
          }
          .tl-contacts {
            margin-bottom: 16px;
          }
          .tl-social {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      <div className="tl-page">
        <div className="tl-card">

          {/* ── GAUCHE  */}
          <div className="tl-left">

            {/* Cadre photo format paysage */}
            <div className="tl-frame">
              <img src={member.photo} alt={member.name} />
            </div>

            {/* 4 miniatures rondes centrées sur le bord droit du cadre */}
            <div className="tl-thumbs">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="tl-thumb">
                  <img src={member.photo} alt={`${member.name} ${i + 1}`} />
                </div>
              ))}
            </div>

          </div>

          {/* ── DROITE : informations ── */}
          <div className="tl-right">

            <div className="tl-badge">
              + Nos Leaders +
            </div>

            <h2 className="tl-heading">Avis de nos clients</h2>

            <p className="tl-name">{member.name}</p>
            <p className="tl-role">{member.role}</p>
            <p className="tl-bio">{member.bio}</p>

            <div className="tl-contacts">
              <div className="tl-contact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9c1.91 3.27 4.72 6.07 8 8l1.35-1.35a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {member.phone}
              </div>
              <div className="tl-contact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {member.email}
              </div>
            </div>

            <div className="tl-footer">
              <div className="tl-socials">
                {[
                  { s: "facebook", cls: "fb" },
                  { s: "linkedin", cls: "li" },
                  { s: "twitter",  cls: "tw" },
                  { s: "instagram",cls: "ig" },
                ].map(({ s, cls }) => (
                  <a key={s} href={member.social[s as keyof typeof member.social]} className={`tl-social ${cls}`} aria-label={s}>
                    <SocialIcon type={s} />
                  </a>
                ))}
              </div>

              <button className="tl-cta">
                Voir Tous les Membres
                <span className="tl-cta-circle">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
