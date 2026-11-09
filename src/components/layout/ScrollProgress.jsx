import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
