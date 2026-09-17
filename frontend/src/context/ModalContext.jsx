import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { howSteps } from '../data/howSteps';

const ModalContext = createContext(null);
const HOW_DURATION = 3400;

export function ModalProvider({ children }) {
  // ---- Install modal ----
  const [installOpen, setInstallOpen] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  const openInstallModal = useCallback(() => {
    setInstallSuccess(false);
    setInstallOpen(true);
  }, []);
  const closeInstallModal = useCallback(() => setInstallOpen(false), []);
  const confirmInstall = useCallback(() => setInstallSuccess(true), []);

  // ---- "How it works" walkthrough modal ----
  const [howOpen, setHowOpen] = useState(false);
  const [howStep, setHowStep] = useState(0);
  const [howCycle, setHowCycle] = useState(0); // bumped to restart the progress-bar fill animation
  const howTimerRef = useRef(null);

  const goToHowStep = useCallback((index) => {
    const next = ((index % howSteps.length) + howSteps.length) % howSteps.length;
    setHowStep(next);
    setHowCycle((c) => c + 1);
  }, []);

  const openHowModal = useCallback(() => {
    setHowStep(0);
    setHowCycle((c) => c + 1);
    setHowOpen(true);
  }, []);
  const closeHowModal = useCallback(() => setHowOpen(false), []);

  const pauseHow = useCallback(() => clearTimeout(howTimerRef.current), []);
  const resumeHow = useCallback(() => {
    clearTimeout(howTimerRef.current);
    setHowCycle((c) => c + 1);
    howTimerRef.current = setTimeout(() => goToHowStep(howStep + 1), HOW_DURATION);
  }, [howStep, goToHowStep]);

  // auto-advance timer, restarts whenever the step (or a manual restart) changes
  useEffect(() => {
    if (!howOpen) {
      clearTimeout(howTimerRef.current);
      return undefined;
    }
    clearTimeout(howTimerRef.current);
    howTimerRef.current = setTimeout(() => goToHowStep(howStep + 1), HOW_DURATION);
    return () => clearTimeout(howTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [howOpen, howStep, howCycle]);

  // Escape closes whichever modal is open; arrow keys navigate the walkthrough
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setInstallOpen(false);
        setHowOpen(false);
      }
      if (howOpen) {
        if (e.key === 'ArrowRight') goToHowStep(howStep + 1);
        if (e.key === 'ArrowLeft') goToHowStep(howStep - 1);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [howOpen, howStep, goToHowStep]);

  const value = {
    installOpen,
    installSuccess,
    openInstallModal,
    closeInstallModal,
    confirmInstall,
    howOpen,
    howStep,
    howCycle,
    openHowModal,
    closeHowModal,
    goToHowStep,
    pauseHow,
    resumeHow,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within a ModalProvider');
  return ctx;
}
