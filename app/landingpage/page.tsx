import Header from '@/components/page-acceuil/header'
import Hero from '@/components/page-acceuil/hero'
import React from 'react'

// la page landingpage sert de page de test pour le header et le hero que j ai creer
export default function LandingPage () {
  return (
    <div className="min-h-screen relative bg-gray-100">
        <Header />
        <Hero />
    </div>
  )
}
