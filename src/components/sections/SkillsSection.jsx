import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";

const skillGroups = [
  { label: "Frontend", color: "#bca7ff", glow: "rgba(188,167,255,.3)", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { label: "Backend", color: "#86dfbc", glow: "rgba(134,223,188,.25)", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Programming", color: "#9bcaff", glow: "rgba(155,202,255,.26)", items: ["C", "C++", "Java", "Python"] },
  { label: "Database", color: "#ffd15a", glow: "rgba(255,209,90,.22)", items: ["MySQL", "MongoDB", "SQL"] },
  { label: "Tools", color: "#d8cbff", glow: "rgba(216,203,255,.24)", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { label: "Core CS", color: "#f7a3cc", glow: "rgba(247,163,204,.22)", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  { label: "Soft Skills", color: "#86dfbc", glow: "rgba(134,223,188,.2)", items: ["Communication", "Teamwork", "Leadership", "Problem Solving"] },
];

const SkillModule = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ delay: index * 0.08, duration: 0.65, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.035, rotate: index % 2 ? 1.5 : -1.5 }}
    className="group relative min-h-[190px] overflow-hidden rounded-[1.6rem] border bg-slate-950/75 p-5 backdrop-blur-xl transition-colors"
    style={{ borderColor: `${group.color}55`, boxShadow: `inset 0 0 35px ${group.glow}, 0 0 24px ${group.glow}` }}
  >
    <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full blur-3xl opacity-30 transition-opacity group-hover:opacity-70" style={{ background: group.color }} />
    <div className="relative flex items-center gap-3">
      <div className="h-3 w-3 rounded-full" style={{ background: group.color, boxShadow: `0 0 18px ${group.color}` }} />
      <h3 className="text-xs font-semibold uppercase tracking-[.24em]" style={{ color: group.color }}>{group.label}</h3>
    </div>
    <div className="relative mt-5 flex flex-wrap gap-2">
      {group.items.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[.055] px-3 py-2 text-xs text-slate-100 transition group-hover:border-white/25 group-hover:bg-white/10">{skill}</span>)}
    </div>
    <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px opacity-70" style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }} />
  </motion.div>
);

const SkillsSection = () => (
  <SectionShell id="skills">
    <style>{`
      @keyframes skillOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes skillPulse { 0%,100% { opacity:.35; transform:scale(.96); } 50% { opacity:.8; transform:scale(1.04); } }
      .skill-orbit { animation: skillOrbit 32s linear infinite; }
      .skill-pulse { animation: skillPulse 4s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) { .skill-orbit, .skill-pulse { animation: none; } }
    `}</style>
    <SectionHeading
      eyebrow="Skills · Neural Network"
      title={<>Everything I build with, connected in one <span className="aurora-text">skill universe</span>.</>}
      description="A focused map of the tools and foundations I use across programming, full-stack development, computer science, and collaboration."
      align="center"
    />

    <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#11162b] px-5 py-10 sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(188,167,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(188,167,255,.07) 1px, transparent 1px)", backgroundSize: "42px 42px", transform: "perspective(500px) rotateX(58deg) scale(1.5)", transformOrigin: "center bottom" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px] skill-pulse" />
      <div className="relative mx-auto mb-10 flex h-52 w-52 items-center justify-center sm:mb-14 sm:h-60 sm:w-60">
        <div className="absolute inset-0 rounded-full border border-cyan-300/45 shadow-[0_0_35px_rgba(188,167,255,.2),inset_0_0_35px_rgba(188,167,255,.1)] skill-orbit" />
        <div className="absolute inset-3 rounded-full border border-dashed border-blue-300/40" />
        <div className="absolute inset-7 rounded-full border border-cyan-200/20 skill-orbit" style={{ animationDirection: "reverse", animationDuration: "22s" }} />
        <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-cyan-200/55 bg-[#171b34]/95 text-center shadow-[0_0_55px_rgba(188,167,255,.24),inset_0_0_35px_rgba(188,167,255,.12)] sm:h-44 sm:w-44">
          <span className="text-[9px] uppercase tracking-[.34em] text-cyan-200/75">Apeksha Jain</span>
          <span className="mt-2 text-2xl font-semibold leading-none text-white sm:text-3xl">MY</span>
          <span className="text-2xl font-semibold leading-none text-cyan-100 sm:text-3xl">SKILLS</span>
          <span className="mt-3 text-[8px] uppercase tracking-[.25em] text-cyan-100/55">Core · Build · Create</span>
        </div>
      </div>
      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => <SkillModule key={group.label} group={group} index={index} />)}
      </div>
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-[8px] uppercase tracking-[.35em] text-cyan-100/35">Connected by curiosity · powered by code</div>
    </div>
    <div className="mt-5 flex flex-wrap justify-center gap-3">
      {["7 skill domains", "26+ technologies & strengths", "One curious mind"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-[10px] uppercase tracking-[.16em] text-slate-400">{item}</span>)}
    </div>
  </SectionShell>
);

export default SkillsSection;
