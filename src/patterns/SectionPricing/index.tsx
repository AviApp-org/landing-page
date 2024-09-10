import { CardPricing } from "@/components/Cards/Pricing";
import { SectionHeader } from "@/components/SectionHeader";

export const SectionPricing = () => {
  return (
    <section className="w-full flex flex-col p-10 gap-14 py-20 max-sm:px-0">
      <div className="flex flex-col items-center gap-4 max-sm:px-10">
        <SectionHeader title="Escolha o plano que melhor se aplica ao seu negócio" />
        <span className="font-sans text-gray-500 text-center max-w-3xl max-sm:max-w-full">
          Consulte nossa equipe para saber mais sobre as limitações e funções de
          cada plano
        </span>
      </div>
      <div className="w-full flex items-center justify-center max-sm:overflow-visible">
        <div className="w-full flex items-center justify-start gap-4 overflow-scroll max-sm:px-4">
          <CardPricing
            price="49"
            title="Plano básico"
            features={["1 Granja", "Até 5 funcionários", "Backup mensal"]}
            description="any_description"
            pricePeriod="month"
            className="transition hover:scale-[1.02]"
          />
          <CardPricing
            price="79"
            title="Plano médio"
            features={["1 Granja", "Até 5 funcionários", "Backup mensal"]}
            description="any_description"
            pricePeriod="month"
            className="transition hover:scale-[1.02]"
          />
          <CardPricing
            price="119"
            title="Plano completo"
            features={["1 Granja", "Até 5 funcionários", "Backup mensal"]}
            description="any_description"
            pricePeriod="month"
            className="transition hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};
