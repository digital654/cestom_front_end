import React from 'react';
import '@/styles/sponsors.css';

const SponsorsSection = () => {
  const partners = [
    { name: "AMCI", logo: "/img-sponsors/img-amci.png", description: "is simply dummy text of the printing and typesetting." },
    { name: "Lorem Ipsum", logo: "/img-sponsors/img-polycliniq.jpeg", description: "is simply dummy text of the printing and typesetting." },
    { name: "Lorem Ipsum", logo: "/img-sponsors/img-polycliniq.jpeg", description: "is simply dummy text of the printing and typesetting." },
  ];

  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/* Header Badge */}
        <div className="badge-wrapper">
          <span className="badge">
            <a href="#">+ Nos Sponsors +</a>
          </span>
        </div>

        <div className="grid-columns">
          {/* Left: Main Visuals */}
          <div className="main-visuals">
            <div className="large-image">
              <img
                src="/img-sponsors/img-ocpengie.jpg"
                alt="OCP & Engie Partners"
              />
            </div>

            {/* Small Partner Cards */}
            <div className="partner-cards">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <img src={partner.logo} alt={partner.name} />
                  <div>
                    <h4>{partner.name}</h4>
                    <p>{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content & Sponsor Focus */}
          <div className="content-section">
            <div>
              <h2>Notre sponsor officiel:</h2>
              <div className="official-badge">
                <h3> OCP </h3>
              </div>
              <p>
                Leader mondial sur le marché du phosphate et de ses dérivés, l'OCP
                est aussi l'un des plus grands producteurs d'engrais au Maroc.
              </p>
            </div>

            <div className="anniversary-row">
              {/* Badge 25 ans */}
              <div className="anniversary-badge">
                <div className="inner">
                  <span>+25</span>
                </div>
                {/* Texte circulaire (SVG simple) */}
                <svg viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text>
                    <textPath href="#circlePath">
                      Ans de Partenariats • Ans de Partenariats •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Side Card Image */}
              <div className="side-card">
                <img
                  src="/img-sponsors/img-ocp.jpg"
                  alt="Sustainability"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-wrapper">
          <a href="#">
            <button className="cta-button">
            Découvrez En Plus → 
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
