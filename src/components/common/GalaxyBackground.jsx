const GalaxyBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 opacity-70">
      <div className="absolute -left-24 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/16 blur-3xl" />
      <div className="absolute right-[-8rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/14 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />
    </div>
    <div className="constellation-grid absolute inset-0 opacity-[0.14]" />
    <div className="noise-mask absolute inset-0 opacity-40" />
  </div>
);

export default GalaxyBackground;
