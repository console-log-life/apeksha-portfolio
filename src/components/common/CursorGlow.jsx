import { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const node = glowRef.current;

    if (!node || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const moveX = gsap.quickTo(node, "x", { duration: 0.45, ease: "power3.out" });
    const moveY = gsap.quickTo(node, "y", { duration: 0.45, ease: "power3.out" });

    const handleMove = (event) => {
      moveX(event.clientX - 144);
      moveY(event.clientY - 144);
      gsap.to(node, { opacity: 1, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
      gsap.to(node, { opacity: 0, duration: 0.35, overwrite: true });
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-10 h-72 w-72 rounded-full opacity-0 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(103,232,249,0.18) 0%, rgba(244,114,182,0.14) 42%, rgba(2,6,23,0) 72%)",
      }}
    />
  );
};

export default CursorGlow;
