const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`${alignment} mb-12`} data-reveal>
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </div>
      <h2 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
};

export default SectionHeading;
