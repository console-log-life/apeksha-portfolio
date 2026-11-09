import { Link } from "react-router-dom";
import GalaxyBackground from "@/components/common/GalaxyBackground";

const NotFound = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
    <GalaxyBackground />
    <div className="relative z-10 max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 text-center shadow-[0_30px_100px_rgba(2,6,23,0.6)] backdrop-blur-2xl">
      <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">404</div>
      <h1 className="mt-4 text-4xl text-white sm:text-5xl">This route is off the map.</h1>
      <p className="mt-4 text-sm leading-7 text-slate-300">
        The page you asked for does not exist in this portfolio. Head back to the home route to see
        the rebuilt experience.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
      >
        Back to portfolio
      </Link>
    </div>
  </div>
);

export default NotFound;
