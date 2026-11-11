import { navItems, portfolioMeta, socialLinks } from "@/data/portfolio";

const Footer = () => (
  <footer className="relative border-t border-white/10 pb-10 pt-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-xl">
        <div className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Built for the long arc</div>
        <h3 className="mt-3 text-2xl text-white sm:text-3xl">{portfolioMeta.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{portfolioMeta.quote}</p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:w-[42rem]">
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">Sections</div>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/#${item.href}`}
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">Connect</div>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  aria-label={link.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-7xl px-5 text-xs uppercase tracking-[0.22em] text-slate-500 sm:px-8">
      © {new Date().getFullYear()} {portfolioMeta.name}. React 18, Vite, Tailwind CSS, GSAP, Framer Motion, React Three Fiber.
    </div>
  </footer>
);

export default Footer;
