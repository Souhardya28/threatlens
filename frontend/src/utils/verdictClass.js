export function verdictClass(verdict) {
  if (verdict === 'SAFE') return 'v-safe';
  if (verdict === 'SUSPICIOUS') return 'v-suspicious';
  if (verdict === 'HIGH RISK') return 'v-high';
  return 'v-dangerous';
}
