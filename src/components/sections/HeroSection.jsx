import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroHighlights, heroRoles as roles, heroStats, portfolioMeta, socialLinks } from "@/data/portfolio";
import GlassPanel from "@/components/common/GlassPanel";
import SectionShell from "@/components/common/SectionShell";
import DeveloperDesk from "@/components/three/DeveloperDesk";

const scrollToSection = (targetId) => document.getElementById(targetId)?.scrollIntoView({ behavior:"smooth", block:"start" });

const HeroSection = () => {
  const [activeRole,setActiveRole] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => setActiveRole(current => (current+1)%roles.length),2400);
    return () => window.clearInterval(interval);
  },[]);

  return <SectionShell id="home" className="pt-12 sm:pt-16">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
      <div className="space-y-8">
        <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[.28em] text-cyan-100" data-reveal>Full-stack · AI-powered builds · ABV-IIITM</div>
        <div data-reveal>
          <motion.h1 className="max-w-4xl text-5xl leading-[.95] text-white sm:text-6xl lg:text-7xl xl:text-8xl" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:"easeOut"}}>
            Apeksha builds <span className="font-display italic text-cyan-100">interactive systems</span> that feel cinematic, fast, and usable.
          </motion.h1>
          <div className="mt-6 overflow-hidden text-lg text-slate-300 sm:text-xl">
            <motion.div key={roles[activeRole]} initial={{y:24,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.45}} className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white">{roles[activeRole]}</motion.div>
          </div>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" data-reveal>{portfolioMeta.intro}</p>
        <div className="flex flex-col gap-4 sm:flex-row" data-reveal>
          <button type="button" onClick={()=>scrollToSection(portfolioMeta.primaryCta.href)} className="rounded-full bg-white px-6 py-4 text-sm font-medium text-slate-950 transition hover:scale-[1.02]">{portfolioMeta.primaryCta.label}</button>
          <button type="button" onClick={()=>scrollToSection(portfolioMeta.secondaryCta.href)} className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/10">{portfolioMeta.secondaryCta.label}</button>
          <a href={portfolioMeta.tertiaryCta.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-6 py-4 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/5">{portfolioMeta.tertiaryCta.label}</a>
        </div>
        <div className="flex flex-wrap gap-3" data-reveal>
          {socialLinks.map(link=>{const Icon=link.icon;return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"><Icon className="text-base"/>{link.label}</a>;})}
        </div>
      </div>
      <div className="relative" data-reveal data-reveal-direction="left">
        <GlassPanel className="glass-panel-strong relative overflow-hidden p-4 sm:p-5">
          <div className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-fuchsia-400/10 blur-3xl"/>
          <div className="relative">
            <div className="mb-2 flex items-center justify-between px-2">
              <div><div className="text-[10px] uppercase tracking-[.3em] text-cyan-200/70">Apeksha Jain · Digital workspace</div><div className="mt-1 text-sm text-slate-300">Designing, engineering, exploring.</div></div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[10px] uppercase tracking-[.18em] text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#8aa472]"/>Available</div>
            </div>
            <Suspense fallback={<div className="flex h-[300px] items-center justify-center text-sm text-slate-400 sm:h-[370px]">Building 3D workspace…</div>}><DeveloperDesk/></Suspense>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map(item=><div key={item.title} className="rounded-[1.1rem] border border-white/10 bg-slate-950/65 p-3"><div className="text-xs font-medium text-white">{item.title}</div><p className="mt-2 text-[11px] leading-5 text-slate-400">{item.description}</p></div>)}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {heroStats.map(item=>{const Icon=item.icon;return <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3 py-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-100"><Icon/></div><div className="min-w-0"><div className="text-[9px] uppercase tracking-[.16em] text-slate-500">{item.label}</div><div className="mt-1 text-[10px] leading-4 text-slate-200">{item.value}</div></div></div>;})}
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  </SectionShell>;
};
export default HeroSection;
