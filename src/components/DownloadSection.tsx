import {
  GITHUB_CHANGELOG_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_RELEASES_URL,
} from "@/constants/site";
import { getLatestRelease, type GitHubReleaseSummary } from "@/lib/githubRepo";
import { PlatformIcon } from "@/components/PlatformIcons";

function DownloadLinks({ latestRelease }: { latestRelease: GitHubReleaseSummary | null }) {
  return (
    <div className="download-links">
      <a className="text-link" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
        Build from source <span>↗</span>
      </a>
      <a className="text-link" href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
        {latestRelease ? "All release assets" : "GitHub Releases"} <span>↗</span>
      </a>
      {latestRelease ? (
        <a className="text-link" href={GITHUB_CHANGELOG_URL} target="_blank" rel="noreferrer">
          Changelog <span>↗</span>
        </a>
      ) : null}
    </div>
  );
}

function MacosFootnote() {
  return (
    <p className="download-macos-footnote">
      <PlatformIcon platform="apple" className="download-macos-footnote-icon" />
      <span>
        macOS builds aren&apos;t notarized yet. If Gatekeeper says the app is damaged, run{" "}
        <code>xattr -cr &quot;/Applications/blueprint studio.app&quot;</code> then reopen — or{" "}
        <a href="#faq-macos">see the FAQ</a>.
      </span>
    </p>
  );
}

export async function DownloadSection() {
  const latestRelease = await getLatestRelease();
  const downloads = latestRelease?.downloads ?? [];
  const hasMacDownloads = downloads.some((item) => item.platform === "apple");

  return (
    <div className="download-block section-wrap" id="download" aria-labelledby="download-heading">
      <div className="download-header">
        <div className="download-intro">
          <span className="section-eyebrow">Run it locally</span>
          <h2 id="download-heading">Install and run</h2>
          <p>
            Download a desktop build, or clone the repo and run it yourself.
            {latestRelease ? (
              <>
                {" "}
                Latest release: <span className="download-version">{latestRelease.tagName}</span>.
              </>
            ) : (
              <> Pre-built installers appear on GitHub Releases when published.</>
            )}
          </p>
        </div>
        <DownloadLinks latestRelease={latestRelease} />
      </div>

      {downloads.length > 0 ? (
        <ul className="download-platform-grid">
          {downloads.map((item) => (
            <li key={item.id}>
              <a className="download-platform-card" href={item.url} target="_blank" rel="noreferrer">
                <span className="download-platform-top">
                  <PlatformIcon platform={item.platform} />
                  <span className="download-platform-copy">
                    <span className="download-platform-label">{item.label}</span>
                    <span className="download-platform-detail">{item.detail}</span>
                  </span>
                </span>
                <span className="download-platform-file">{item.fileName}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="download-actions">
          <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
            Build from source <span>↗</span>
          </a>
        </div>
      )}

      {hasMacDownloads ? <MacosFootnote /> : null}
    </div>
  );
}

export function DownloadSectionFallback() {
  return (
    <div className="download-block section-wrap" id="download" aria-labelledby="download-heading" aria-busy="true">
      <div className="download-header">
        <div className="download-intro">
          <span className="section-eyebrow">Run it locally</span>
          <h2 id="download-heading">Install and run</h2>
          <p>Download a desktop build, or clone the repo and run it yourself.</p>
        </div>
        <DownloadLinks latestRelease={null} />
      </div>
      <div className="download-platform-grid download-platform-grid--skeleton" aria-hidden="true">
        <div className="download-platform-card" />
        <div className="download-platform-card" />
        <div className="download-platform-card" />
        <div className="download-platform-card" />
      </div>
    </div>
  );
}
