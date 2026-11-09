import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, portfolioMeta } from "@/data/portfolio";

const scrollToSection = (targetId, closeMenu) => {
  const element = document.getElementById(targetId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    const nextUrl = targetId === "home" ? "/" : `/#${targetId}`;
    window.history.replaceState({}, "", nextUrl);
  }

  closeMenu?.();
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-5 py-3 shadow-[0_12px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
        <button
          type="button"
          onClick={() => scrollToSection("home", () => setIsOpen(false))}
          className="text-left"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Portfolio</div>
          <div className="text-base font-semibold text-white">{portfolioMeta.name}</div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={portfolioMeta.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-lg text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/85 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.55)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href, () => setIsOpen(false))}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={portfolioMeta.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
