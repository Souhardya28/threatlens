import { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openInstallModal } = useModal();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <svg className="logo-mark" viewBox="0 0 26 26" fill="none">
            <circle cx="11" cy="11" r="7.5" stroke="#49D6C4" strokeWidth="2" />
            <line x1="16.2" y1="16.2" x2="23" y2="23" stroke="#49D6C4" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 7.5V11L13.5 13" stroke="#49D6C4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ThreatLens
        </div>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#scanner" onClick={closeMobile}>Live scan</a>
          <a href="#features" onClick={closeMobile}>Features</a>
          <a href="#pipeline" onClick={closeMobile}>How it works</a>
          <a href="#explain" onClick={closeMobile}>Explainability</a>
        </div>

        <div className="nav-cta">
          <button className="btn btn-primary btn-sm" onClick={openInstallModal}>
            Add to Chrome
          </button>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setMobileOpen((v) => !v)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
