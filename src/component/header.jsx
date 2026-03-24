import { useState } from "react";

export default function Header({
  isSolid,
  isDark,
  onTop,
  onAbout,
  onSkills,
  onProject,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerBgClass = isSolid
    ? isDark
      ? "bg-gray-800/95 shadow-sm backdrop-blur"
      : "bg-white shadow-sm"
    : "bg-transparent";

  const headerTextClass = isDark
    ? "text-gray-100"
    : isSolid
      ? "text-gray-700"
      : "text-white";

  // 
  const mobileMenuBgClass = isSolid
    ? isDark
      ? "bg-gray-800/95 backdrop-blur shadow-sm"
      : "bg-white shadow-sm"
    : isDark
      ? "bg-gray-900/95 backdrop-blur shadow-sm"
      : "bg-white/95 shadow-sm";

  const closeMenuAnd = (fn) => {
    setMenuOpen(false);
    fn();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-xl transition-colors duration-500 ${headerBgClass}`}
    >
      <div
        className={`text-3xl font-bold transition-colors duration-500 cursor-pointer ${headerTextClass}`}
        onClick={() => closeMenuAnd(onTop)}
      >
        SIEUN's Portfolio
      </div>

      {/* PC buttons */}
      <div className="hidden gap-8 lg:flex">
        <button
          className={`btn ${isDark ? "btn--about-dark" : "btn--about"} lg:w-60`}
          onClick={() => closeMenuAnd(onAbout)}
        >
          <span>About me</span>
        </button>
        <button
          className={`btn ${isDark ? "btn--skills-dark" : "btn--skills"} lg:w-60`}
          onClick={() => closeMenuAnd(onSkills)}
        >
          <span>Skills</span>
        </button>
        <button
          className={`btn ${isDark ? "btn--project-dark" : "btn--project"} lg:w-60`}
          onClick={() => closeMenuAnd(onProject)}
        >
          <span>Project</span>
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className={`lg:hidden rounded-md p-2 transition-colors ${headerTextClass} hover:bg-white/10`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <div className="relative h-5 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden absolute left-0 right-0 top-full z-50 overflow-hidden transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${mobileMenuBgClass} p-4`}>
          <div className="flex flex-col gap-3">
            <button
              className={`btn ${isDark ? "btn--about-dark" : "btn--about"} w-full`}
              onClick={() => closeMenuAnd(onAbout)}
            >
              <span>About me</span>
            </button>
            <button
              className={`btn ${isDark ? "btn--skills-dark" : "btn--skills"} w-full`}
              onClick={() => closeMenuAnd(onSkills)}
            >
              <span>Skills</span>
            </button>
            <button
              className={`btn ${isDark ? "btn--project-dark" : "btn--project"} w-full`}
              onClick={() => closeMenuAnd(onProject)}
            >
              <span>Project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}