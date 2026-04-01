"use client";

import { NavBar } from "../ui/navbar";

export default function Header() {
    return (    
        <div className="w-full z-50 relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b3d0b] via-[#14452f] to-[#0b3d0b]"></div>
          <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <NavBar />
          </div>
        </div>
    );
}
