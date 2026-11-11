import { useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

export const Ambience = () => {
  const bar = useRef(null);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      bar.current?.style.setProperty("transform", `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`);
    };
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <div ref={bar} className="scroll-bar" aria-hidden="true" style={{ transform: "scaleX(0)" }} />
      <div className="aurora-blob" aria-hidden="true" style={{ width: 460, height: 460, left: "-8%", top: "30%", background: "#866bd5" }} />
      <div className="aurora-blob" aria-hidden="true" style={{ width: 420, height: 420, right: "-6%", top: "55%", background: "#528bdd", animationDelay: "-8s" }} />
      <div className="aurora-blob" aria-hidden="true" style={{ width: 340, height: 340, left: "40%", top: "-10%", background: "#31a87e", opacity: .14, animationDelay: "-14s" }} />
    </>
  );
};

export const Marquee = () => {
  const words = [...skills.map((s) => s.title), "Design", "Ship", "Repeat"];
  return (
    <div className="marquee my-16" aria-hidden="true">
      <div className="marquee-track">{[...words, ...words].map((w, i) => <span key={i}>{w}</span>)}</div>
    </div>
  );
};
