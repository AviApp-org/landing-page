# AviApp Landing Page

Esta é a landing page oficial do **AviApp**, uma solução desktop e mobile para gerenciamento de granjas. O objetivo da landing page é apresentar e promover o produto para fazendeiros de pequeno e médio porte.

## Tecnologias Utilizadas

- **React**
- **Next.js**
- **Tailwind CSS**
- **Yarn** (gerenciador de pacotes)

## Estrutura do Projeto

### Raiz do Projeto:

- **public/**: Contém arquivos públicos, como imagens e ícones, acessíveis diretamente via URL.
- **src/**: Diretório principal com o código-fonte da aplicação.
- **next.config.mjs**: Configurações do Next.js, como rotas e otimizações.
- **postcss.config.mjs**: Configuração do PostCSS, usada em conjunto com o Tailwind CSS para processar os estilos.
- **README.md**: Este arquivo, contendo a documentação do projeto.
- **tailwind.config.ts**: Arquivo de configuração do Tailwind CSS, onde você pode personalizar temas e estilos.
- **yarn.lock**: Arquivo de lock do Yarn, garantindo que as mesmas versões de pacotes sejam instaladas.
- **package.json**: Define dependências do projeto, scripts e metadados.
- **tsconfig.json**: Arquivo de configuração para o TypeScript, definindo opções de compilação.

### Pasta `src`:

- **app/**: Contém os principais arquivos e rotas da aplicação Next.js.
- **components/**: Conjunto de componentes React reutilizáveis, como botões e formulários.
- **icons/**: Conjunto de ícones SVG ou componentes de ícones usados na aplicação.
- **patterns/**: Padrões visuais ou estruturas de layout, como templates de página ou seções reutilizáveis.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/AviApp-org/landing-page.git
   ```
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Execute o projeto:
   ```bash
   yarn dev
   ```

Acesse o projeto em [http://localhost:3000](http://localhost:3000).