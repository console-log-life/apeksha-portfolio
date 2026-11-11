import { useEffect, useRef, useState } from "react";
import SectionShell from "@/components/common/SectionShell";
import SectionHeading from "@/components/common/SectionHeading";
import { achievements, aboutParagraphs, contactChannels, portfolioMeta, projects, skills } from "@/data/portfolio";

const run = (cmd) => {
  const [c, ...a] = cmd.trim().split(/\s+/);
  switch (c.toLowerCase()) {
    case "": return [];
    case "help": return ["about  skills  projects  achievements  contact  whoami  neofetch", "lumos  nox  accio resume  clear   (try sudo too)"];
    case "about": return aboutParagraphs;
    case "whoami": return [`${portfolioMeta.name} — ${portfolioMeta.title}`];
    case "skills": return [skills.map((s) => s.title).join(" · ")];
    case "projects": return projects.map((p, i) => `[${i + 1}] ${p.title} — ${p.category} (${p.stack.slice(0, 3).join(", ")})`);
    case "achievements": return achievements.map((x) => `★ ${x.title} · ${x.org}`);
    case "contact": return contactChannels.map((x) => `${x.label.padEnd(9)} ${x.value}`);
    case "neofetch": return [`${portfolioMeta.name.toLowerCase().replace(" ", "")}@portfolio`, `Role: ${portfolioMeta.title}`, "Shell: spellbash 6.0 (read-only)", `Projects: ${projects.length} · Skills: ${skills.length}`];
    case "lumos": return ["✨ Lumos! The screen brightens."];
    case "nox": return ["🌑 Nox. Lights out."];
    case "accio": if (a[0] === "resume") { window.open(portfolioMeta.resumeHref, "_blank"); return ["📄 Resume summoned."]; } return ["Accio what? Try: accio resume"];
    case "sudo": return ["Nice try. This portfolio is read-only."];
    default: return [`${c}: command not found. Type 'help'.`];
  }
};

const TerminalSection = () => {
  const [lines, setLines] = useState([{ t: "Welcome. Type 'help' to see what you can ask." }]);
  const [val, setVal] = useState("");
  const box = useRef(null);
  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight }); }, [lines]);

  const submit = (e) => {
    e.preventDefault();
    if (val.trim() === "clear") setLines([]);
    else setLines((l) => [...l, { t: `$ ${val}`, cmd: true }, ...run(val).map((t) => ({ t }))]);
    setVal("");
  };

  return (
    <SectionShell id="terminal">
      <SectionHeading eyebrow="Terminal" title="Ask my shell." description="A tiny Linux-style terminal. Type a command and hit Enter." />
      <div className="glass-panel-strong overflow-hidden font-mono text-sm" data-reveal>
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" /><span className="h-3 w-3 rounded-full bg-amber-300/80" /><span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3">apeksha@portfolio: ~</span>
        </div>
        <div ref={box} className="h-72 space-y-1 overflow-y-auto p-5 text-slate-300" onClick={() => document.getElementById("term-in")?.focus()}>
          {lines.map((l, i) => <p key={i} className={l.cmd ? "text-cyan-300" : ""}>{l.t}</p>)}
          <form onSubmit={submit} className="flex gap-2">
            <span className="text-cyan-300">$</span>
            <input id="term-in" value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" spellCheck="false" aria-label="Terminal command" className="flex-1 bg-transparent text-white outline-none" />
          </form>
        </div>
      </div>
    </SectionShell>
  );
};

export default TerminalSection;
