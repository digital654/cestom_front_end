
import OurCommunity from "@/components/page-acceuil/our-community"; 
import Footer from "@/components/page-acceuil/footer";
import Events from "@/components/page-acceuil/events";
import FAQ from "@/components/page-acceuil/faqs";
import ClientReviews from "@/components/page-acceuil/ClientReviews";
import LatestNews from "@/components/page-acceuil/latest-news";

export default function Home() {
  return (
    <div className="w-full ">
      <Events />
      <ClientReviews />
      <FAQ />
      <LatestNews />
      <OurCommunity/>
    <Footer/>
    </div>
  )
}
