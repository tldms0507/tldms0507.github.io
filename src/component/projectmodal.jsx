export default function ProjectModal({
  isOpen,
  isDark,
  project,
  detail,
  onClose,
}) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 p-4 md:p-8" onClick={onClose}>
      <div
        className={`mx-auto max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl p-6 md:p-8 ${
          isDark
            ? "border-gray-700 bg-gray-900 text-gray-100"
            : "border-gray-200 bg-white text-gray-800"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold break-keep">{project.title}</h3>
            <p
              className={`mt-2 leading-relaxed break-keep ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.desc}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`shrink-0 rounded-md px-3 py-1.5 text-xl font-bold transition-colors ${
              isDark ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-label="Close modal"
          >
            x
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex rounded-full px-3 py-1 text-sm ${
                isDark ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {detail?.images?.length ? (
            detail.images.map((src, idx) => (
              <img
                key={`${project.id}-image-${idx}`}
                src={src}
                alt={`${project.title} detail ${idx + 1}`}
                className={`h-auto w-full rounded-xl object-cover ${
                  isDark ? "border border-gray-700" : "border border-gray-200"
                }`}
              />
            ))
          ) : (
            <div
              className={`flex h-56 items-center justify-center rounded-xl border ${
                isDark
                  ? "border-gray-700 bg-gray-800 text-gray-400"
                  : "border-gray-200 bg-gray-50 text-gray-500"
              }`}
            >
              상세 이미지가 여기에 들어갑니다.
            </div>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold">상세 설명</h4>
          <p className={`leading-7 break-keep ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {detail?.overview}
          </p>

          {detail?.highlights?.length ? (
            <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {detail.highlights.map((item, idx) => (
                <li key={`${project.id}-highlight-${idx}`} className="leading-relaxed">
                  - {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
