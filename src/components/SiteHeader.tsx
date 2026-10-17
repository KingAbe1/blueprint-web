"use client";

import { useEffect, useId, useState, type MouseEvent } from "react";
import { GitHubStars } from "@/components/GitHubStars";
import {
  BRAND_NAME,
  GITHUB_CONTRIBUTE_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_REPO_URL,
} from "@/constants/site";
import ThemeToggle from "@/app/theme-toggle";

type SiteHeaderProps = {
  githubStars: number | null;
};

const NAV_LINKS = [
  { href: "#features", label: "What it does" },
  { href: "#workflow", label: "The workflow" },
  { href: "#download", label: "Download" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader({ githubStars }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "/");
  };

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label={`${BRAND_NAME} home`} onClick={goHome}>
        <span>{BRAND_NAME}</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="nav-github-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
          GitHub <GitHubStars count={githubStars} variant="pill" />
        </a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar" aria-hidden="true" />
          <span className="menu-toggle-bar" aria-hidden="true" />
        </button>
        <ThemeToggle />
        <a className="header-cta header-cta-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
          Get started
          <span className="header-cta-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <div
        id={menuId}
        className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Get started (README)
          </a>
          <a href={GITHUB_CONTRIBUTE_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Contribute on GitHub
          </a>
          <a className="mobile-nav-github" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            GitHub <GitHubStars count={githubStars} variant="pill" />
          </a>
        </nav>
      </div>
    </header>
  );
}
