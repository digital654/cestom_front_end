export default function Footer() {
    return(
        <footer className="mt-6 bg-black grid grid-cols-1 place-items-center">
      <div className="px-12 mt-8 mb-6 md:grid md:grid-cols-4 md:gap-12">
        {/* First Card */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="./img/Logo cestom PNG(1) (1).png"
              alt="logo cestom"
              className="w-13 h-10 inline-block"
            />
            <p className="text-white font-bold text-xl">CESTOM</p>
          </div>

          <div className="text-white mt-2 text-[14px]">
            <p>Chaque démo construite avec Teba aura un aspect</p>
            <p>différent. Vous pourrez personnaliser presque tout</p>
            <p>dans l'apparence de votre site web avec seulement</p>
            <p>quelques</p>
          </div>

          <div className="rounded-full flex items-center gap-3 mt-6">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
                alt="facebook"
                className="w-6 h-6 bg-white rounded-full"
              />
            </a>

            <a href="#">
              <img
                src="https://e7.pngegg.com/pngimages/432/1016/png-clipart-computer-icons-logo-instagram-logo-miscellaneous-logo-thumbnail.png"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>

            <a href="#">
              <img
                src=""
                alt="twitter"
                className="w-6 h-6"
              />
            </a>

            <a href="#">
              <img
                src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNC0xMC5wbmc.png"
                alt="linkedin"
                className="w-6 h-6 rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="text-white mt-6">
          <p className="font-bold">Liens rapides</p>
          <div className="text-[14px]">
            <p><a href="#" className="hover:underline hover:opacity-80"target="_blank">A propos de nous</a></p>
            <p><a href="#" className="hover:underline hover:opacity-80"target="_blank">Nos leaders</a></p>
            <p><a href="#" className="hover:underline hover:opacity-80"target="_blank">Nos Partenaires</a></p>
            <p><a href="#" className="hover:underline hover:opacity-80"target="_blank">Blogs</a></p>
            <p><a href="#" className="hover:underline hover:opacity-80"target="_blank">Contactez-nous</a></p>
          </div>
        </div>

        {/* Third Card */}
        <div className="text-white mt-6 text-[14px]">
          <p className="font-bold">Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>

        {/* Fourth Card */}
        <div className="text-white mt-6 text-[14px]">
          <p className="font-bold">Informations</p>
          <p><a href="#" className="hover:underline hover:opacity-80">Lorem ipsum</a></p>
          <p><a href="#" className="hover:underline hover:opacity-80">Lorem ipsum</a></p>
          <p><a href="#" className="hover:underline hover:opacity-80">Lorem ipsum</a></p>
          <p><a href="#" className="hover:underline hover:opacity-80">Lorem ipsum</a></p>
          <p><a href="#" className="hover:underline hover:opacity-80">FAQs</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 flex flex-col md:flex-row justify-between items-center w-full text-white px-6 py-4 gap-4">
        <div>
          Droit d'auteur © 2026 devstarit. Tous droits réservés.
        </div>

        <div className="flex gap-8">
          <p><a href="#" className="hover:underline hover:opacity-80" target="_blank">Confidentialités & Conditions</a></p> target="_blank"
          <p><a href="#" className="hover:underline hover:opacity-80" target="_blank">FAQ</a></p>
          <p><a href="#" className="hover:underline hover:opacity-80" target="_blank">Contactez-nous</a></p>
          </div>
      </div>
    </footer>
    )
}
 


