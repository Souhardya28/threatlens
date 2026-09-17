export const howSteps = [
  {
    title: 'Capture',
    desc: 'The moment a page loads, the extension reads the URL, the DOM structure, and any links, QR codes or downloads it contains — all locally, in the background.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Analyze',
    desc: 'An XGBoost model scores dozens of features — domain age, redirect chains, look-alike characters, form behavior — against live threat-intelligence and reputation data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Explain',
    desc: "SHAP attribution breaks the model's score down into the specific signals that drove it, then turns those into the plain-language reasons you actually read.",
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
  },
  {
    title: 'Act',
    desc: 'Depending on the score, ThreatLens quietly allows the page, shows a warning, or blocks it outright — with an explicit "continue anyway" if you disagree with the call.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];
