import { useState, useEffect } from 'react';

/**
 * Hook customizado que sincroniza um estado do React com o localStorage.
 * Sempre que o valor muda, ele é salvo automaticamente no navegador,
 * então os dados continuam disponíveis mesmo depois de atualizar a página.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn('Não foi possível ler do localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Não foi possível salvar no localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
