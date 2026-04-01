"use client";

const member = {
  name: "Ronald Richards",
  role: "Président de la CESTOM Maroc",
  phone: "+212 6 00 00 0000",
  email: "contact@cestom-maroc.org",
  bio: "Leader passionné et dévoué, je m'engage au quotidien pour accompagner les étudiants et stagiaires togolais au Maroc. Ensemble, nous construisons une communauté forte et solidaire.",
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
    <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#f0fdf4]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#d9f92a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0b3d0b]/5 rounded-full blur-3xl"></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .tl-page, .tl-page *, .tl-page *::before, .tl-page *::after {
          box-sizing: border-box;
        }
        .tl-page *, .tl-page *::before, .tl-page *::after {
          margin: 0;
          padding: 0;
        }
        .tl-page {
          width: 100%;
          display: flex; align-items: center; justify-content: center;
          padding: 48px 20px;
          font-family: 'DM Sans', sans-serif;
          position: relative; overflow: hidden;
        }
        .tl-page::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(180,200,220,0.4) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .tl-card {
          max-width: 1000px; width: 100%;
          display: flex; flex-direction: row;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          position: relative; z-index: 1;
          overflow: visible;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .tl-left {
          background: linear-gradient(135deg, #0b3d0b 0%, #14452f 100%);
          border-radius: 24px 0 0 24px;
          width: 380px;
          min-width: 380px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          min-height: 480px;
        }
        .tl-frame {
          width: 280px;
          height: 340px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          background: #1a1a1a;
          flex-shrink: 0;
          position: relative;
        }
        .tl-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }
        .tl-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,61,11,0.3), transparent);
        }
        .tl-thumbs {
          position: absolute;
          right: -26px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 20;
        }
        .tl-thumb {
          width: 52px; height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          background: #94a3b8;
          flex-shrink: 0;
          cursor: default;
        }
        .tl-thumb:first-child {
          width: 60px; height: 60px;
          border-color: #d9f92a;
          box-shadow: 0 0 0 3px rgba(217,249,42,0.3), 0 4px 15px rgba(0,0,0,0.2);
        }
        .tl-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 15%;
          display: block;
        }
        .tl-right {
          flex: 1;
          background: #ffffff;
          border-radius: 0 24px 24px 0;
          padding: 48px 44px 44px 52px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .tl-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f0fdf4;
          border: 1.5px solid rgba(217,249,42,0.5);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; color: #0b3d0b;
          width: fit-content; margin-bottom: 16px;
          user-select: none;
        }
        .tl-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px; font-weight: 700;
          color: #0f172a; line-height: 1.2;
          margin-bottom: 24px;
        }
        .tl-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px; font-weight: 700;
          color: #0f172a; margin-bottom: 4px;
        }
        .tl-role {
          font-size: 13px; font-weight: 600;
          color: #0b3d0b; letter-spacing: 0.05em;
          margin-bottom: 18px;
        }
        .tl-bio {
          font-size: 14px; line-height: 1.8;
          color: #64748b; margin-bottom: 24px;
        }
        .tl-contacts { display: flex; flex-direction: column; gap: 10px; margin-bottom: 26px; }
        .tl-contact {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: #334155; font-weight: 500;
        }
        .tl-contact svg { color: #0b3d0b; flex-shrink: 0; }
        .tl-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .tl-socials { display: flex; gap: 10px; }
        .tl-social {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #e2e8f0; background: #fff;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; text-decoration: none;
          transition: all 0.25s ease;
        }
        .tl-social:hover { background: #0b3d0b; color: #fff; border-color: #0b3d0b; transform: translateY(-3px); }
        .tl-social.li:hover { background: #0077b5; border-color: #0077b5; }
        .tl-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0b3d0b; color: #fff;
          border: none; border-radius: 50px;
          padding: 14px 24px;
          font-size: 13px; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease; white-space: nowrap;
        }
        .tl-cta:hover {
          background: #14452f; transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(11,61,11,0.3);
        }
        .tl-cta-circle {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
        }
        @media (max-width: 1024px) {
          .tl-page { padding: 36px 18px; }
          .tl-card { max-width: 900px; }
          .tl-left { width: 320px; min-width: 320px; padding: 30px; min-height: 420px; }
          .tl-frame { width: 240px; height: 300px; }
          .tl-thumbs { right: -22px; }
          .tl-thumbs { left: calc(30px + 240px - 24px); }
          .tl-right { padding: 34px 32px 34px 40px; }
          .tl-heading { font-size: 28px; }
        }
        @media (max-width: 860px) {
          .tl-page { min-height: auto; padding: 24px 16px; }
          .tl-card { flex-direction: column; border-radius: 20px; overflow: hidden; }
          .tl-left {
            width: 100%; min-width: 0; min-height: auto;
            padding: 30px 20px; border-radius: 20px 20px 0 0;
            flex-direction: column;
          }
          .tl-frame { width: min(100%, 280px); height: auto; aspect-ratio: 4/5; }
          .tl-thumbs {
            position: static; transform: none; margin-top: 16px;
            width: 100%; flex-direction: row; justify-content: center; gap: 10px;
          }
          .tl-thumb { width: 44px; height: 44px; }
          .tl-thumb:first-child { width: 50px; height: 50px; margin-left: 0; }
          .tl-right { padding: 28px 24px 24px; border-radius: 0 0 20px 20px; }
          .tl-heading { font-size: clamp(24px, 5vw, 30px); margin-bottom: 18px; }
          .tl-name { font-size: 22px; }
          .tl-bio { line-height: 1.7; }
          .tl-footer { align-items: stretch; gap: 12px; }
          .tl-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#d9f92a]/30 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
            <span className="text-[#0b3d0b] font-semibold text-sm">Notre Leadership</span>
            <span className="w-2 h-2 bg-[#0b3d0b] rounded-full"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Rencontrez Nos <span className="text-[#0b3d0b]">Leaders</span>
          </h2>
        </div>

        <div className="tl-page">
          <div className="tl-card">
            {/* Left Panel */}
            <div className="tl-left">
              <div className="tl-frame">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="tl-thumbs">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="tl-thumb">
                    <img src={member.photo} alt={`${member.name} ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="tl-right">
              <div className="tl-badge">
                + NOS LEADERS +
              </div>

              <h2 className="tl-heading">Un leadership au service de la communauté</h2>

              <p className="tl-name">{member.name}</p>
              <p className="tl-role">{member.role}</p>
              <p className="tl-bio">{member.bio}</p>

              <div className="tl-contacts">
                <div className="tl-contact">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9c1.91 3.27 4.72 6.07 8 8l1.35-1.35a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {member.phone}
                </div>
                <div className="tl-contact">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    { s: "twitter", cls: "tw" },
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
      </div>
    </section>
  );
}
