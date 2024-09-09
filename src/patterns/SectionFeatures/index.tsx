import { CardFeature } from "@/components/Cards/Features";

export const SectionFeatures = () => {
  return (
    <section className="w-full flex flex-row gap-4 items-stretch justify-center py-20">
      {/* <SectionHeader title="Acompanhamento do começo ao fim" /> */}
      <CardFeature type="analytics" />
      <CardFeature type="reports"/>
      <CardFeature type="backup"/>
    </section>
  );
};
