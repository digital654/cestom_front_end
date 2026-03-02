import FAQ from "@/components/page-acceuil/faqs";
import ClientReviews from "@/components/page-acceuil/ClientReviews";

export default function Home() {
  return (
    <div className="w-full ">
      <ClientReviews />
      <FAQ />
    </div>
  );
}
