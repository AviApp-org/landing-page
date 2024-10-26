import { SectionHeader } from "@/components/SectionHeader";

export const SectionAbout = () => {
  return (
    <section className="w-full h-full flex items-center justify-center py-12">
      <div className="w-full h-full max-w-7xl flex flex-col items-center justify-center gap-20 max-sm:gap-2">
        <SectionHeader title="Quem somos?" />

        <div className="w-full flex items-start justify-center gap-20 max-w-4xl max-sm:flex-col max-sm:p-10 max-sm:gap-6">
          <p className="font-sans text-gray-500 text-left max-w-3xl max-sm:max-w-full max-sm:text-center">
            Acreditamos no poder da tecnologia para transformar o setor agropecuário, levando inovação e eficiência para dentro das granjas. Somos uma equipe apaixonada por desenvolvimento de software e movida pelo compromisso de entregar soluções que não apenas acompanhem a evolução do mercado, mas que sejam verdadeiros diferenciais para nossos clientes.
          </p>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-80 object-cover rounded-md shadow-lg transition hover:scale-[1.02]"
          />
        </div>

        <div className="w-full flex items-start justify-center gap-20 max-w-4xl max-sm:flex-col max-sm:p-10 max-sm:gap-6">
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-80 object-cover rounded-md shadow-lg transition hover:scale-[1.02]"
          />
          <p className="font-sans text-gray-500 text-left max-w-3xl max-sm:max-w-full max-sm:text-center">
            Combinando conhecimento técnico avançado com uma profunda compreensão das necessidades específicas do setor, desenvolvemos plataformas e ferramentas inteligentes que ajudam os produtores a gerenciar suas granjas com mais precisão e controle. Cada solução que criamos é pensada para simplificar processos, maximizar a produtividade e oferecer informações essenciais para a tomada de decisões estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
};
