import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { scanUrl } from '../../api/scanService';
import { examples } from '../../data/examples';
import { verdictClass } from '../../utils/verdictClass';

const QUICK_SCAN_INDEXES = [0, 2, 3];

export default function ScannerWidget() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { url: '' } });

  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [displayScore, setDisplayScore] = useState(0);
  const scoreIntervalRef = useRef(null);

  const runScan = async (rawUrl) => {
    if (!rawUrl.trim()) return;
    setScanning(true);
    try {
      const data = await scanUrl(rawUrl);
      // small delay so the scan-line sweep animation has time to play,
      // mirroring the original demo's timing
      setTimeout(() => {
        setResult(data);
        setScanning(false);
      }, 550);
    } catch (err) {
      setScanning(false);
    }
  };

  const onSubmit = ({ url }) => runScan(url);

  const quickScan = (index) => {
    const example = examples[index];
    setValue('url', example.url);
    runScan(example.url);
  };

  // Animate the risk score counting up whenever a new result arrives
  useEffect(() => {
    if (!result) return undefined;
    clearInterval(scoreIntervalRef.current);
    setDisplayScore(0);

    const target = result.score;
    const step = Math.max(1, Math.round(target / 24));
    let current = 0;

    scoreIntervalRef.current = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(scoreIntervalRef.current);
      }
      setDisplayScore(current);
    }, 16);

    return () => clearInterval(scoreIntervalRef.current);
  }, [result]);

  return (
    <div className="scanner">
      <div className="scanner-chrome">
        <div className="dots">
          <i /><i /><i />
        </div>
        <div className="scanner-bar">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          ThreatLens — live scan
        </div>
      </div>

      <div className="scanner-body">
        <form className="scan-input-row" onSubmit={handleSubmit(onSubmit)}>
          <input
            id="urlInput"
            type="text"
            placeholder="Paste a URL to analyze…"
            autoComplete="off"
            {...register('url')}
          />
          <button className="btn btn-primary btn-sm" type="submit" disabled={isSubmitting}>
            Analyze
          </button>
        </form>

        <div className="try-row">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)', paddingTop: 6 }}>
            Try:
          </span>
          {QUICK_SCAN_INDEXES.map((i) => (
            <button key={i} type="button" className="try-chip" onClick={() => quickScan(i)}>
              {examples[i].url}
            </button>
          ))}
        </div>

        <div className="scan-stage">
          <div className={`scan-line ${scanning ? 'active' : ''}`} />

          {!result && !scanning && (
            <div className="scan-placeholder">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.6" />
                <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Paste a link or pick an example above
            </div>
          )}

          {result && (
            <div className={`result show ${verdictClass(result.verdict)}`}>
              <div className="result-top">
                <span className="verdict-badge">{result.verdict}</span>
                <div className="score-dial">
                  <span className="num">{displayScore}</span>
                  <span className="max">/100 risk</span>
                </div>
              </div>
              <div className="reasons">
                {result.reasons.map((reason, idx) => (
                  <div className="reason" key={idx}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
