import Events from "@/components/page-acceuil/events";
import FAQ from "@/components/page-acceuil/faqs";
import ClientReviews from "@/components/page-acceuil/ClientReviews";
import LatestNews from "@/components/page-acceuil/latest-news";

import Header from '@/components/page-acceuil/header'
import Hero from '@/components/page-acceuil/hero'

export default function Home() {
  return (
    <div className="w-full ">
      <Header />
      <Hero />
      <Events />
      <ClientReviews />
      <FAQ />
      <LatestNews />
    </div>
  )
}
