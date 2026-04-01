import SponsorsSection from "@/components/page-acceuil/sponsors";
import OurCommunity from "@/components/page-acceuil/our-community";
import Footer from "@/components/page-acceuil/footer";
import Events from "@/components/page-acceuil/events";
import FAQ from "@/components/page-acceuil/faqs";
import ClientReviews from "@/components/page-acceuil/ClientReviews";
import LatestNews from "@/components/page-acceuil/latest-news";
import Header from '@/components/page-acceuil/header'
import Hero from '@/components/page-acceuil/hero'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <OurCommunity />
      <Events />
      <SponsorsSection />
      <ClientReviews />
      <FAQ />
      <LatestNews />
      <Footer />
    </div>
  )
}
