const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand block */}
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="w-8 h-8 rounded-lg brand-gradient-bg text-white flex items-center justify-center text-sm">
              DS
            </span>
            <span className="text-neutral-900">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </a>
          <p className="text-sm text-neutral-500 mt-3 max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm font-medium text-neutral-500">
            <a href="#" className="hover:text-neutral-900">GitHub</a>
            <a href="#" className="hover:text-neutral-900">Twitter</a>
            <a href="#" className="hover:text-neutral-900">LinkedIn</a>
          </div>
        </div>

        {/* Link groups */}
        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="font-semibold text-sm mb-3">{group.title}</p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-neutral-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200 py-5 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 max-w-7xl mx-auto text-xs text-neutral-400">
        <span>© {new Date().getFullYear()} Dev Stack. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-700">Privacy</a>
          <a href="#" className="hover:text-neutral-700">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;