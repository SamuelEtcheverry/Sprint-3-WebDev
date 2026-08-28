// Possíveis resultados que a "IA" pode detectar ao simular um scan.
// A escolha de qual resultado mostrar usa Math.random() + Math.floor(),
// e o nível de confiança também é gerado com operações de Math.
export const detectedResults = [
  { lang: 'Python', code: "def scanner():\n    print('Prime Lens OCR ativo')\n    return True" },
  { lang: 'JavaScript', code: "function scanner() {\n  console.log('Prime Lens OCR ativo');\n  return true;\n}" },
  { lang: 'Java', code: 'class Scanner {\n  static boolean run() {\n    return true;\n  }\n}' },
];
