# Prime Lens — Sprint 3 (React) — Etapa 7: Protótipo interativo

Migração da simulação de scan por IA (o "celular" na tela). Componentes
`PrototypeSection` → `Hint` / `PhoneMock` → `AIPopup` / `ResultPanel`.

Nesta etapa entram as operações com `Math`:

- `Math.floor(Math.random() * n)` para sortear qual "código" foi detectado;
- `Math.round()` para gerar a porcentagem de confiança da IA.

(O `scanCount` ainda não é salvo em `localStorage` nesta etapa — isso
acontece na Etapa 8.)

## Como rodar

```bash
npm install
npm run dev
```
