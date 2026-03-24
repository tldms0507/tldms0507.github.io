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

const STEP_DETAIL = {
  Language: [
    {
      icon: "javascript",
      name: "JavaScript",
      project: [
        "프로젝트별 상세 경험을 여러 줄로 작성할 수 있습니다.",
        "예) 인터랙션 구현, API 응답 처리, 폼 검증 로직 개선",
      ],
    },
    {
      icon: "typescript",
      name: "TypeScript",
      project: "",
    },
    {
        icon: "html",
        name: "HTML5",
        project: ["다양한 meta 태그, 검색엔진 인증 태그를 활용해 검색 엔진 최적화(SEO)와 SNS 공유 미리보기 기능을 구현할 수 있습니다.", "Google Tag Manager를 사용해 사용자 행동 데이터 수집 환경을 구현해 서비스 이용 데이터를 분석할 수 있도록 설계한 경험이 있습니다."],
      },
      {
        icon: "css3",
        name: "CSS3",
        project: ["Flexbox, Grid, 반응형 미디어쿼리를 활용해 다양한 디바이스의 UI를 구현할 수 있습니다.", "스크롤 기반 인터랙션을 구현해 섹션 단위 화면 전환 애니메이션을 제작한 경험이 있습니다."],
      },
     
   

  ],
  Frontend: [
    {
      icon: "react",
      name: "React",
      project: "개인 포트폴리오 SPA 구조 및 컴포넌트 설계",
    },
    {
      icon: "tailwind",
      name: "Tailwind CSS",
      project: "반응형 UI와 다크모드 스타일 시스템 구성",
    },
    {
      icon: "reactQuery",
      name: "React Query",
      project: "서버 상태 캐싱과 비동기 데이터 흐름 관리",
    },
    {
        icon: "zustand",
        name: "Zustand",
        project: "전역으로 상태를 관리하기 위해 사용합니다.",
      },
      {
        icon: "emotion",
        name: "Emotion",
        project: "컴포넌트 단위 스타일링과 테마 확장 적용",
      },
  ],
  ETC: [
   
    
    { icon: "aws",
        name: "AWS(S3,cloudFront)",
        project: "AWS의 S3와 cloudFront를 사용하여 프로젝트를 배포하고, 관리한 경험이 있습니다.",
    },
    { icon: "github",
        name: "GitHub",
        project: ["GitHub을 사용하여 코드를 관리합니다.", "Github Action으로 배포 자동화를 구축하였습니다."],
    }, 
    { icon: "git",
        name: "git",
        project: "git을 사용하여 협업합니다.",
    },
    { icon: "figma",
        name: "Figma",
        project: "간단한 와이어프레임, UI 디자인, 프로토타입 작업을 할 수 있습니다.",
    },
    { icon: "slack",
        name: "Slack",
        project: "전역 상태 분리와 가벼운 상태 관리 구성",
    },
    { icon: "notion",
        name: "Notion",
        project: "",
    },
    { icon: "jira",
        name: "Jira",
        project: "이슈 관리 및 프로젝트 흐름 관리, 회의록 작성을 위해 사용한 경험이 있습니다.",
    },
  ],

};

export default function StepBox({ activeTab, isDark }) {
  const items = STEP_DETAIL[activeTab] ?? [];
  const titleClass = isDark ? "text-gray-100" : "text-gray-800";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-600";
  const cardClass = isDark
    ? "bg-gray-800/90 transition-colors duration-500"
    : "bg-white transition-colors duration-500";
  const dividerClass = isDark ? "border-gray-700" : "border-gray-200";
  const iconBoxClass = isDark
    ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-600"
    : "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50";

  return (
    <div className="mt-5">
      <div className="space-y-4">
        {items.map((item) => (
          <article key={`${activeTab}-${item.name}`} className={cardClass}>
            <div className="flex items-start gap-4 py-4">
              <div className={iconBoxClass}>
                <img
                  src={SKILL_ICON_MAP[item.icon]}
                  alt={item.name}
                  className="block h-6 w-6 aspect-square object-contain object-center"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className={`text-lg font-bold ${titleClass}`}>{item.name}</h4>
                </div>
                <div className={`my-1 ${dividerClass}`} />
                <div className={`text-sm leading-7 break-keep ${bodyClass}`}>
                  {(Array.isArray(item.project) ? item.project : [item.project]).map((line, idx) => (
                    <p key={`${item.name}-${idx}`}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}