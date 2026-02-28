export default function Hero() {
    return (
        <div className="w-full h-screen relative  flex items-center justify-center">
            <img src="/hero.jpg" alt="Hero Image"  className="object-cover fixed opacity-70 w-full h-full mt-20" />
   <div className="w-full h-full flex items-center justify-center z-10">
    <h1 className="text-7xl -mt-65  font-bold flex flex-col items-center justify-center font-mono italic   text-white absolute z-10">Bienvenue a Cestom <span className="font-mono italic">Digital</span></h1>
    <div>
        <button>
            <a href="#a-propos" className="px-6 py-3 bg-yellow-500 text-white rounded-md text-lg font-medium hover:bg-yellow-600 transition-colors duration-300">En savoir plus</a>
        </button>
        <button className="ml-4">
            <a href="#contact" className="px-6 py-3 bg-green-500 hover:shadow-lg hover:shadow-green-400 text-white rounded-md text-lg font-medium hover:bg-green-600 transition-colors duration-300">Contactez-nous</a>
        </button>
    </div>
    </div>            

        </div>
    );
}

