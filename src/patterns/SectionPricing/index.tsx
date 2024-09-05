import { CardPricing } from "@/components/Cards/Pricing";

export const SectionPricing = () => {
  return (
    <section>
      <CardPricing
        price="49"
        title="Plano básico"
        features={["1 Granja", "Até 5 funcionários", "Backup mensal"]}
        description="any_description"
        pricePeriod="month"
      />
    </section>
  );
};
