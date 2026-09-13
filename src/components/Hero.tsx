import stackImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-30 px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center"
    >
      <div className="flex flex-col items-start justify-center text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900 text-left">
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

        <p className="mt-6 text-neutral-500 max-w-md text-base leading-relaxed text-left">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 justify-start w-full">
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

      <div className="hidden md:flex justify-center items-center h-full">
        <img
          src={stackImage}
          alt="Development stack illustration"
          className="w-72 h-72 lg:w-80 lg:h-80 object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;