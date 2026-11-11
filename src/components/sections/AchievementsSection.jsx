import { motion } from "framer-motion";
import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { achievements } from "@/data/portfolio";

const AchievementsSection = () => (
  <SectionShell id="achievements">
    <SectionHeading
      eyebrow="Achievements"
      title={
        <>
          Recognition from <span className="aurora-text">hackathons, certifications, and community</span>.
        </>
      }
      description="A snapshot of competitive wins, formal credentials, and programs that have shaped the work — earned through building, shipping, and showing up consistently."
      align="center"
    />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.07, duration: 0.55 }}
          >
            <GlassPanel className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.075]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100 transition duration-300 group-hover:bg-cyan-300/20">
                  <Icon className="text-xl" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300">
                  {item.tag}
                </span>
              </div>

              <h3 className="mt-5 text-xl text-white">{item.title}</h3>
              <div className="mt-1 text-sm text-cyan-200/75">{item.org}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </GlassPanel>
          </motion.div>
        );
      })}
    </div>
  </SectionShell>
);

export default AchievementsSection;
