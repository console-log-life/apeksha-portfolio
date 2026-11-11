import { useState } from "react";
import { achievements, contactChannels, education, experienceItems, portfolioMeta, projects, skills } from "@/data/portfolio";

const answer = (q) => {
  const s = q.toLowerCase();
  const hit = projects.find((p) => s.includes(p.title.toLowerCase()));
  if (hit) return `${hit.title}: ${hit.summary} Built with ${hit.stack.join(", ")}.`;
  if (/project|build|made/.test(s)) return `Projects: ${projects.map((p) => p.title).join(", ")}. Ask about any one by name.`;
  if (/skill|tech|stack|know/.test(s)) return `Skills: ${skills.map((x) => x.title).join(", ")}.`;
  if (/award|achiev|hackathon|won|cert/.test(s)) return achievements.slice(0, 4).map((a) => `${a.title} (${a.org})`).join("; ") + ".";
  if (/study|college|educat|iiit|degree/.test(s)) return `${education.degree} in ${education.field} at ${education.institute}, ${education.duration}.`;
  if (/experience|intern|work/.test(s)) return experienceItems[0].summary;
  if (/contact|email|hire|reach|phone/.test(s)) return contactChannels.map((c) => `${c.label}: ${c.value}`).join(" · ");
  if (/resume|cv/.test(s)) return "Download it from the hero section, or type 'accio resume' in the terminal.";
  if (/who|about|yourself/.test(s)) return `${portfolioMeta.name}. ${portfolioMeta.title}. ${portfolioMeta.quote}`;
  return "I can answer about projects, skills, achievements, education, experience, or how to contact Apeksha.";
};

const AskAI = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ r: "bot", t: "Hi! Ask me anything about Apeksha's work." }]);
  const [v, setV] = useState("");

  const send = async (e) => {
    e.preventDefault();
    if (!v.trim()) return;
    const q = v; setV("");
    setMsgs((m) => [...m, { r: "me", t: q }]);
    let t = answer(q);
    const api = import.meta.env.VITE_CHAT_API;
    if (api) {
      try {
        const res = await fetch(api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q }) });
        const d = await res.json(); if (d.reply) t = d.reply;
      } catch { /* falls back to local answer */ }
    }
    setMsgs((m) => [...m, { r: "bot", t }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="glass-panel-strong mb-3 flex h-96 w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden !rounded-3xl">
          <div className="flex-1 space-y-2 overflow-y-auto p-4 text-sm" aria-live="polite">
            {msgs.map((m, i) => <p key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 ${m.r === "me" ? "ml-auto bg-cyan-300/20 text-white" : "bg-white/8 text-slate-200"}`}>{m.t}</p>)}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-white/10 p-3">
            <input value={v} onChange={(e) => setV(e.target.value)} placeholder="Ask about projects…" aria-label="Ask a question" className="input-shell !py-2" />
            <button className="rounded-full bg-cyan-300 px-4 text-xs font-semibold text-slate-950">Send</button>
          </form>
        </div>
      )}
      <button type="button" onClick={() => setOpen(!open)} className="hero-primary-btn ml-auto block rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[.14em] text-slate-950">{open ? "Close" : "Ask AI"}</button>
    </div>
  );
};

export default AskAI;
