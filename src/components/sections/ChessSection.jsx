import { useMemo, useState } from "react";
import { Chess } from "chess.js";
import SectionShell from "@/components/common/SectionShell";
import SectionHeading from "@/components/common/SectionHeading";

const G = { p: "♟", n: "♞", b: "♝", r: "♜", q: "♛", k: "♚" };
const V = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };

const evalBoard = (g) => g.board().flat().reduce((s, c, i) => {
  if (!c) return s;
  const centre = 10 - (Math.abs(3.5 - (i % 8)) + Math.abs(3.5 - Math.floor(i / 8))) * 2;
  return s + (c.color === "b" ? 1 : -1) * (V[c.type] + centre);
}, 0);

const search = (g, d, a, b) => {
  if (g.isCheckmate()) return g.turn() === "b" ? -99999 : 99999;
  if (d === 0 || g.isGameOver()) return g.isGameOver() ? 0 : evalBoard(g);
  const max = g.turn() === "b";
  let best = max ? -Infinity : Infinity;
  for (const m of g.moves()) {
    g.move(m);
    const s = search(g, d - 1, a, b);
    g.undo();
    if (max) { best = Math.max(best, s); a = Math.max(a, s); } else { best = Math.min(best, s); b = Math.min(b, s); }
    if (b <= a) break;
  }
  return best;
};

const botMove = (g) => {
  let best = null, bs = -Infinity;
  for (const m of g.moves().sort(() => Math.random() - 0.5)) {
    g.move(m);
    const s = search(g, 2, -Infinity, Infinity);
    g.undo();
    if (s > bs) { bs = s; best = m; }
  }
  return best;
};

const ChessSection = () => {
  const [game, setGame] = useState(() => new Chess());
  const [sel, setSel] = useState(null);
  const targets = useMemo(() => (sel ? game.moves({ square: sel, verbose: true }).map((m) => m.to) : []), [sel, game]);

  const status = game.isCheckmate() ? (game.turn() === "b" ? "You won. Checkmate!" : "Bot wins. Checkmate.")
    : game.isGameOver() ? "Draw." : game.turn() === "w" ? (game.isCheck() ? "Your move — you're in check" : "Your move (white)") : "Bot is thinking…";

  const click = (sq, piece) => {
    if (game.turn() !== "w" || game.isGameOver()) return;
    if (sel && targets.includes(sq)) {
      const g = new Chess(game.fen());
      g.move({ from: sel, to: sq, promotion: "q" });
      setSel(null); setGame(g);
      if (!g.isGameOver()) setTimeout(() => {
        const n = new Chess(g.fen()); const m = botMove(n);
        if (m) n.move(m);
        setGame(n);
      }, 250);
    } else setSel(piece?.color === "w" ? sq : null);
  };

  return (
    <SectionShell id="chess">
      <SectionHeading eyebrow="Play" title="Beat my chess bot." description="You play white. The bot looks two moves ahead, so it is beatable, but it will punish free pieces." />
      <div className="flex flex-col items-center gap-5" data-reveal>
        <div className="grid grid-cols-8 overflow-hidden rounded-2xl border border-white/15 shadow-glow" role="grid" aria-label="Chess board">
          {game.board().flat().map((p, i) => {
            const sq = "abcdefgh"[i % 8] + (8 - Math.floor(i / 8));
            const dark = (i + Math.floor(i / 8)) % 2 === 1;
            return (
              <button key={sq} type="button" onClick={() => click(sq, p)} aria-label={`${sq} ${p ? p.color + p.type : "empty"}`}
                className={`flex h-10 w-10 items-center justify-center text-3xl sm:h-14 sm:w-14 sm:text-4xl ${dark ? "bg-sky-900/70" : "bg-sky-100/15"} ${sel === sq ? "ring-2 ring-inset ring-cyan-300" : ""} ${targets.includes(sq) ? "after:h-3 after:w-3 after:rounded-full after:bg-cyan-300/70" : ""}`}>
                <span className={p?.color === "w" ? "text-white" : "text-slate-950 drop-shadow-[0_0_1px_#a69b7d]"}>{p && G[p.type]}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-slate-300" aria-live="polite">{status}</p>
        <button type="button" onClick={() => { setGame(new Chess()); setSel(null); }} className="rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[.16em] text-white hover:border-cyan-200/50">New game</button>
      </div>
    </SectionShell>
  );
};

export default ChessSection;
