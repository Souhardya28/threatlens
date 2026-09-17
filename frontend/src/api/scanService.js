import axiosClient from './axiosClient';
import { examples } from '../data/examples';
import { heuristicScan } from '../utils/heuristicScan';

/**
 * Scans a URL via the backend API (POST /scan). The backend folder is
 * currently empty, so until it's implemented this call fails and we fall
 * back to a canned example (if the URL matches one of the demo domains)
 * or a local heuristic score, so the UI keeps working end-to-end.
 */
export async function scanUrl(rawUrl) {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    throw new Error('A URL is required to run a scan.');
  }

  try {
    const { data } = await axiosClient.post('/scan', { url: trimmed });
    return data;
  } catch (error) {
    const preset = examples.find((example) =>
      trimmed.toLowerCase().includes(example.url.split('/')[0])
    );
    return preset || heuristicScan(trimmed);
  }
}
