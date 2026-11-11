const SectionShell = ({ id, className = "", children }) => (
  <section id={id} className={`relative scroll-mt-28 py-24 sm:py-28 ${className}`}>
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
  </section>
);

export default SectionShell;
