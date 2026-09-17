import { useModal } from '../../context/ModalContext';
import { howSteps } from '../../data/howSteps';

const HOW_DURATION = 3400;

export default function HowItWorksModal() {
  const { howOpen, howStep, howCycle, closeHowModal, goToHowStep, pauseHow, resumeHow } = useModal();

  if (!howOpen) return null;

  const step = howSteps[howStep];
  const isLast = howStep === howSteps.length - 1;

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeHowModal();
      }}
    >
      <div className="modal how-modal" onMouseEnter={pauseHow} onMouseLeave={resumeHow}>
        <button className="modal-close-x" onClick={closeHowModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="how-progress">
          {howSteps.map((_, i) => (
            <div className="how-seg" key={i}>
              {i < howStep && <div className="how-seg-fill filled" />}
              {i === howStep && (
                <div
                  // remounting on howCycle restarts the CSS width transition
                  key={howCycle}
                  className="how-seg-fill animating"
                  style={{ transitionDuration: `${HOW_DURATION}ms`, width: '100%' }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="how-stage">
          <div className="how-stage-content" key={howStep}>
            <span className="how-num">
              {String(howStep + 1).padStart(2, '0')} / {String(howSteps.length).padStart(2, '0')}
            </span>
            <div className="how-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        </div>

        <div className="how-nav">
          <button className="how-nav-btn" disabled={howStep === 0} onClick={() => goToHowStep(howStep - 1)}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>

          <div className="how-dots">
            {howSteps.map((_, i) => (
              <button
                key={i}
                className={`how-dot ${i === howStep ? 'active' : ''}`}
                aria-label={`Go to step ${i + 1}`}
                onClick={() => goToHowStep(i)}
              />
            ))}
          </div>

          <button className="how-nav-btn" onClick={() => goToHowStep(isLast ? 0 : howStep + 1)}>
            {isLast ? 'Restart' : 'Next'}
            <svg viewBox="0 0 24 24" fill="none">
              {isLast ? (
                <>
                  <path
                    d="M4 4v6h6M20 20v-6h-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M5.5 15a7 7 0 0013-3M18.5 9a7 7 0 00-13 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              ) : (
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
