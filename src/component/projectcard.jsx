export default function ProjectCard({ project, isDark, onClick }) {
  const gradientStops = project.cardGradient ?? "from-slate-700 via-slate-600 to-slate-800";
  const isSouf = project.id === "souf-platform";

  const ringClass = isDark
    ? "ring-1 ring-white/10 hover:ring-white/20"
    : "ring-1 ring-black/5 shadow-md hover:shadow-lg hover:ring-black/10";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl py-6 bg-gradient-to-br ${gradientStops} text-left transition-all duration-300 hover:-translate-y-0.5 ${ringClass}`}
    >
      <div className="flex justify-between min-h-0 px-2 md:px-12 flex-col sm:min-h-[240px] sm:flex-row sm:items-stretch">
        <div className="flex min-w-0 w-full flex-col gap-10 justify-center  gap-4 px-6 py-6 sm:px-8 sm:py-8">
          {project.logo ? (
            <img
              src={project.logo}
              alt={`${project.title} 로고`}
              className="w-64 h-auto object-contain object-left"
            />
          ) : null}
          <div className="flex flex-col gap-2 items-end text-right">
          <h3
            className={`text-xl font-bold leading-snug tracking-tight break-keep sm:text-2xl ${
              isSouf ? "text-slate-700" : "text-white"
            }`}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={
                  isSouf
                    ? "inline-flex rounded-full border border-slate-700/10 bg-slate-900/10 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-sm sm:text-sm"
                    : "inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className={`line-clamp-4 text-sm leading-relaxed break-keep sm:line-clamp-3 sm:text-[15px] ${
              isSouf ? "text-slate-700" : "text-white/85"
            }`}
          >
            {project.desc}
          </p>
          </div>
        </div>

        <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden sm:w-[42%] sm:max-w-xl sm:self-stretch">
         
          <div className="flex min-h-[500px] h-80 w-full max-w-full items-center justify-center px-3 py-12 sm:h-[240px] sm:px-4 sm:py-4">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.10]"
              />
            ) : (
              <div className="flex h-full min-h-[160px] w-full items-center justify-center rounded-lg bg-black/20 px-4">
                <span
                  className={`text-center text-sm font-semibold ${isSouf ? "text-slate-800" : "text-white/90"}`}
                >
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
