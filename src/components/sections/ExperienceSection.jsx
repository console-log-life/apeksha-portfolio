import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { experienceItems } from "@/data/portfolio";

const ExperienceSection = () => (
  <SectionShell id="experience">
    <SectionHeading
      eyebrow="Experience"
      title={
        <>
          Product experience shaped through <span className="aurora-text">real builds</span> and
          repeated practice.
        </>
      }
      description="This is hands-on, project-driven experience rather than inflated job-title theatre. The focus stays on building judgment, delivery quality, and implementation range."
    />

    <div className="space-y-6">
      {experienceItems.map((item, index) => (
        <GlassPanel
          key={item.title}
          className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.25fr_0.75fr]"
          data-reveal
          data-reveal-direction={index % 2 === 0 ? "left" : "right"}
        >
          <div>
            <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{item.period}</div>
            <h3 className="mt-4 text-2xl text-white">{item.title}</h3>
          </div>
          <div>
            <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      ))}
    </div>
  </SectionShell>
);

export default ExperienceSection;
