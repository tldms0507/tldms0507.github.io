
const PROJECT_IMAGE_FILES = import.meta.glob(
  "../assets/image/project/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);

//파일명을 키로 
const PROJECT_IMAGE_MAP = Object.fromEntries(
  Object.entries(PROJECT_IMAGE_FILES).map(([path, src]) => {
    const key = path.split("/").pop()?.replace(/\.(png|jpe?g|webp|avif)$/i, "");
    return [key, src];
  })
);

const getImage = (key) => PROJECT_IMAGE_MAP[key] ?? "";
const getImagesByPrefix = (prefix) =>
  Object.entries(PROJECT_IMAGE_MAP)
    .filter(([key]) => key.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

export const PROJECTS = [
  {
    id: "tave-homepage",
    title: "IT 연합 동아리 TAVE 공식 홈페이지",
    summary:
      "동아리의 공식 홈페이지를 런칭하고, 서비스와 지원을 통합 관리하는 관리자 페이지를 개발했습니다.",
    tags: ["14인", "FE 팀장", "1년 6개월"],
    thumbnail: getImage("tave_main"),
    detail: {
      overview:
        "사용자 유입 데이터와 이용 패턴을 분석해 메인 정보 구조를 재설계하고, 주요 CTA 배치/콘텐츠 흐름을 개선해 지원 전환율을 높였습니다.",
      images: getImagesByPrefix("tave_"),
      highlights: [
        "지원율 192% 증가",
        "약 500명 이상 사용자 유입",
        "초기 랜딩 이탈 구간 개선",
      ],
    },
  },
  {
    id: "souf-platform",
    title: "대학생–기업 외주 매칭 플랫폼 SOUF",
    summary:
      "기업을 대상으로 합리적인 가격에 대학생들과 외주를 매칭해주는 플랫폼 설계 및 개발했습니다.",
    tags: ["6인", "FE 팀장", "1년 2개월(진행중)"],
    thumbnail: getImage("souf_main"),
    detail: {
      overview:
        "세종대학교 창업지원단 선정 이후 실제 운영 지표를 추적해 인증/온보딩 플로우를 개선했고, 반복적인 UX 개선 사이클을 유지하고 있습니다.",
      images: getImagesByPrefix("souf_"),
      highlights: [
        "로그인 수 300건 이상 증가",
        "이탈률 5% 이하로 개선",
        "데이터 기반 UX 반복 개선",
      ],
    },
  },
  {
    id: "daily-guitar",
    title: "Daily Guitar : 기타 연주 AI 분석 및 MCP 기반 기타 연습 어시스턴트",
    summary:
      "기타 연주 오디오를 분석해 피드백을 제공하는 기타 연습 보조 프로그램을 개발했습니다.",
    tags: ["3인", "팀장", "1년"],
    thumbnail: getImage("daily_main"),
    detail: {
      overview:
        "MCP를 활용해 연주 영상 업로드-분석-피드백 전달 흐름을 설계하고, 학습자가 반복 연습에 활용할 수 있도록 결과 화면을 구성했습니다.",
      images: getImagesByPrefix("daily_"),
      highlights: [
        "영상 분석 기반 피드백 플로우",
        "연습 이력 관리 UX 설계",
        "팀 리드로 기능 우선순위 관리",
      ],
    },
  },
  {
    id: "realtime-notes",
    title: "Realtime Notes",
    summary:
      "입력/저장/동기화를 UX 중심으로 다듬은 메모 앱 예시 프로젝트입니다.",
    tags: ["Performance", "UX"],
    thumbnail: getImage("note_1"),
    detail: {
      overview:
        "실시간 반영 체감을 높이기 위해 입력 지연과 저장 피드백 흐름을 개선하고, 상태 동기화 시의 사용자 혼란을 줄이는 데 집중했습니다.",
      images: getImagesByPrefix("note_"),
      highlights: [
        "입력 지연 체감 개선",
        "저장 피드백 명확화",
        "동기화 상태 표시 개선",
      ],
    },
  },
];

export const PROJECT_CARD_ITEMS = PROJECTS.map((project) => ({
  id: project.id,
  title: project.title,
  desc: project.summary,
  tags: project.tags,
  image: project.thumbnail,
}));

export const PROJECT_DETAIL_MAP = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project.detail])
);
