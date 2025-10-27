# Smart Design — Site institucional (React + TS + Vite)

Projeto em React + TypeScript usando Vite, TailwindCSS e componentes shadcn/ui. Inclui rotas, tema, ícones e páginas institucionais (Home, Quem Somos, Projetos, Depoimentos, Contato), além de página de detalhes de projeto.

## Stack
- React 18 + TypeScript
- Vite 5 (plugin react-swc)
- TailwindCSS 3 + tailwind-animate + tokens HSL (shadcn/ui)
- React Router v6
- Radix UI (base dos componentes), lucide-react (ícones)
- TanStack Query (infra pronta para dados)

## Scripts
- `npm run dev`: inicia o servidor em desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualização do build
- `npm run lint`: lint dos arquivos

## Executando localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse no navegador o endereço que o Vite indicar (por padrão http://localhost:8080).

## Estrutura principal
- `src/components` — Navbar, Footer e componentes UI (shadcn/ui)
- `src/pages` — páginas: `Home`, `QuemSomos`, `Projetos`, `ProjetoDetalhe`, `Depoimentos`, `Contato`, `NotFound`
- `src/data/projects.ts` — base de projetos (slug, título, imagem, etc.)
- `src/assets` — imagens e logotipos (logo do header e logotipo do favicon)
- `index.html` — metatags e links de favicon
- `tailwind.config.ts` — tokens de tema e plugins
- `src/index.css` — variáveis HSL e camadas do Tailwind
- `vite.config.ts` — alias `@` para `src` e plugin React SWC

## Rotas
- `/` — Home
- `/quem-somos` — Quem Somos
- `/projetos` — Lista de Projetos
- `/projetos/:slug` — Detalhe do Projeto
- `/depoimentos` — Depoimentos
- `/contato` — Contato

## Favicon e Logotipo
- Header utiliza `src/assets/logo.png` (ajuste em `src/components/Navbar.tsx`).
- Favicon utiliza `public/favicon.ico` (e `public/favicon.png`) com versionamento de cache em `index.html`.

## Personalização rápida
- Trocar cores: edite os tokens HSL em `src/index.css` (seção `:root`).
- Tipografia/espacamentos: utilize as utilitárias do Tailwind diretamente nas páginas/componentes.
- Ícones: importar de `lucide-react` e aplicar classes Tailwind.

## Padrões de UI/UX aplicados
- Navbar com foco, skip‑link e responsividade (menu mobile).
- Animações suaves (hover/foco) em cards e botões.
- Layout responsivo com containers centralizados.
- Página de detalhes de projeto com fallback 404.

## Build de produção
```bash
npm run build
npm run preview
```

## Licença
Projeto privado para uso da Smart Design.
