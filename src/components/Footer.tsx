import React from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/razhaaf" },
  { label: "Github", href: "https://github.com/firazhafiz" },
  { label: "LinkedIn", href: "https://linkedin.com/in/firazhafiz" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 pt-12 pb-6 px-4 bg-black-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-stretch gap-8">
        {/* Profile */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-2xl font-bold text-white mb-2">
            Firaz Fulvian Hafiz
          </h3>
          <p className="text-neutral-300 text-sm max-w-xs">
            Fullstack Developer passionate about building impactful digital
            products and creative solutions. Always learning, always growing.
          </p>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-lg font-bold text-white mb-3 tracking-wide">
            Links
          </h4>
          <ul className="text-neutral-300 text-sm space-y-2">
            {LINKS.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  className="hover:text-blue-500 transition text-white font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Socials */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-lg font-bold text-white mb-3 tracking-wide">
            Social
          </h4>
          <ul className="text-neutral-300 text-sm space-y-2">
            {SOCIALS.map((s, i) => (
              <li key={i}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition text-white font-medium"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-10 pt-6 flex items-center justify-center text-neutral-400 text-xs">
        <span className="text-center">
          © {new Date().getFullYear()} Firaz Fulvian Hafiz. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
