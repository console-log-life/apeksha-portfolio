import { FiCalendar, FiMapPin } from "react-icons/fi";
import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { coursework, education } from "@/data/portfolio";

const EducationSection = () => (
  <SectionShell id="education">
    <SectionHeading
      eyebrow="Education"
      title={
        <>
          Studying IT at <span className="aurora-text">ABV-IIITM, Gwalior</span>.
        </>
      }
      description="A five-year integrated dual-degree where coursework in systems, algorithms, and databases feeds directly into the projects in this portfolio."
    />

    <GlassPanel className="glass-panel-strong p-6 sm:p-8 lg:p-10" data-reveal>
      <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/20 to-fuchsia-300/10 text-lg font-semibold tracking-[0.18em] text-cyan-100">
            ABV
          </div>
          <div>
            <h3 className="text-2xl text-white sm:text-3xl">{education.institute}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{education.instituteFull}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <FiMapPin className="text-cyan-200/70" />
              {education.location}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <FiCalendar />
            {education.duration}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
            {education.badge}
          </span>
        </div>
      </div>

      <div className="grid gap-6 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">Degree</div>
          <div className="mt-3 text-2xl text-white">{education.degree}</div>
          <div className="mt-1 text-lg text-slate-300">{education.field}</div>
          <p className="mt-5 text-sm leading-7 text-slate-300">{education.description}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">Relevant coursework</div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  </SectionShell>
);

export default EducationSection;
