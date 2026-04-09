export default function ProjectModal({
  isOpen,
  isDark,
  project,
  detail,
  onClose,
}) {
  if (!isOpen || !project) return null;

  const SKILL_ICON_FILES = import.meta.glob(
    "../assets/image/skillIcons/*.svg",
    { eager: true, import: "default" }
  );

  const SKILL_ICON_MAP = Object.fromEntries(
    Object.entries(SKILL_ICON_FILES).map(([path, src]) => {
      const fileName = path.split("/").pop()?.replace(".svg", "");
      return [fileName, src];
    })
  );

  const getImageBasename = (src) => {
    let last = String(src).split("/").pop() ?? "";
    last = last.split("?")[0].split("#")[0];
    return last.replace(/\.(png|jpe?g|webp|avif)$/i, "");
  };

  // 프로덕션 빌드에서 Vite가 에셋에 콘텐츠 해시를 붙임 
  // imageDescriptions 키는 원본 파일명(tave_main)이므로 해시 접미사를 제거
  const normalizeImageKey = (basename) =>
    String(basename).replace(/-[a-zA-Z0-9_-]+$/, "");

  const getImageKey = (src) => normalizeImageKey(getImageBasename(src));

  const isCardOnlyAsset = (src) => {
    const key = getImageKey(src).toLowerCase();
    return key.endsWith("_logo") || key.endsWith("_thumbnail");
  };

  const sortProjectImages = (images) => {
    return images
      .map((src, idx) => ({ src, idx, key: getImageKey(src) }))
      .sort((a, b) => {
        const aIsMain = a.key.endsWith("_main");
        const bIsMain = b.key.endsWith("_main");
        if (aIsMain && !bIsMain) return -1;
        if (!aIsMain && bIsMain) return 1;

        const aNumMatch = a.key.match(/_(\d+)$/);
        const bNumMatch = b.key.match(/_(\d+)$/);
        const aNum = aNumMatch ? Number(aNumMatch[1]) : null;
        const bNum = bNumMatch ? Number(bNumMatch[1]) : null;

        if (aNum !== null && bNum !== null) return aNum - bNum;
        if (aNum !== null && bNum === null) return -1;
        if (aNum === null && bNum !== null) return 1;
        return a.idx - b.idx;
      })
      .map(({ src }) => src);
  };

  const sortedDetailImages =
    detail?.images?.length ? sortProjectImages(detail.images.filter((src) => !isCardOnlyAsset(src))) : [];

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 p-4 md:p-8" onClick={onClose}>
      <div
        className={`mx-auto max-h-[90vh] w-full max-w-[80%] overflow-y-auto rounded-2xl p-6 md:p-8 ${
          isDark
            ? "border-gray-700 bg-gray-900 text-gray-100"
            : "border-gray-200 bg-white text-gray-800"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold break-keep">{project.title}</h3>
            <h2 className="text-lg font-semibold">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {project.link}
                </a>
              ) : (
                <span className={isDark ? "text-gray-400" : "text-gray-500"}>공개 링크 없음</span>
              )}
            </h2>
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
              isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
          <h4 className="text-lg font-semibold">개요</h4>
          <div>
            <p className={`leading-7 break-keep ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {detail?.background}
            </p>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          <h4 className="text-lg font-semibold">기술 스택</h4>
          {detail?.techStacks?.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.techStacks.map((item, idx) => (
                <div
                  key={`${project.id}-tech-${item.name ?? "stack"}-${idx}`}
                  className={`rounded-xl border p-4 ${
                    isDark ? "border-gray-700 bg-gray-900/30" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon && SKILL_ICON_MAP[item.icon] ? (
                      <img
                        src={SKILL_ICON_MAP[item.icon]}
                        alt={item.name}
                        className="block h-5 w-5 aspect-square object-contain"
                      />
                    ) : null}
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <p className={`mt-2 text-sm leading-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              기술 스택을 추가해보세요.
            </p>
          )}
        </div>
        <div className="space-y-4 mt-4">
          <h4 className="text-lg font-semibold">역할</h4>
          {detail?.roles?.length ? (
            <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {detail.roles.map((role, idx) => (
                <li key={`${project.id}-role-${idx}`} className="leading-relaxed">
                  - {role}
                </li>
              ))}
            </ul>
          ) : (
            <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              역할 정보를 추가해보세요.
            </p>
          )}
        </div>
        
        <div className="space-y-6 mt-4">
        <h4 className="text-lg font-semibold">상세 설명</h4>
          {sortedDetailImages.length ? (
            sortedDetailImages.map((src, idx) => {
              const imageKey = getImageKey(src);
              const isMain = imageKey.endsWith("_main");
              const numMatch = imageKey.match(/_(\d+)$/);
              const num = numMatch ? Number(numMatch[1]) : null;
              const label = isMain ? "메인 화면" : num !== null ? `${num}번째` : `${idx + 1}번째`;

              return (
                <div
                  key={`${project.id}-image-${imageKey}-${idx}`}
                  className="flex flex-col gap-4 md:flex-row md:items-start"
                >
                  <img
                    src={src}
                    alt={`${project.title} detail ${label}`}
                    className={`h-auto w-full rounded-xl object-cover md:w-[48%] ${
                      isDark ? "border border-gray-700" : "border border-gray-200"
                    }`}
                  />
                    <div
                      className={`mt-2 text-sm leading-6 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {(() => {
                        const desc = detail?.imageDescriptions?.[imageKey];
                        if (Array.isArray(desc) && desc.length) {
                          return (
                            <div className="flex flex-col gap-2">
                              {desc.map((line, i) => (
                                <p key={`${project.id}-img-desc-${imageKey}-${i}`} className="text-base break-keep leading-relaxed">
                                  {line}
                                </p>
                              ))}
                            </div>
                          );
                        }

                        return (
                          <span>
                            {desc ?? ""}
                          </span>
                        );
                      })()}
                    </div>
                  </div>

              );
            })
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

        <div className="my-6 space-y-4">
          <h4 className="text-lg font-semibold">성과</h4>
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
