import { useEffect } from "react";

type PageTheme =
  | "qr-code"
  | "card-preview"
  | "social-links"
  | "recipe-page"
  | "article-preview"
  | "sign-up"
  | "time-track"
  | "tip-calc"
  | null;

export function usePageTheme(theme: PageTheme) {
  useEffect(() => {
    if (!theme) return;

    // Установка на html для смены темы
    document.documentElement.setAttribute("data-page", theme);

    // Удалеие атрибута для возвращения исходной темы
    return () => {
      document.documentElement.removeAttribute("data-page");
    };
  }, [theme]);
}
