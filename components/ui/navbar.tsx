"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

//navnar responsive telecharger et modifier depuis acernity.com j ai installer la bibliotheque motion pour les animation et j ai modifier le code pour l adapter a mon projet cestom en changeant les liens et les nom des items de navigation et en ajoutant le logo de cestom et en changeant les couleurs pour correspondre shadcn ui 

export default function NavBar({ className }:  { className?: string } ) {
  const navItems = [
    {
      name: "Acceuil",
      link: "#Acceuil",
    },
    {
      name: "sponsores",
      link: "#sponsores",
    },
     {
      name: "News",
      link: "#news",
    },
     {
      name: "Evenements",
      link: "#evenements",
    },
     {
      name: "A temoignages",
      link: "#temoignages",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute w-full bg-green-500 top-0 ">
      <Navbar className="">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 md:ml-20">
            <NavbarButton className="bg-white" variant="secondary">Login</NavbarButton>
            <NavbarButton className="bg-yellow-500 text-white" variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-yellow-500 text-white"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}

