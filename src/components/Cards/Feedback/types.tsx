import { HTMLAttributes } from "react";

export interface IReview {
  id: string;
  name: string;
  description: string;
  title: string
  rating: number;
  img: string
}

export const reviews: IReview[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    title: "Produtividade Transformada",
    description:
      "Usar as soluções da AviApp revolucionou a forma como gerenciamos a granja. Desde o monitoramento até a análise de dados, tudo ficou mais ágil e preciso. Nossa produção nunca esteve tão eficiente!",
    rating: 5,
    img: "https://example.com/carlos-mendes.jpg",
  },
  {
    id: "2",
    name: "Fernanda Lima",
    title: "Inovação e Suporte Excepcional",
    description:
      "A equipe da AviApp não apenas fornece uma plataforma incrível, mas também um suporte excepcional. Sempre prontos para ajudar e melhorar nossos resultados! Recomendo fortemente!",
    rating: 5,
    img: "https://example.com/fernanda-lima.jpg",
  },
  {
    id: "3",
    name: "Rafael Souza",
    title: "Melhoria Visível no Controle da Granja",
    description:
      "Implementar o sistema da AviApp melhorou nosso controle sobre cada processo. A interface é fácil de usar e a automação tornou o trabalho diário muito mais eficiente. Vale o investimento!",
    rating: 4,
    img: "https://example.com/rafael-souza.jpg",
  },
  {
    id: "4",
    name: "Luciana Ferreira",
    title: "Tecnologia que Faz a Diferença",
    description:
      "Desde que começamos a usar as ferramentas da AviApp, nossa granja se modernizou de forma significativa. A gestão ficou muito mais prática, e a produtividade aumentou. A tecnologia realmente faz a diferença!",
    rating: 5,
    img: "https://example.com/luciana-ferreira.jpg",
  },
  {
    id: "5",
    name: "Pedro Almeida",
    title: "Facilidade e Praticidade no Dia a Dia",
    description:
      "Com a plataforma da AviApp, conseguimos organizar melhor as tarefas diárias e visualizar os dados importantes em tempo real. Uma ferramenta prática e essencial para qualquer granja moderna!",
    rating: 4,
    img: "https://example.com/pedro-almeida.jpg",
  },
];

export interface CardFeedbackProps extends HTMLAttributes<HTMLDivElement> {
  review: IReview
}
