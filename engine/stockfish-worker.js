/* MyChess64 Stockfish Worker
   Same-origin worker wrapper for GitHub Pages.
   Stockfish.js 10.0.2 is GPL-3.0. Keep the license notice when distributing.
*/
try {
  importScripts('https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js');
} catch (e) {
  postMessage('MYCHESS64_ENGINE_LOAD_ERROR ' + (e && e.message ? e.message : e));
}

