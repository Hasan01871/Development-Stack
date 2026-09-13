function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
          Build Your Ideal
          <br />
          <span
            className="brand-gradient-text"
            style={{
              backgroundImage: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Development Stack
          </span>
        </h1>
        <p className="mt-4 text-neutral-500 max-w-md">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="brand-gradient-bg text-white font-semibold px-6 py-3 rounded-full text-sm shadow-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-neutral-300 text-neutral-700 font-semibold px-6 py-3 rounded-full text-sm hover:border-neutral-900 hover:text-neutral-900"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative banner graphic: layered "stack" illustration in the brand colors.
          If you already have assets/banner-stack.png, drop it into the public/ folder
          and swap this <svg> block for: <img src="/banner-stack.png" alt="Development stack illustration" /> */}
      <div className="hidden md:flex justify-center">
        <svg viewBox="0 0 320 320" className="w-72 h-72">
          <defs>
            <linearGradient id="plate1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="plate2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
            <linearGradient id="plate3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="90" rx="95" ry="32" fill="url(#plate1)" opacity="0.95" />
          <rect x="65" y="90" width="190" height="18" fill="url(#plate1)" opacity="0.7" />
          <ellipse cx="160" cy="170" rx="95" ry="32" fill="url(#plate2)" opacity="0.95" />
          <rect x="65" y="170" width="190" height="18" fill="url(#plate2)" opacity="0.7" />
          <ellipse cx="160" cy="250" rx="95" ry="32" fill="url(#plate3)" opacity="0.95" />
          <rect x="65" y="250" width="190" height="18" fill="url(#plate3)" opacity="0.7" />
          <circle cx="130" cy="88" r="10" fill="white" opacity="0.85" />
          <circle cx="190" cy="88" r="6" fill="white" opacity="0.6" />
          <circle cx="150" cy="168" r="8" fill="white" opacity="0.7" />
          <circle cx="130" cy="248" r="7" fill="white" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;