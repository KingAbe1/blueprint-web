"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "blueprint-theme";

function readIsDark(): boolean {
  if (typeof document === "undefined") return false;

  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    // Fall through to system preference.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** Tracks `html[data-theme]` updates from ThemeToggle and theme-init. */
export function useSiteTheme(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => setIsDark(readIsDark());
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", sync);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
    };
  }, []);

  return isDark;
}
