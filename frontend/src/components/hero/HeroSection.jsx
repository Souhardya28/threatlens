import ScannerWidget from './ScannerWidget';
import { useModal } from '../../context/ModalContext';

export default function HeroSection() {
  const { openInstallModal, openHowModal } = useModal();

  return (
    <section className="hero" id="scanner">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" /> Real-time protection, right in your browser
            </span>
            <h1>
              See through phishing
              <br />
              before it <span className="accent-word">sees you</span>.
            </h1>
            <p className="hero-sub">
              ThreatLens inspects every site, link, QR code and download the moment you encounter it — and tells
              you, in plain language, exactly why something looks dangerous.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={openInstallModal}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                Add to Chrome — it&apos;s free
              </button>
              <button className="btn btn-ghost" onClick={openHowModal}>
                See how it works
              </button>
            </div>
            <div className="hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                No data leaves your device unencrypted
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Manifest V3
              </span>
            </div>
          </div>

          <ScannerWidget />
        </div>
      </div>
    </section>
  );
}
