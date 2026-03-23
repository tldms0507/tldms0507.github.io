export default function Header({ isSolid, isDark, onTop, onAbout, onSkills, onProject }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-xl transition-colors duration-500 ${
        isSolid
          ? isDark
            ? "bg-gray-800/95 shadow-sm backdrop-blur"
            : "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className={`text-3xl font-bold transition-colors duration-500 cursor-pointer  ${
          isDark ? "text-gray-100" : isSolid ? "text-gray-700" : "text-white"
        }`}
        onClick={onTop}
      >
        SIEUN's Portfolio
      </div>
      <div className="flex gap-8">
        <button className="btn btn--about w-60" onClick={onAbout}>
          <span>About me</span>
        </button>
        <button className="btn btn--skills w-60" onClick={onSkills}>
          <span>Skills</span>
        </button>
        <button className="btn btn--project w-60" onClick={onProject}>
          <span>Project</span>
        </button>
      </div>
    </header>
  );
}