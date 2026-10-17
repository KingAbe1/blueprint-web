import Image from "next/image";
import { GitHubStars } from "@/components/GitHubStars";
import { SiteHeader } from "@/components/SiteHeader";
import {
  BRAND_NAME,
  GITHUB_CONTRIBUTE_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_LICENSE_URL,
  GITHUB_REPO_URL,
  GITHUB_SECURITY_URL,
  HERO_SCREENSHOT_PATH,
} from "@/constants/site";
import { getGitHubStarCount } from "@/lib/githubRepo";

const workflows = [
  {
    number: "01",
    eyebrow: "Before the first line",
    title: "Decide what must be true.",
    description:
      "Turn a product idea into a clear domain model, data constraints, and the decisions your system depends on.",
    tag: "Pre-flight",
  },
  {
    number: "02",
    eyebrow: "While the agent builds",
    title: "Give the work real guardrails.",
    description:
      "Shape test-first handoffs that keep an AI coding agent focused on behavior, boundaries, and edge cases.",
    tag: "In-flight",
  },
  {
    number: "03",
    eyebrow: "Before you ship",
    title: "Review what could break.",
    description:
      "Inspect the diff for risky queries, missing constraints, and failure paths before they reach production.",
    tag: "Post-flight",
  },
];

export default async function Home() {
  const githubStars = await getGitHubStarCount();

  return (
    <main>
      <SiteHeader githubStars={githubStars} />

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <h1>Move fast.<br /><span>Stay grounded.</span></h1>
          <p className="hero-description">
            AI makes it easy to write code. {BRAND_NAME} helps you plan the system, scan a local repo, and export handoff files for your coding agent. Projects stay on your device; nothing is uploaded to us.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
              Get started <span>↗</span>
            </a>
            <a className="text-link" href="#workflow">
              See how it works <span>→</span>
            </a>
          </div>
          <div className="hero-proof"><div className="proof-avatars" aria-hidden="true"><span>⌘</span><span>◈</span><span>✓</span></div><span>For people building real software with AI</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-glow" aria-hidden="true" />
          <div className="hero-screenshot-shell">
            <Image
              className="hero-screenshot"
              src={HERO_SCREENSHOT_PATH}
              alt={`${BRAND_NAME} app screenshot`}
              width={3024}
              height={1964}
              priority
              sizes="(max-width: 768px) 100vw, min(630px, 52vw)"
            />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label={`${BRAND_NAME} principles`}>
        <span className="trust-intro">GOOD SOFTWARE STARTS BEFORE THE CODE</span>
        <div><span className="trust-icon">⌗</span> Architecture first</div>
        <div><span className="trust-icon">✓</span> Tests as guardrails</div>
        <div><span className="trust-icon">⤢</span> Production in mind</div>
      </section>

      <section className="workflow-section section-wrap" id="workflow">
        <div className="section-heading">
          <div><span className="section-eyebrow">A calmer way to build</span><h2>Make the important decisions<br className="desktop-break" /> before the code gets loud.</h2></div>
          <p>{BRAND_NAME} gives you a practical path from a rough idea to a production-ready handoff, so you and your AI tools can move with confidence.</p>
        </div>
        <div className="workflow-grid">
          {workflows.map((item) => (
            <article className="workflow-card" key={item.number}>
              <div className="card-topline"><span className="card-number">{item.number}</span><span className="card-tag">{item.tag}</span></div>
              <div className="card-rule"><span /></div>
              <p className="card-eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <a className="card-link" href="#principles">Explore this phase <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-wrap">
          <div className="section-heading feature-heading">
            <div><span className="section-eyebrow">A desktop studio for better builds</span><h2>A working plan for the<br className="desktop-break" /> software you’re about to build.</h2></div>
            <p>
              {BRAND_NAME} turns product intent into maps, constraints, and handoff files you can drop into Cursor, VS Code, Claude Code, and similar tools. Use your own AI keys when you want help; the app does not proxy them.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-map-card">
              <div className="feature-card-copy"><span className="feature-kicker">01 / DESIGN THE SYSTEM</span><h3>See the shape before you build.</h3><p>Start from a product brief, make the important architecture decisions, and explore how the system fits together.</p></div>
              <div className="mini-map" aria-hidden="true">
                <div className="map-node map-user"><span className="map-node-icon">◎</span><span>People</span></div>
                <div className="map-connector connector-one" />
                <div className="map-node map-app"><span className="map-node-icon">▦</span><span>Application</span><small>Modular core</small></div>
                <div className="map-connector connector-two" />
                <div className="map-node map-data"><span className="map-node-icon">◫</span><span>Data layer</span></div>
                <div className="map-node map-service"><span className="map-node-icon">⌁</span><span>Services</span></div>
                <span className="map-caption">A system map shaped around your decisions</span>
              </div>
            </article>

            <article className="feature-card feature-code-card">
              <div className="feature-card-copy"><span className="feature-kicker">02 / UNDERSTAND WHAT EXISTS</span><h3>Bring an idea or a codebase.</h3><p>Start greenfield or pick a local folder to scan. Deeper checks apply when the repo matches a supported stack profile (Next.js today).</p></div>
              <div className="file-preview" aria-hidden="true">
                <div className="file-preview-top"><span className="file-window-dots"><i /><i /><i /></span><span>inventory-app</span><span className="scan-badge"><i /> Scan complete</span></div>
                <div className="file-row file-folder"><span>⌄</span><b>src</b><small>folder</small></div>
                <div className="file-row"><span className="file-type type-blue">TS</span><b>products</b><small>domain</small></div>
                <div className="file-row"><span className="file-type type-violet">TS</span><b>inventory</b><small>domain</small></div>
                <div className="file-row"><span className="file-type type-green">TS</span><b>checkout</b><small>workflow</small></div>
                <div className="file-insight"><span>✳</span><div><b>Architecture overview</b><small>Core modules and entry points mapped</small></div><span className="insight-arrow">↗</span></div>
              </div>
            </article>

            <article className="feature-card feature-handoff-card">
              <div className="feature-card-copy"><span className="feature-kicker">03 / HAND OFF WITH CONTEXT</span><h3>Give your coding agent a better starting point.</h3><p>Preview AGENTS.md, blueprint docs, and IDE hints. Download a zip or write into a project folder from the desktop app.</p></div>
              <div className="handoff-preview" aria-hidden="true">
                <div className="handoff-file"><span className="handoff-file-icon">MD</span><span><b>AGENTS.md</b><small>Agent entry point</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-file"><span className="handoff-file-icon blue-file">⌘</span><span><b>blueprint/architecture.md</b><small>System design & decisions</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-file"><span className="handoff-file-icon violet-file">↳</span><span><b>.cursor/rules</b><small>IDE-specific instructions</small></span><span className="handoff-status">Ready</span></div>
                <div className="handoff-tools"><span>Works with</span><b>Cursor</b><b>VS Code</b><b>Codex</b><b>Claude Code</b><b>JetBrains</b></div>
              </div>
            </article>

            <article className="feature-card feature-guardrail-card">
              <div className="guardrail-orbit orbit-one" /><div className="guardrail-orbit orbit-two" /><div className="guardrail-core"><span>✓</span></div>
              <div className="feature-card-copy"><span className="feature-kicker">04 / KEEP THE HARD PARTS IN VIEW</span><h3>Make room for the edge cases.</h3><p>Capture constraints, test expectations, and failure scenarios while the design is still easy to change.</p></div>
              <div className="guardrail-tags"><span>Data boundaries</span><span>Concurrency</span><span>Failure paths</span></div>
            </article>
          </div>

          <div className="integrations-strip"><span className="integrations-label">Fits into your workflow</span><div className="integration-names"><span><i className="tool-cursor">◈</i> Cursor</span><span><i className="tool-vscode">⌘</i> VS Code</span><span><i className="tool-codex">✳</i> Codex</span><span><i className="tool-claude">✻</i> Claude Code</span><span><i className="tool-jetbrains">JB</i> JetBrains</span></div></div>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="section-wrap principles-inner">
          <div className="principles-copy"><span className="section-eyebrow light-eyebrow">A different kind of speed</span><h2>AI is the accelerator.<br /><span>Engineering is the steering.</span></h2><p>Generated code isn’t the failure mode. Missing structure is. {BRAND_NAME} gives your ideas the architecture, tests, and boundaries that make AI-assisted development dependable.</p><a className="light-link" href="#workflow">Build with intention <span>→</span></a></div>
          <div className="principle-list">
            <div className="principle-item"><span className="principle-index">01</span><div><h3>Invariants before implementation</h3><p>Make your data contracts and system boundaries explicit before asking an agent to build.</p></div><span className="principle-check">✓</span></div>
            <div className="principle-item"><span className="principle-index">02</span><div><h3>Tests as prompt constraints</h3><p>Define what “done” means with executable expectations, not another paragraph of hope.</p></div><span className="principle-check">✓</span></div>
            <div className="principle-item"><span className="principle-index">03</span><div><h3>Failure modes by design</h3><p>Think through concurrency, retries, and rollback while change is still inexpensive.</p></div><span className="principle-check">✓</span></div>
          </div>
        </div>
      </section>

      <section className="faq-band" id="faq">
        <div className="faq-section section-wrap">
          <div className="faq-intro"><span className="section-eyebrow">A few good questions</span><h2>Good to know<br />before you begin.</h2><p>{BRAND_NAME} works alongside the tools you already use to build software.</p></div>
          <div className="faq-list">
            <details className="faq-item"><summary>Is it open source?<span>+</span></summary><p>Yes. The app is MIT-licensed on <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">GitHub</a>. You can fork and ship your own product; please use a different name and branding so users know who they are getting software from.</p></details>
            <details className="faq-item"><summary>Does {BRAND_NAME} write the application code?<span>+</span></summary><p>{BRAND_NAME} helps you define the product, architecture, constraints, and handoff. Your coding agent or IDE uses that context to implement the application.</p></details>
            <details className="faq-item"><summary>Can I use it with an existing project?<span>+</span></summary><p>Yes. {BRAND_NAME} can scan a local codebase and give you an overview of its structure, architecture signals, and useful next steps. Deeper analysis applies when the repo matches a supported stack profile (Next.js today).</p></details>
            <details className="faq-item"><summary>Which coding tools can I hand off to?<span>+</span></summary><p>{BRAND_NAME} can prepare files for Cursor, VS Code, Codex, Claude Code, JetBrains IDEs, and other tools that use Markdown instructions.</p></details>
            <details className="faq-item"><summary>What happens when I export a handoff?<span>+</span></summary><p>You can review the generated files first. {BRAND_NAME} shows which files will be added and warns before replacing any matching files already in the project.</p></details>
            <details className="faq-item"><summary>Is my data sent to your servers?<span>+</span></summary><p>No. Specs and scan results stay on your machine. Export JSON from the project menu to back up. If you turn on AI, requests go directly to the provider you configure.</p></details>
            <details className="faq-item"><summary>Do I need AI to use it?<span>+</span></summary><p>Much of greenfield works without AI. Build questions need a configured provider. Scans and handoff preview do not require AI.</p></details>
            <details className="faq-item"><summary>Browser or desktop app?<span>+</span></summary><p>Both exist. The browser build is fine for planning. Use the Tauri desktop app for reliable folder pickers, exports into a repo, and day-to-day brownfield work.</p></details>
          </div>
        </div>
      </section>

      <section className="closing-section section-wrap" id="get-started">
        <p className="section-eyebrow">Open source (MIT)</p>
        <h2>Better software starts<br />with better questions.</h2>
        <div className="hero-actions closing-actions">
          <a className="button-primary github-primary-cta" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
            Get started
            <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={GITHUB_CONTRIBUTE_URL} target="_blank" rel="noreferrer">
            Contribute on GitHub <span>↗</span>
          </a>
        </div>
        <p className="closing-run-hint">Clone the repo and follow the README to run in the browser or desktop app.</p>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top"><span>{BRAND_NAME}</span></a>
        <span>Architectural rigor for the generative era.</span>
        <span className="footer-meta">
          © 2026 {BRAND_NAME} ·{" "}
          <a className="footer-github-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
            GitHub <GitHubStars count={githubStars} variant="pill" />
          </a>{" "}
          ·{" "}
          <a href={GITHUB_LICENSE_URL} target="_blank" rel="noreferrer">
            License
          </a>{" "}
          ·{" "}
          <a href={GITHUB_SECURITY_URL} target="_blank" rel="noreferrer">
            Security
          </a>{" "}
          · MIT
        </span>
      </footer>
    </main>
  );
}
