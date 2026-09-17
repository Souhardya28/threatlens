import Reveal from '../common/Reveal';

const SHAP_BARS = [
  { label: 'Domain age (3 days)', width: '88%', color: 'var(--danger)', value: '+34' },
  { label: 'Character substitution', width: '74%', color: 'var(--danger)', value: '+29' },
  { label: 'Password + OTP fields', width: '56%', color: 'var(--suspicious)', value: '+21' },
  { label: 'No HTTPS', width: '26%', color: 'var(--suspicious)', value: '+10' },
];

export default function ExplainabilitySection() {
  return (
    <section id="explain">
      <div className="wrap">
        <div className="explain-wrap">
          <div>
            <span className="kicker">Explainable AI</span>
            <h2>Never just &quot;trust us.&quot;</h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Every verdict comes with the specific signals that drove it — ranked by how much each one
              contributed to the score.
            </p>

            <Reveal as="div" className="explain-list">
              <div className="explain-item">
                <span className="idx">01</span>
                <div>
                  <h4>Feature attribution</h4>
                  <p>SHAP values show exactly which signal moved the score, and by how much.</p>
                </div>
              </div>
              <div className="explain-item">
                <span className="idx">02</span>
                <div>
                  <h4>Plain-language reasons</h4>
                  <p>No jargon — &quot;this domain was registered 3 days ago,&quot; not a raw feature name.</p>
                </div>
              </div>
              <div className="explain-item">
                <span className="idx">03</span>
                <div>
                  <h4>You decide the last step</h4>
                  <p>
                    High-risk pages are blocked by default, with an explicit &quot;continue anyway&quot; if you
                    disagree.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" className="mock-card">
            <div className="mock-url">paypa1-secure-login.com/verify</div>
            {SHAP_BARS.map((bar) => (
              <div className="shap-bar-row" key={bar.label}>
                <span className="shap-label">{bar.label}</span>
                <div className="shap-track">
                  <div className="shap-fill" style={{ width: bar.width, background: bar.color }} />
                </div>
                <span className="shap-val">{bar.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
