import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { projects } from "@/data/portfolio";

const ProjectVisual = ({ project }) => {
  if (project.image) {
    return (
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-56 items-end overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6`}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-8 top-4 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute right-3 top-10 h-16 w-16 rounded-full border border-white/20" />
        <div className="absolute bottom-5 left-8 h-10 w-28 rounded-full border border-white/20" />
      </div>
      <div className="relative">
        <div className="text-xs uppercase tracking-[0.28em] text-slate-100/75">{project.badge}</div>
        <div className="mt-3 text-2xl text-white">{project.visual}</div>
      </div>
    </div>
  );
};

const TiltCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-160, 160], [6, -6]), {
    stiffness: 250,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-160, 160], [-6, 6]), {
    stiffness: 250,
    damping: 28,
  });

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className="h-full [perspective:1200px]"
    >
      <GlassPanel
        className={`group h-full overflow-hidden p-5 transition-colors duration-300 sm:p-6 ${
          hovered ? "border-cyan-300/30" : ""
        }`}
      >
        <ProjectVisual project={project} />

        <div className="mt-6 flex items-start justify-between gap-4" style={{ transform: "translateZ(30px)" }}>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{project.category}</div>
            <h3 className="mt-3 text-2xl text-white">{project.title}</h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
            {project.badge}
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm text-slate-950 transition hover:scale-[1.02]"
            >
              <FiExternalLink />
              Live demo
            </a>
          ) : null}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              <FiGithub />
              Source code
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-3 text-sm text-slate-400">
              Private or not yet published
            </div>
          )}
        </div>
      </GlassPanel>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <SectionShell id="projects">
    <SectionHeading
      eyebrow="Projects"
      title={
        <>
          Recent work across <span className="aurora-text">interaction, AI, and full-stack delivery</span>.
        </>
      }
      description="The case studies below reflect what the rest of this portfolio is built around: product framing, clean execution, and presentation quality that goes beyond default component stacks."
      align="center"
    />

    <div className="grid gap-6 xl:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.08, duration: 0.55 }}
        >
          <TiltCard project={project} />
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default ProjectsSection;
