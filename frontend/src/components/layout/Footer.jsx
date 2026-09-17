export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <div className="logo" style={{ fontSize: 15 }}>
            <svg className="logo-mark" width="18" height="18" viewBox="0 0 26 26" fill="none">
              <circle cx="11" cy="11" r="7.5" stroke="#49D6C4" strokeWidth="2" />
              <line x1="16.2" y1="16.2" x2="23" y2="23" stroke="#49D6C4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            ThreatLens
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pipeline">How it works</a>
            <a href="#explain">Explainability</a>
          </div>
          <div className="footer-note">
            © 2026 ThreatLens. Not affiliated with Google or any brand it detects impersonation of.
          </div>
        </div>
      </div>
    </footer>
  );
}
