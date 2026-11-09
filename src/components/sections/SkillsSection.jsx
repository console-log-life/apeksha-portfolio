import { Suspense, lazy } from "react";
import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { skillGroups } from "@/data/portfolio";

const SkillsGlobe = lazy(() => import("@/components/three/SkillsGlobe"));

const SkillsSection = () => (
  <SectionShell id="skills">
    <SectionHeading
      eyebrow="Skills"
      title={
        <>
          The tools behind the builds, in an <span className="aurora-text">interactive 3D globe</span>.
        </>
      }
      description="Languages, frameworks, and tooling I reach for across the stack. Drag to rotate the globe, hover any icon for a glow, and click to open its docs."
      align="center"
    />

    <div className="mx-auto max-w-4xl" data-reveal>
      <Suspense
        fallback={
          <div className="flex h-[30rem] items-center justify-center text-sm text-slate-400 sm:h-[36rem]">
            Loading globe…
          </div>
        }
      >
        <SkillsGlobe />
      </Suspense>
      <p className="mt-2 text-center text-xs uppercase tracking-[0.24em] text-slate-500">
        Drag to rotate · click any icon to open its docs
      </p>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <GlassPanel key={group.label} className="p-5" data-reveal>
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{group.label}</div>
          <p className="mt-3 text-sm leading-7 text-slate-200">{group.items}</p>
        </GlassPanel>
      ))}
    </div>
  </SectionShell>
);

export default SkillsSection;
