import { BRAND_NAME, GITHUB_REPO_URL } from "@/constants/site";
import { supportedDeepProfilesSummary } from "@/constants/supportedAnalysisProfiles";

export type FaqItem = {
  id?: string;
  question: string;
  /** Plain text for JSON-LD (no HTML). */
  answerText: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: `Does ${BRAND_NAME} write my application code?`,
    answerText:
      "No. It helps you plan, scan, and export handoff context. Your coding agent or IDE implements the application.",
  },
  {
    question: "Can I use it with an existing project?",
    answerText: `Yes. Scan a local codebase for structure, architecture signals, and quality checks. Deeper analysis applies when the repo matches a supported deep profile (${supportedDeepProfilesSummary()} today). See supported profiles for the full list.`,
  },
  {
    question: "Is it open source?",
    answerText: `Yes, MIT on GitHub (${GITHUB_REPO_URL}). Forks are welcome; please rebrand if you ship your own product.`,
  },
  {
    question: "Is my data sent to your servers?",
    answerText:
      "No. Specs and scan results stay on your machine. If you turn on AI, requests go directly to the provider you configure.",
  },
  {
    question: "Do I need AI to use it?",
    answerText:
      "Much of the app works without AI. Greenfield build questions need a configured provider; scans and handoff preview do not.",
  },
  {
    question: "Browser or desktop app?",
    answerText:
      "Both. The browser build is fine for planning. Use the desktop app for folder pickers and writing handoffs into a repo.",
  },
  {
    id: "faq-macos",
    question: "macOS says the app is damaged. What do I do?",
    answerText:
      'Installers are not Apple-notarized yet. After you move the app to Applications, run xattr -cr "/Applications/blueprint studio.app" in Terminal, then open again (or right-click → Open). That clears the download quarantine flag — the app is not actually damaged.',
  },
];
