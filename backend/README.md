# Backend

Intentionally left empty for now.

The frontend already expects a REST API here (see
`frontend/src/api/axiosClient.js` and `frontend/src/api/scanService.js`),
which calls:

```
POST /scan
Body: { "url": "<string>" }
Response: { "url": "<string>", "score": <number 0-100>, "verdict": "SAFE" | "SUSPICIOUS" | "HIGH RISK" | "DANGEROUS", "reasons": ["<string>", ...] }
```

Until this is implemented, the frontend automatically falls back to a
local heuristic scan so the UI keeps working on its own.
