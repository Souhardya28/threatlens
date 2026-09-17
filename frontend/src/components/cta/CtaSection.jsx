import { useModal } from '../../context/ModalContext';
import Reveal from '../common/Reveal';

export default function CtaSection() {
  const { openInstallModal } = useModal();

  return (
    <section className="cta-section">
      <div className="wrap">
        <Reveal as="div" className="cta-box">
          <span className="kicker">Get started</span>
          <h2>Install ThreatLens in 10 seconds.</h2>
          <p>Free, lightweight, and runs quietly in the background. You&apos;ll only hear from it when something&apos;s actually wrong.</p>
          <button className="btn btn-primary" onClick={openInstallModal} style={{ padding: '14px 28px', fontSize: 15 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            Add to Chrome — it&apos;s free
          </button>
          <div className="browser-chip">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Works with any Chromium browser · Manifest V3
          </div>
        </Reveal>
      </div>
    </section>
  );
}
