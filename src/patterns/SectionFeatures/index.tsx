import { CardFeature } from "@/components/Cards/Features";
import { SectionHeader } from "@/components/SectionHeader";

export const SectionFeatures = () => {
  return (
    <section className="w-full flex flex-col gap-4 items-stretch justify-center p-20 max-sm:px-8 max-sm:py-20">
      <div className="w-full flex flex-col gap-20">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <SectionHeader title="Acompanhamento do começo ao fim" />
          <p className="font-sans text-gray-500 text-center max-w-3xl max-sm:max-w-full">
            Nosso software foi desenvolvido para facilitar a gestão de dados com
            eficiência, segurança e praticidade. Ele oferece tudo o que você
            precisa para manter suas informações organizadas, protegidas e
            sempre acessíveis, além de gerar insights rápidos para melhorar a
            tomada de decisões
          </p>
        </div>
        <div
          className="w-full
      flex flex-row items-stretch justify-center gap-4 max-sm:overflow-x-scroll max-sm:justify-start max-sm:w-full"
        >
          <CardFeature type="analytics" />
          <CardFeature type="reports" />
          <CardFeature type="backup" />
        </div>
      </div>
    </section>
  );
};
