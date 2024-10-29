import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/patterns/SectionAbout";
import { SectionFeatures } from "@/patterns/SectionFeatures";
import { SectionFeedback } from "@/patterns/SectionFeedback";
import { SectionNewsletter } from "@/patterns/SectionNewsletter";
import { SectionPricing } from "@/patterns/SectionPricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Header />
      <Banner />
      <SectionFeatures />
      <SectionAbout />
      <SectionFeedback />
      <SectionPricing />
      <SectionNewsletter />
      <Footer />
    </main>
  );
}
