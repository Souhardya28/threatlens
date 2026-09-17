import { Fragment } from 'react';
import Reveal from '../common/Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Capture',
    desc: 'The extension reads the URL, DOM structure and any links, QR codes or downloads on the page.',
  },
  {
    num: '02',
    title: 'Analyze',
    desc: 'An XGBoost model scores dozens of features against threat intelligence and domain reputation data.',
  },
  {
    num: '03',
    title: 'Explain',
    desc: "SHAP attribution turns the model's output into the plain-language reasons you actually see.",
  },
  {
    num: '04',
    title: 'Act',
    desc: 'Depending on the score, ThreatLens allows, warns, or blocks the page — you can always continue anyway.',
  },
];

const Arrow = () => (
  <div className="pipe-arrow">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function PipelineSection() {
  return (
    <section id="pipeline">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="kicker">Under the hood</span>
          <h2>From page load to protection, in milliseconds.</h2>
          <p className="section-desc">
            Every check runs through the same pipeline — a gradient-boosted model trained on phishing patterns,
            scored and explained before you ever see a warning.
          </p>
        </Reveal>

        <div className="pipeline">
          {STEPS.map((step, idx) => (
            <Fragment key={step.num}>
              <Reveal as="div" className="pipe-step">
                <span className="pipe-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </Reveal>
              {idx < STEPS.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
