"use client";

import { useEffect } from "react";
import { useSiteTheme } from "@/hooks/useSiteTheme";
import { syncSiteFavicon } from "@/lib/syncSiteFavicon";

/** Keeps the browser tab icon aligned with light/dark theme. */
export function FaviconSync() {
  const isDark = useSiteTheme();

  useEffect(() => {
    syncSiteFavicon(isDark);
  }, [isDark]);

  return null;
}
