import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resolveOffset = (direction) => {
  switch (direction) {
    case "left":
      return { x: -48, y: 0 };
    case "right":
      return { x: 48, y: 0 };
    case "down":
      return { x: 0, y: -32 };
    default:
      return { x: 0, y: 32 };
  }
};

const useGsapReveal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-aurora]", {
        backgroundPosition: "200% center",
        duration: 14,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        const { x, y } = resolveOffset(element.dataset.revealDirection);

        gsap.fromTo(
          element,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
};

export default useGsapReveal;
