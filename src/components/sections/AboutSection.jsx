import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { aboutCards, aboutParagraphs, aboutStats } from "@/data/portfolio";

const AboutSection = () => (
  <SectionShell id="about">
    <SectionHeading
      eyebrow="About"
      title={
        <>
          I turn coursework and curiosity into <span className="aurora-text">products that ship</span>.
        </>
      }
      description="Not a list of buzzwords — a short, honest picture of what I build, how I work, and the proof behind it."
    />

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <GlassPanel className="glass-panel-strong p-7 sm:p-8" data-reveal>
        <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">Profile</div>
        <div className="mt-5 space-y-4">
          {aboutParagraphs.map((para) => (
            <p key={para.slice(0, 24)} className="text-sm leading-7 text-slate-300">
              {para}
            </p>
          ))}
        </div>

        <div className="section-divider my-7" />

        <div className="grid grid-cols-2 gap-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <div className="text-2xl text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {aboutCards.map((item) => {
          const Icon = item.icon;

          return (
            <GlassPanel
              key={item.title}
              className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.075]"
              data-reveal
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </div>
  </SectionShell>
);

export default AboutSection;
