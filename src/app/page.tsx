import Image from "next/image";
import { Suspense } from "react";
import { DownloadSection, DownloadSectionFallback } from "@/components/DownloadSection";
import { FooterMeta, FooterMetaFallback } from "@/components/FooterMeta";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteHeaderWithStars } from "@/components/SiteHeaderWithStars";
import { BrandMark } from "@/components/BrandMark";
import { TiltSurface } from "@/components/TiltSurface";
import {
  BRAND_NAME,
  GITHUB_CONTRIBUTE_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_REPO_URL,
  HERO_SCREENSHOT_PATH,
} from "@/constants/site";
import { SupportedFrameworkProfilesSection } from "@/components/SupportedFrameworkProfilesSection";
import { supportedDeepProfilesSummary } from "@/constants/supportedAnalysisProfiles";

export default function Home() {
  return (
    <main id="main-content">
      <div className="hero-region">
        <Suspense fallback={<SiteHeader githubStars={null} />}>
          <SiteHeaderWithStars />
        </Suspense>

        <section className="hero-band" aria-label="Introduction">
          <div className="hero-section">
            <div className="hero-copy">
              <p className="hero-brand">
                <BrandMark variant="mark" width={20} height={20} priority className="hero-brand-mark" />
                <span>{BRAND_NAME}</span>
              </p>
              <h1>
                Move fast.
                <br />
                <span>Stay grounded.</span>
              </h1>
              <p className="hero-description">
                A local studio for planning a new product or scanning a repo you already have. Agent handoffs or a codebase report — not generated app code. Nothing leaves your machine.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
                  Get started <span>↗</span>
                </a>
                <a className="text-link" href="#features">
                  See what it does <span>→</span>
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-grid" aria-hidden="true" />
              <div className="visual-glow" aria-hidden="true" />
              <TiltSurface variant="hero" className="hero-screenshot-shell">
                <Image
                  className="hero-screenshot"
                  src={HERO_SCREENSHOT_PATH}
                  alt={`${BRAND_NAME} app screenshot`}
                  width={3024}
                  height={1964}
                  priority
                  sizes="(max-width: 768px) 100vw, min(720px, 58vw)"
                />
              </TiltSurface>
            </div>
          </div>
        </section>
      </div>

      <section className="trust-strip" aria-label={`${BRAND_NAME} principles`}>
        <span className="trust-intro">Before the code</span>
        <div>Architecture first</div>
        <div>Tests as guardrails</div>
        <div>Production in mind</div>
      </section>

      <section className="features-section" id="features">
        <div className="section-wrap">
          <div className="section-heading feature-heading">
            <div>
              <span className="section-eyebrow">What it does</span>
              <h2>Plan, scan, hand off.</h2>
            </div>
            <p>
              Greenfield from a brief, or open a local folder. You get maps, constraints, and exports for Cursor, VS Code, Claude Code, and similar tools. Optional AI uses your own keys.
            </p>
          </div>

          <div className="feature-grid feature-grid-three">
            <article className="feature-card feature-map-card">
              <div className="feature-card-copy"><span className="feature-kicker">01 / NEW PROJECT</span><h3>Shape the system before code.</h3><p>Product brief, build questions, and an architecture map driven by your decisions. Stack comes from the interview, not a single hard-coded template.</p></div>
              <TiltSurface variant="card" className="mini-map" aria-hidden="true">
                <div className="map-node map-user"><span className="map-node-icon">◎</span><span>People</span></div>
                <div className="map-connector connector-one" />
                <div className="map-node map-app"><span className="map-node-icon">▦</span><span>Application</span><small>Modular core</small></div>
                <div className="map-connector connector-two" />
                <div className="map-node map-data"><span className="map-node-icon">◫</span><span>Data layer</span></div>
                <div className="map-node map-service"><span className="map-node-icon">⌁</span><span>Services</span></div>
                <span className="map-caption">A system map shaped around your decisions</span>
              </TiltSurface>
            </article>

            <article className="feature-card feature-code-card">
              <div className="feature-card-copy"><span className="feature-kicker">02 / EXISTING CODEBASE</span><h3>Understand a repo on your machine.</h3><p>Pick a local folder for overview, tree, dependencies, and quality signals. Deep framework review applies when your stack matches a supported profile.</p><a className="feature-inline-link" href="#supported-profiles">See supported profiles <span aria-hidden="true">→</span></a></div>
              <TiltSurface variant="card" className="file-preview" aria-hidden="true">
                <div className="file-preview-top"><span className="file-window-dots"><i /><i /><i /></span><span>inventory-app</span><span className="scan-badge"><i /> Scan complete</span></div>
                <div className="file-row file-folder"><span>⌄</span><b>src</b><small>folder</small></div>
                <div className="file-row"><span className="file-type type-blue">TS</span><b>products</b><small>domain</small></div>
                <div className="file-row"><span className="file-type type-violet">TS</span><b>inventory</b><small>domain</small></div>
                <div className="file-row"><span className="file-type type-green">TS</span><b>checkout</b><small>workflow</small></div>
                <div className="file-insight"><span>✳</span><div><b>Architecture overview</b><small>Core modules and entry points mapped</small></div><span className="insight-arrow">↗</span></div>
              </TiltSurface>
            </article>

            <article className="feature-card feature-handoff-card">
              <div className="feature-card-copy"><span className="feature-kicker">03 / HAND OFF</span><h3>Give your coding agent a clear starting point.</h3><p>Preview AGENTS.md, blueprint docs, and IDE rules. Download a zip or write files into a project folder from the desktop app.</p></div>
              <TiltSurface variant="card" className="handoff-preview" aria-hidden="true">
                <div className="handoff-file"><span className="handoff-file-icon">MD</span><span><b>AGENTS.md</b><small>Agent entry point</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-file"><span className="handoff-file-icon blue-file">⌘</span><span><b>blueprint/architecture.md</b><small>System design & decisions</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-file"><span className="handoff-file-icon violet-file">↳</span><span><b>.cursor/rules</b><small>IDE-specific instructions</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-tools"><span>Works with</span><b>Cursor</b><b>VS Code</b><b>Codex</b><b>Claude Code</b><b>JetBrains</b></div>
              </TiltSurface>
            </article>
          </div>

          <div className="integrations-strip">
            <span className="integrations-label">Works with</span>
            <div className="integration-names">
              <span>Cursor</span>
              <span>VS Code</span>
              <span>Codex</span>
              <span>Claude Code</span>
              <span>JetBrains</span>
            </div>
          </div>
        </div>
      </section>

      <SupportedFrameworkProfilesSection />

      <section className="faq-band" id="faq">
        <div className="faq-section section-wrap">
          <div className="faq-intro"><span className="section-eyebrow">FAQ</span><h2>Good to know before you begin.</h2><p>{BRAND_NAME} works alongside the tools you already use.</p></div>
          <div className="faq-list">
            <details className="faq-item"><summary>Does {BRAND_NAME} write my application code?<span aria-hidden="true" /></summary><p>No. It helps you plan, scan, and export handoff context. Your coding agent or IDE implements the application.</p></details>
            <details className="faq-item"><summary>Can I use it with an existing project?<span aria-hidden="true" /></summary><p>Yes. Scan a local codebase for structure, architecture signals, and quality checks. Deeper analysis applies when the repo matches a supported deep profile ({supportedDeepProfilesSummary()} today). See <a href="#supported-profiles">supported profiles</a> for the full list.</p></details>
            <details className="faq-item"><summary>Is it open source?<span aria-hidden="true" /></summary><p>Yes, MIT on <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">GitHub</a>. Forks are welcome; please rebrand if you ship your own product.</p></details>
            <details className="faq-item"><summary>Is my data sent to your servers?<span aria-hidden="true" /></summary><p>No. Specs and scan results stay on your machine. If you turn on AI, requests go directly to the provider you configure.</p></details>
            <details className="faq-item"><summary>Do I need AI to use it?<span aria-hidden="true" /></summary><p>Much of the app works without AI. Greenfield build questions need a configured provider; scans and handoff preview do not.</p></details>
            <details className="faq-item"><summary>Browser or desktop app?<span aria-hidden="true" /></summary><p>Both. The browser build is fine for planning. Use the desktop app for folder pickers and writing handoffs into a repo.</p></details>
            <details className="faq-item" id="faq-macos"><summary>macOS says the app is damaged. What do I do?<span aria-hidden="true" /></summary><p>Installers are not Apple-notarized yet. After you move the app to Applications, run <code>xattr -cr &quot;/Applications/blueprint studio.app&quot;</code> in Terminal, then open again (or right-click → Open). That clears the download quarantine flag — the app is not actually damaged.</p></details>
          </div>
        </div>
        <Suspense fallback={<DownloadSectionFallback />}>
          <DownloadSection />
        </Suspense>
      </section>

      <section className="closing-section section-wrap" id="get-started">
        <p className="section-eyebrow">Open source · MIT</p>
        <h2>
          Better software starts
          <br />
          with better questions.
        </h2>
        <div className="hero-actions closing-actions">
          <a className="button-primary github-primary-cta" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
            Get started
            <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={GITHUB_CONTRIBUTE_URL} target="_blank" rel="noreferrer">
            Contribute on GitHub <span>↗</span>
          </a>
        </div>
        <p className="closing-run-hint">Star the repo or open an issue if you get stuck.</p>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="/">
          <BrandMark variant="mark" width={20} height={20} />
          <span>{BRAND_NAME}</span>
        </a>
        <span>Architectural rigor for the generative era.</span>
        <Suspense fallback={<FooterMetaFallback />}>
          <FooterMeta />
        </Suspense>
      </footer>
    </main>
  );
}
