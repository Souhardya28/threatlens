export const examples = [
  {
    url: 'paypa1-secure-login.com/verify',
    score: 94,
    verdict: 'DANGEROUS',
    reasons: [
      'Look-alike of paypal.com (character substitution)',
      'Domain registered 3 days ago',
      'Password + OTP fields on a non-HTTPS page',
    ],
  },
  {
    url: 'chase.com.account-verify.net',
    score: 78,
    verdict: 'HIGH RISK',
    reasons: [
      'Suspicious subdomain structure mimicking a trusted brand',
      'Urgent language detected: "account will be suspended"',
      'No valid SSL certificate found',
    ],
  },
  {
    url: 'mail-google-support.com',
    score: 61,
    verdict: 'SUSPICIOUS',
    reasons: [
      'Brand keyword used in an unrelated domain',
      'Redirect chain detected across 3 hops',
      'Low domain reputation score',
    ],
  },
  {
    url: 'github.com/anthropics/claude',
    score: 4,
    verdict: 'SAFE',
    reasons: [
      'Domain matches trusted registry entry',
      'Valid HTTPS certificate, 12-year history',
      'No credential-harvesting indicators found',
    ],
  },
];
