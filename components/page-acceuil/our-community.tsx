export default function OurCommunity(){
    return (
  <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center gap-10 lg:gap-16 px-6 lg:px-16 py-16">
      
      {/* Column 1 */}
      <div className="text-center order-1 relative w-full">
        <img
          src="/Calque 1a.png"
          alt="logo cestom"
          className="mx-auto w-56 sm:w-72 md:w-80 h-auto"
        />

        <div className="w-fit bg-white rounded-xl shadow-lg relative overflow-hidden p-6 mt-6 mx-auto">
          
          {/* Texte principal */}
          <div className="text-2xl font-bold text-gray-800">+1000</div>
          <div className="text-gray-500 text-sm">Membres</div>

          {/* Avatars */}
          <div className="flex -space-x-3 mt-6">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
          </div>

          {/* Effet dégradé */}
          <div className="absolute inset-0 bg-linear-to-r from-red-100/60 to-transparent rounded-xl pointer-events-none -z-10"></div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="grid order-2 w-full max-w-2xl">
        
        <div className="w-fit">
          <p className="border border-gray-300 text-gray-500 rounded-full mt-2 lg:mt-10 px-4 py-1 text-sm">
            + Notre Communauté +
          </p>
        </div>

        <div>
          <p className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
            Coordination des Etudiants et
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Stagiaires Togolais au Maroc
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            réunit en son sein près de 650 membres.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Elle s'est fixée pour objectif de renforcer la solidarité entre ses membres,
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            d'assurer leur intégration et de nouer des liens forts
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            tant avec le Togo que le pays d'accueil, le Royaume du Maroc.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            La CESTOM est reconnue et hébergée par l'ambassade du Togo au Maroc.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-8">
          <div>
            <p className="font-bold text-lg">Notre ambition</p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Unir et valoriser la communauté estudiantine togolaise au Maroc
            </p>
          </div>

          <div>
            <p className="font-bold text-lg">Notre objectif</p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Soutenir la réussite et défendre les intérêts des étudiants togolais au Maroc
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-green-600 w-fit rounded-full p-2 px-4 mt-8 cursor-pointer hover:underline transition-all duration-200 hover:bg-green-700">
          <a href="#" className="text-white">
            En savoir plus sur nous
          </a>

          <span className="bg-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

    

