import {
  GITHUB_CHANGELOG_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_RELEASES_URL,
} from "@/constants/site";
import { getLatestRelease } from "@/lib/githubRepo";

function DownloadReleaseNote({ latestRelease }: { latestRelease: Awaited<ReturnType<typeof getLatestRelease>> }) {
  if (latestRelease) {
    return <> Latest release: {latestRelease.tagName}.</>;
  }
  return <> Pre-built installers will appear on GitHub Releases when we publish them.</>;
}

export async function DownloadSection() {
  const latestRelease = await getLatestRelease();

  return (
    <section className="download-band" id="download" aria-labelledby="download-heading">
      <div className="download-section section-wrap">
      <div className="section-heading download-heading">
        <div>
          <span className="section-eyebrow">Run it locally</span>
          <h2 id="download-heading">Run in the browser or desktop app.</h2>
        </div>
        <p>
          Clone the repo and follow the README. Use <code>npm run dev</code> for the web build or{" "}
          <code>npm run tauri:dev</code> for the desktop app.
          <DownloadReleaseNote latestRelease={latestRelease} />
        </p>
      </div>
      <div className="download-actions">
        <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
          Build from source <span>↗</span>
        </a>
        {latestRelease?.macDownloadUrl ? (
          <a className="download-secondary-cta" href={latestRelease.macDownloadUrl} target="_blank" rel="noreferrer">
            Download for macOS
            <span className="download-asset-name">{latestRelease.macAssetName}</span>
          </a>
        ) : null}
        <a className="text-link" href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
          {latestRelease ? "All release assets" : "GitHub Releases"} <span>↗</span>
        </a>
        {latestRelease ? (
          <a className="text-link" href={GITHUB_CHANGELOG_URL} target="_blank" rel="noreferrer">
            Changelog <span>↗</span>
          </a>
        ) : null}
      </div>
      </div>
    </section>
  );
}

export function DownloadSectionFallback() {
  return (
    <section className="download-band" id="download" aria-labelledby="download-heading" aria-busy="true">
      <div className="download-section section-wrap">
      <div className="section-heading download-heading">
        <div>
          <span className="section-eyebrow">Run it locally</span>
          <h2 id="download-heading">Run in the browser or desktop app.</h2>
        </div>
        <p>
          Clone the repo and follow the README. Use <code>npm run dev</code> for the web build or{" "}
          <code>npm run tauri:dev</code> for the desktop app.
        </p>
      </div>
      <div className="download-actions">
        <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
          Build from source <span>↗</span>
        </a>
        <a className="text-link" href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
          GitHub Releases <span>↗</span>
        </a>
      </div>
      </div>
    </section>
  );
}
