// Lightweight, purely client-side heuristic used only as a fallback so the
// demo keeps working before the real scoring model is wired up on the backend.
export function heuristicScan(raw) {
  const url = raw.toLowerCase();
  let score = 8;
  const reasons = [];

  if (!/^https:\/\//.test(raw) && !/^http:\/\//.test(raw)) score += 4;
  if (url.includes('-')) score += url.split('-').length * 4;

  if (/login|verify|secure|update|confirm|account/.test(url)) {
    score += 22;
    reasons.push('Contains urgency/credential-related keywords in the URL');
  }
  if (/\d/.test(url.replace(/\.(com|net|org|io)/, ''))) {
    score += 10;
    reasons.push('Numeric characters substituted into a brand-like domain');
  }
  if ((url.match(/\./g) || []).length > 2) {
    score += 14;
    reasons.push('Unusual number of subdomains');
  }
  if (url.length > 40) {
    score += 8;
    reasons.push('Long, obfuscated-looking URL');
  }
  if (reasons.length === 0) reasons.push('No high-risk lexical patterns found in the URL structure');
  reasons.push('Domain reputation lookup: no prior threat reports');

  score = Math.max(2, Math.min(97, score));

  let verdict = 'SAFE';
  if (score >= 90) verdict = 'DANGEROUS';
  else if (score >= 70) verdict = 'HIGH RISK';
  else if (score >= 40) verdict = 'SUSPICIOUS';

  return { url: raw, score, verdict, reasons: reasons.slice(0, 3) };
}
