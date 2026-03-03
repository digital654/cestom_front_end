export default function OurCommunity(){
    return (
    <section className="grid grid-cols-2 min-h-screen place-items-center">
      
      {/* Column 1 */}
      <div className="text-center order-1 relative">
        <img
          src="/img/logo.png"
          alt="logo cestom"
          className="ml-10"
        />

        <div className="w-fit bg-white rounded-xl shadow-lg relative p-6 mt-6">
          
          {/* Texte principal */}
          <div className="text-2xl font-bold text-gray-800">+1000</div>
          <div className="text-gray-500">Membres</div>

          {/* Avatars */}
          <div className="flex -space-x-3 mt-6">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar1.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar2.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar3.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar4.jpg" alt="avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="/avatar5.jpg" alt="avatar" />
          </div>

          {/* Effet dégradé */}
          <div className="absolute inset-0 bg-linear-to-r from-red-200 to-transparent rounded-xl pointer-events-none"></div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="grid order-2">
        
        <div className="w-fit">
          <p className="border-2 text-gray-500 rounded-full mt-20 px-4 py-1">
            + Notre Communauté +
          </p>
        </div>

        <div>
          <p className="text-xl font-bold mt-3">
            Coordination des Etudiants et
          </p>
          <p className="text-xl font-bold mb-3">
            Stagiaires Togolais au Maroc
          </p>

          <p className="text-gray-500 text-xs">
            réunit en son sein près de 650 membres.
          </p>
          <p className="text-gray-500 text-xs">
            Elle s'est fixée pour objectif de renforcer la solidarité entre ses membres,
          </p>
          <p className="text-gray-500 text-xs">
            d'assurer leur intégration et de nouer des liens forts
          </p>
          <p className="text-gray-500 text-xs">
            tant avec le Togo que le pays d'accueil, le Royaume du Maroc.
          </p>
          <p className="text-gray-500 text-xs">
            La CESTOM est reconnue et hébergée par l'ambassade du Togo au Maroc.
          </p>
        </div>

        <div className="flex gap-20 mt-6">
          <div>
            <p className="font-bold">Notre ambition</p>
            <p className="text-gray-500 text-xs">
              Unir et valoriser la communauté estudiantine togolaise au Maroc
            </p>
          </div>

          <div>
            <p className="font-bold">Notre objectif</p>
            <p className="text-gray-500 text-xs">
              Soutenir la réussite et défendre les intérêts des étudiants togolais au Maroc
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-green-600 w-fit rounded-full p-2 px-4 mt-6 cursor-pointer hover:underline">
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

    

