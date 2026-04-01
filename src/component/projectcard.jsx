export default function ProjectCard({ project, isDark, onClick }) {
  const cardClass = isDark
    ? "cursor-pointer group overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500"
    : "cursor-pointer group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md";

  const titleClass = isDark ? "text-gray-100" : "text-gray-800";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-600";
  const tagClass = isDark
    ? "inline-flex rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-100"
    : "inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700";

  return (
    <button type="button" className={cardClass} onClick={onClick}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="h-auto w-full object-cover"
        />
      ) : (
        <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-500">
          <span className="px-4 text-center text-lg font-bold text-white">{project.title}</span>
        </div>
      )}

      <div className="p-5 text-left">
        <h3 className={`text-xl font-bold ${titleClass}`}>{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>
        <p className={`mt-3 leading-relaxed ${bodyClass}`}>{project.desc}</p>
        
      </div>
    </button>
  );
}
