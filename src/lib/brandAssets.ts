export const BRAND_LOGO_MARK_LIGHT = "/blueprint-logo-mark-light.svg";
export const BRAND_LOGO_MARK_DARK = "/blueprint-logo-mark-dark.svg";
export const BRAND_ICON_LIGHT = "/blueprint-icon-light.svg";
export const BRAND_ICON_DARK = "/blueprint-icon-dark.svg";
export const BRAND_APP_ICON_PNG_LIGHT = "/blueprint-app-icon-light.png";
export const BRAND_APP_ICON_PNG_DARK = "/blueprint-app-icon-dark.png";

/** Default favicon when JS has not run yet (dark tile). */
export const BRAND_ICON_PATH = BRAND_ICON_DARK;

export function brandLogoMarkSrc(isDark: boolean): string {
  return isDark ? BRAND_LOGO_MARK_DARK : BRAND_LOGO_MARK_LIGHT;
}

export function brandAppIconSrc(isDark: boolean): string {
  return isDark ? BRAND_ICON_DARK : BRAND_ICON_LIGHT;
}
