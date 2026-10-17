/** Runs before paint to match ThemeToggle storage key and avoid light flash in dark mode. */
export function ThemeInitScript() {
  const script = `(function(){try{var k="blueprint-theme";var s=localStorage.getItem(k);var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s==="dark"||(s!=="light"&&d)?"dark":"light";document.documentElement.dataset.theme=t;}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
