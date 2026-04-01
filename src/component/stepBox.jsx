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
        "프로토타입, 이벤트 루프 등 코어 개념을 깊이 이해하고 있으며, 이를 바탕으로 비동기 흐름과 메모리 관리를 고려한 코드를 작성합니다.",
        "RMS 알고리즘 구현 등 수학적 연산을 JavaScript로 직접 설계한 경험이 있습니다.",
      ],
    },
    {
      icon: "typescript",
      name: "TypeScript",
      project: [
        "TAVE 통합 관리 플랫폼에서 TypeScript를 적용해 컴포넌트 Props, API 응답 타입, 전역 상태를 명시적으로 정의하며 타입 안정성이 높은 애플리케이션을 구축한 경험이 있습니다.",
      ],
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
      project: [
        "렌더링 최적화(useMemo, useCallback), 커스텀 훅 설계 등 React 핵심 원리를 이해하고 실무에 적용할 수 있습니다.",
      ],
    },
    {
      icon: "tailwind",
      name: "Tailwind CSS",
      project: [
        "유틸리티 클래스 기반으로 반응형 레이아웃과 스크롤 인터랙션 애니메이션을 구현하며 여러 프로젝트에서 메인 스타일링 도구로 사용했습니다.",
      ],
    },
    {
      icon: "reactQuery",
      name: "React Query",
      project: [
        "서버 상태와 클라이언트 상태를 분리해 캐싱, 로딩/에러 상태를 선언적으로 관리한 경험이 있습니다.",
      ],
    },
    {
      icon: "zustand",
      name: "Zustand",
      project: [
        "인증 상태(로그인 유저 정보, 토큰 등)와 UI 상태(모달, 필터 등)를 별도 스토어로 분리 설게한 경험이 있습니다.",
        "React Query로 서버 상태를 분리한 뒤 Zustand는 순수 클라이언트 상태만 담당하도록 역할을 구분해 상태 관리 구조를 설계했습니다.",
      ],
    },
    {
      icon: "emotion",
      name: "Emotion",
      project: [
        "캡스톤디자인 프로젝트에서 CSS-in-JS 방식으로 사용한 경험이 있습니다.",
      ],
    },
  ],
  ETC: [
    {
      icon: "aws",
      name: "AWS(S3, CloudFront)",
      project: [
        "S3에 정적 빌드 파일을 업로드하고 CloudFront를 연결해 CDN 기반 배포 환경을 구성한 경험이 있습니다.",
        "GitHub Actions CI/CD 파이프라인과 연동해 main 브랜치 푸시 시 자동 빌드·배포되는 환경을 구축했습니다.",
      ],
    },
    {
      icon: "github",
      name: "GitHub",
      project: [
        "브랜치 전략(feature/develop/main)을 팀 내에 도입해 코드 충돌을 최소화하고 협업 흐름을 관리했습니다.",
        "GitHub Actions로 빌드·테스트·배포 자동화 파이프라인을 구축해 반복 배포 작업을 자동화했습니다.",
      ],
    },
    {
      icon: "git",
      name: "Git",
      project: [
        "커밋 컨벤션을 정의하고 PR 기반 코드 리뷰 프로세스를 운영해 팀 코드 품질을 관리합니다.",
      ],
    },
    {
      icon: "figma",
      name: "Figma",
      project: [
        "간단한 와이어프레임 및 UI를 제작할 수 있습니다.",
        "협업 디자인 툴로 대부분의 프로젝트에서 디자인 작업 시 사용했습니다."
      ],
    },
    {
      icon: "slack",
      name: "Slack",
      project: [
        "Incoming Webhook을 연동해 신규 가입 등 주요 사용자 활동을 실시간 알림으로 수신한 경험이 있습니다.",
      ],
    },
    {
      icon: "notion",
      name: "Notion",
      project: [
        "프로젝트 기획 문서, 회의록, 개발 가이드 등 팀 전체 문서를 체계적으로 관리하기 위해 사용했습니다.",
        "팀에 맞는 템플릿을 구축하고, 가독성이 좋은 문서를 작성할 수 있습니다."
      ],
    },
    {
      icon: "jira",
      name: "Jira",
      project: [
        "스프린트 단위로 이슈를 생성·할당하고 진행 상황을 트래킹해 애자일 기반 협업 프로세스를 운영한 경험이 있습니다.",
      ],
    },
  ],
};

export default function StepBox({ activeTab, isDark }) {
  const items = STEP_DETAIL[activeTab] ?? [];
  const titleClass = isDark ? "text-gray-100" : "text-gray-800";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-600";
  const cardClass = isDark
    ? "p-3 rounded-lg bg-gray-800/90 transition-colors duration-500"
    : "p-3 rounded-lg bg-white transition-colors duration-500";
  const dividerClass = isDark ? "border-gray-700" : "border-gray-200";
  const iconBoxClass = isDark
    ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-600"
    : "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50";

  return (
    <div className="mt-5">
      <div className="space-y-4">
        {items.map((item) => (
          <article key={`${activeTab}-${item.name}`} className={cardClass}>
            <div className="flex items-start gap-4">
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