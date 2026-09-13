 import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  // Controls whether the mobile menu (hamburger dropdown) is open or closed.
  const [menuOpen, setMenuOpen] = useState(false);
  // Which nav link is currently active — drives the pink highlight, like the design.
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Left (mobile): hamburger — hidden on desktop */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1.5" />
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1.5" />
          <span className="block w-5 h-0.5 bg-neutral-900" />
        </button>

        {/* Brand logo + name: "DS" gradient badge, "Dev" in black, "Stack" in solid pink */}
        <a href="#home" className="flex items-center gap-2 font-extrabold text-lg shrink-0">
          <span className="w-8 h-8 rounded-lg brand-gradient-bg text-white flex items-center justify-center text-sm">
            DS
          </span>
          <span className="text-neutral-900">
            Dev <span className="text-pink-600">Stack</span>
          </span>
        </a>

        {/* Center nav links — desktop only. Active link is pink, rest are muted gray. */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`transition-colors ${
                activeLink === link ? "text-pink-600" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden sm:inline text-sm font-medium text-neutral-600 hover:text-neutral-900">
            Sign In
          </button>
          <button className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`py-2 border-b border-neutral-100 ${
                activeLink === link ? "text-pink-600" : "text-neutral-600"
              }`}
              onClick={() => {
                setActiveLink(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;