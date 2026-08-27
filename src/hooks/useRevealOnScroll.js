import { useEffect } from 'react';

/**
 * Hook que reproduz o efeito "reveal on scroll" do protótipo original:
 * adiciona a classe "visible" às seções com a classe "reveal-section"
 * conforme elas entram na área visível da tela.
 */
export function useRevealOnScroll(active) {
  useEffect(() => {
    if (!active) return;

    function checkReveal() {
      document.querySelectorAll('.reveal-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          section.classList.add('visible');
        }
      });
    }

    checkReveal();
    window.addEventListener('scroll', checkReveal);
    return () => window.removeEventListener('scroll', checkReveal);
  }, [active]);
}
