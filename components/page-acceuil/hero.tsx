export default function Hero() {
    return (
        <div className="w-full h-screen relative flex items-center justify-center">
            <img src="/hero.jpg" alt="Hero Image"  className="object-cover w-full h-full fixed opacity-70 " />
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-4 z-10 space-y-8 md:space-y-0 md:space-x-8">
    <div className="flex flex-col gap-10">
    <h1 className="md:text-7xl text-6xl p-0.5 font-bold flex flex-col tracking-tighter leading-17  text-white z-10">
       <span> Bienvenue sur le </span> <span className="">site de la </span> <span className="text-white-500 p-0.5  border w-fit hover:bg-green-500 hover:text-white">Cestom</span>
        </h1>
    <div className="flex">
        <button>
            <a href="#a-propos" className="px-6 py-3 bg-yellow-500 text-white rounded-md text-lg font-medium hover:bg-yellow-600 transition-colors duration-300">En savoir plus</a>
        </button>
        <button className="ml-4">
            <a href="#contact" className="px-6 py-3 bg-green-500 hover:shadow-lg hover:shadow-green-400 text-white rounded-md text-lg font-medium hover:bg-green-600 transition-colors duration-300">Contactez-nous</a>
        </button>
    </div>
    </div>   
    <div className="mt-4 md:mt-0  md:block hidden">
            <img src="/hero_side.jpg" alt="Hero Image" width={700} height={700} className="rounded-lg  shadow-lg [clip-path:polygon(0_0,100%_0,100%_85%,90%_100%,0_100%,0_15%)] pl-40" />
        </div>   
  </div>
        </div>
    );
}

