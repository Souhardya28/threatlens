import Reveal from '../common/Reveal';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Real-time site analysis',
    desc: 'Domain age, redirect chains, obfuscated URLs and reputation signals are checked the instant a page loads — before you type a password.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12l6 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Brand impersonation detection',
    desc: "Catches look-alike domains and typosquats of banks, payment providers and government portals, and names the brand it's mimicking.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Page & form behavior',
    desc: 'Reads the DOM for password fields, OTP prompts and urgent language — the same tells a trained analyst looks for, applied to every page.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
        <line x1="14" y1="14" x2="20" y2="20" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'QR-code inspection',
    desc: 'Decodes any QR code rendered on a page and checks its destination before you ever scan it with your phone.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v12m0 0l-4-4m4 4l4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Download protection',
    desc: 'Flags double extensions, mismatched file types and risky archive contents, with hash-based reputation lookups.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Webmail link scanning',
    desc: 'Highlights dangerous links directly inside Gmail and Outlook web, before you click through from an email.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="kicker">Coverage</span>
          <h2>One extension, every entry point.</h2>
          <p className="section-desc">
            Phishing doesn&apos;t only arrive as a suspicious link — it hides in look-alike domains, urgent login
            forms, QR codes on posters, and files disguised as invoices. ThreatLens watches all of it.
          </p>
        </Reveal>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <Reveal as="div" className="feature" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
