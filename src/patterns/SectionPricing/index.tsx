import { CardPricing } from "@/components/Cards/Pricing";

export const SectionPricing = () => {
  return (
    <section className="w-full flex flex-col p-10 gap-14 py-20">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Escolha o plano que melhor se aplica ao seu negócio
        </h2>
        <span className="text-lg text-center text-gray-500">
          Consulte nossa equipe para saber mais sobre as limitações e funções de
          cada plano
        </span>
      </div>
      <div className="w-full flex items-center justify-center gap-4">
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
    </section>
  );
};
