# Prime Lens — Sprint 3 (React)

Migração do protótipo **Prime Lens** (desenvolvido em HTML/CSS/JS nas Sprints
anteriores) para uma aplicação **React** com Vite, organizada em componentes
funcionais, estrutura pai → filho, `localStorage` e operações com `Math`.

## Tecnologias utilizadas

- React 18
- Vite
- JavaScript (ES6+)
- HTML5 / CSS3
- `localStorage` (Web Storage API)
- Git / GitHub

## Como instalar as dependências

Com o Node.js instalado (recomendado: versão 18 ou superior), na raiz do projeto:

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Depois, acesse o endereço mostrado no terminal (geralmente
`http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Usuário e senha para teste

O login é simulado (não há backend/autenticação real). Qualquer e-mail válido
(com `@` e `.`) e senha com 6 ou mais caracteres são aceitos. Sugestão:

```
E-mail: teste@email.com
Senha:  123456
```

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o
desenvolvimento do projeto, principalmente na migração do protótipo original
(HTML/CSS/JS) para a estrutura de componentes React, na organização das
pastas `components`/`data`/`hooks`, na implementação das funcionalidades de
`localStorage` e `Math`, e na revisão/organização do código e da
documentação. A equipe realizou a integração, os testes e a validação de
todas as funcionalidades no projeto final.

## Deploy

Projeto disponível em:

[Link do projeto na Vercel] — *(atualizar após o deploy)*

Repositório GitHub: [Link do repositório] — *(atualizar após o push)*

## Estrutura do projeto

```
src/
├── assets/            # imagens usadas no protótipo
├── components/        # componentes React, organizados por seção
│   ├── Header/
│   ├── Footer/
│   ├── Login/
│   ├── Hero/
│   ├── About/
│   ├── Slideshow/
│   ├── Prototype/
│   └── Future/
├── data/               # dados usados pelos componentes (props)
├── hooks/              # hooks customizados (useLocalStorage, useRevealOnScroll)
├── styles/             # CSS global migrado do protótipo
├── App.jsx             # componente raiz (pai de toda a aplicação)
└── main.jsx            # ponto de entrada do React
```

## Funcionalidades que atendem aos requisitos da Sprint 3

- **Componentes funcionais** em toda a aplicação.
- **Estrutura pai → filho com props**: por exemplo `About` → `AboutCard`,
  `Slideshow` → `Slide`, `PrototypeSection` → `Hint`/`PhoneMock`,
  `PhoneMock` → `AIPopup`/`ResultPanel`, `Header` → `ThemeToggle`.
- **`localStorage`**: tema claro/escuro, último e-mail utilizado no login e
  contador de scans realizados, tudo isso persiste entre atualizações de
  página (`src/hooks/useLocalStorage.js`).
- **`Math`**: `Math.random()` e `Math.floor()` para sortear qual "código" a
  IA simulada detecta, `Math.round()` para gerar a porcentagem de confiança,
  e `Math.max()` para proteger o contador de scans (`PhoneMock.jsx`,
  `Footer.jsx`, `App.jsx`).
