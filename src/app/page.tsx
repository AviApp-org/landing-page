import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/patterns/SectionAbout";
import { SectionFeatures } from "@/patterns/SectionFeatures";
import { SectionPricing } from "@/patterns/SectionPricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Header />
      <Banner />
      <SectionFeatures />
      <SectionAbout />
      <SectionPricing />
    </main>
  );
}
