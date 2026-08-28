# Prime Lens — Sprint 3 (React) — Etapa 8: localStorage + Math

Etapa dedicada aos dois requisitos técnicos centrais da Sprint 3:

## localStorage

Hook customizado `src/hooks/useLocalStorage.js`, usado em `App.jsx` para
persistir:

- tema claro/escuro (`primeLens:isLight`);
- último e-mail usado no login (`primeLens:lastEmail`);
- contador de scans realizados (`primeLens:scanCount`).

Esses dados continuam disponíveis mesmo depois de recarregar a página.

## Math

- `Math.random()` + `Math.floor()` — sorteiam qual resultado a IA simulada
  "detecta" (`PhoneMock.jsx`);
- `Math.round()` — gera a porcentagem de confiança da IA (`PhoneMock.jsx`);
- `Math.max()` — garante que o contador de scans nunca fica negativo
  (`App.jsx`).

## Como rodar

```bash
npm install
npm run dev
```
