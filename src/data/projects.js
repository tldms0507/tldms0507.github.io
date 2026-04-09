
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

const isCardOnlyImageKey = (key) =>
  /_logo$/i.test(key) || /_thumbnail$/i.test(key);

const getImagesByPrefix = (prefix) =>
  Object.entries(PROJECT_IMAGE_MAP)
    .filter(([key]) => key.startsWith(prefix))
    .filter(([key]) => !isCardOnlyImageKey(key))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

export const PROJECTS = [
  {
    id: "tave-homepage",
    title: "IT 연합 동아리 TAVE 공식 홈페이지",
    summary:
      "동아리의 공식 홈페이지를 런칭하고, 서비스와 지원을 통합 관리하는 관리자 페이지를 개발했습니다.",
    tags: ["14인", "FE 팀장", "1년 6개월"],
    thumbnail: getImage("tave_thumbnail"),
    logo: getImage("tave_logo"),
    cardGradient:
      "from-[#111111] to-[#4F68AF]",
    link: "https://www.tave-wave.com",
    detail: {
      background: "공식 홈페이지 부재로 인해 동아리 정보에 대한 접근성이 낮았고, 타 IT 연합 동아리 대비 경쟁력 확보에 한계가 있어 공식 홈페이지 개발을 시작했습니다. 이후 동아리 규모가 확장됨에 따라 구글 폼 기반의 지원 방식에 한계를 느꼈고, 이를 개선하기 위해 전용 지원 페이지 개발로 프로젝트를 확장했습니다.",

      images: getImagesByPrefix("tave_"),
      techStacks: [
        { name: "React", icon: "react", reason: "컴포넌트 기반 UI 재사용으로 일관된 화면 구성을 빠르게 구현하기 위해 사용" },
        { name: "TypeScript", icon: "typescript", reason: "타입 안정성을 확보하고 런타임 에러를 방지하기 위해 사용" },
        { name: "React Query", icon: "reactQuery", reason: "대량의 스터디, 프로젝트 데이터를 효율적으로 조회하기 위해 사용" },
        { name: "AWS S3, Route 53, CloudFront", icon: "aws", reason: "지원 시즌 등 트래픽이 집중되는 상황과 대용량 이미지 리소스를 고려해, 동시 접속 및 콘텐츠 배포에 안정적인 S3 + CloudFront를 선택해 배포" },
        { name: "Tailwind CSS", icon: "tailwind", reason: "Tailwind CSS는 유틸리티 클래스 기반으로 빠른 페이지 구현이 가능해 많은 작업이 필요했던 프로젝트에 적합하다고 생각해 선택" },
        { name: "notion", icon: "notion", reason: "많은 인원이 사용하는 문서 관리 도구로, 문서 공유 및 협업이 용이하다고 판단해 선택" },
      ],
      roles: [
        "주차별 개발 스프린트 운영으로 파트 내 진행 상황 조율",
        "동아리 소개 페이지 스크롤 애니메이션, 프로젝트 페이지 등 UI 개발",
        "정규 세션, 후기, 이력 API 연동",
        "동아리 지원 관리자 페이지 전체 API 연동",
        "지원 관리자 페이지 서류 질문, 서류 평가 리팩토링"
      ],
      imageDescriptions: {
        tave_thumbnail: ["사용자가 여러 섹션에서 상세 정보를 확인하기 쉽도록 Tailwind css를 사용해 섹션별 스크롤 애니메이션 구현", 
          "미디어 쿼리를 통한 반응형 디자인을 구현해 PC와 모바일에서 안정적으로 화면을 구성", 
          "MS Clarity 기반 Dead Click 탐지 → 제휴사 로고에 링크 연결 → Dead Click 발생 세션 77% 감소",
        ],
        tave_1: ["프로젝트 클릭 시 정보 부족 사용자 피드백 수용 → 프로젝트 카드 컴포넌트 대표 이미지 추가 제안 및 구현 → 프로젝트 클릭률 00% 증가", 
          "MS Clarity 상위 페이지 분석으로 activity 페이지 높은 관심 확인 → 정규 세션 소개에 실제 행사 사진 추가로 콘텐츠 생동감 강화 → 스크롤 깊이  약 8% 증가, Engagement time 약 2배 이상 증가"
        ],
        tave_2: ["동아리 소개 페이지 및 지원 페이지를 편집하는 관리자 페이지 개발", 
          "정규 세션, 후기, 이력 API 연동 및 지원 관리자 페이지 전체 API 연동을 담당했으며, 실 서비스 배포 이후 다수의 팀원이 이탈한 상황에서도 에러 처리 및 리팩토링을 주도하여 프로젝트를 완수함"
        ],
        tave_4: ["지원 관리자 페이지의 대시보드 기능은 다양한 차트 타입을 기본 제공하며, 대시보드 기능을 빠르게 구현하는 데 적합하다고 판단해 chart.js 라이브러리를 사용", 
          "TypeScript를 통한 서류 질문·답변 데이터 타입 명세화 → 공통·분야별 질문의 글자 수 제한·필수 여부 등 세부 속성 타입 정의 → 타입 안정성 확보 및 런타임 에러 방지", 
          "120명 서류 합격자 면접 가능 시간 수동 확인 및 4일치 시간표 직접 제작 → Hard/Soft Rule 기반 면접 시간표 자동 생성 프로그램 도입 → 시간표 제작 시간을 3시간에서 15분으로 단축",
          "실 서비스 운영 중 서류 평가 불편함 인지 → 평가 시 필터링·페이지 유지 및 지원자별 코멘트 기능(100자) 추가 → 평가 효율 및 의견 공유 방식 개선"
        ],
      },
      highlights: [
        "공식 홈페이지 런칭 후 지원율 192% 증가",
        "공식 홈페이지 런칭 후 약 500명 이상 사용자 유입",
        "동아리 SNS 계정 팔로워 약 340명 증가 → 동아리 성장 목적 달성",
        "지원 페이지 런칭 후 동아리 운영진의 평가 효율성 확보",
      ],
    },
  },
  {
    id: "souf-platform",
    title: "대학생–기업 외주 매칭 플랫폼 SOUF",
    summary:
      "기업을 대상으로 합리적인 가격에 대학생들과 외주를 매칭해주는 플랫폼 설계 및 개발했습니다.",
    tags: ["6인", "FE 팀장", "1년 2개월(진행중)"],
    thumbnail: getImage("souf_thumbnail"),
    logo: getImage("souf_logo"),
    cardGradient:
      "from-[#CDDEFF] via-[#DAE6FF] to-[#FBE59A]",
    link: "https://www.souf.co.kr",
    detail: {
      overview:
        "세종대학교 창업지원단 선정 이후 실제 운영 지표를 추적해 인증/온보딩 플로우를 개선했고, 반복적인 UX 개선 사이클을 유지하고 있습니다.",
      images: getImagesByPrefix("souf_"),
      techStacks: [
        { name: "React", icon: "react", reason: "상태 변화에 따른 화면 전환을 안정적으로 처리하기 위해 사용했습니다." },
        { name: "AWS S3,CloudFront", icon: "aws", reason: "대용량의 피드 이미지, 동영상 등 리소스를 효율적으로 관리하기 위해 사용했습니다." },
        { name: "Tailwind CSS", icon: "tailwind", reason: "재사용되는 스타일 코드를 효율적으로 관리하기 위해 사용했습니다." },
        { name: "React Query", icon: "reactQuery", reason: "데이터를 필터링, 정렬, 페이징 등 다양한 방식으로 조회하는데 효율성을 높이기 위해 사용했습니다." },
        { name: "Zustand", icon: "zustand", reason: "역할(기업, 대학생, 동아리) 구분에 따른 서비스 이용 권한 관리를 위해 전역 상태를 설정하는데에 사용했습니다." },
        { name: "Jira", icon: "jira", reason: "스프린트를 기반으로 협업을 효율적으로 관리하고, 프로젝트 진행 상황을 시각화하기 위해 사용했습니다." },
        { name: "Confluence", icon: "jira", reason: "마케팅, 개발, 디자인 등 다양한 분야의 문서를 공유하고 협업하기 위해 사용했습니다." },
      ],
      roles: [
        "프론트엔드 리드 개발(80%)",
        "메인 페이지 캐러셀 슬라이드 등 인터랙티브 UI 개발",
        "관리자 페이지 전체 API 연동",
        "사용자 유입을 위한 SNS 홍보 활동",
        "Google Analyitics를 활용한 사용자 행동 지표 추적 및 분석",
      ],
      imageDescriptions: {
        souf_thumbnail: ["대학생–기업 외주 매칭 플랫폼 SOUF라는 서비스의 가치를 빠르게 파악할 수 있게 외주 매칭 서비스 소개 문구와 이미지를 작업하여 UI 개선을 거듭함"],
        souf_2: ["인증/초기 설정 단계로, 사용자가 막히지 않도록 문구/흐름을 정리한 화면입니다."],
        souf_3: ["매칭 진행 흐름에서 사용자 행동을 자연스럽게 다음 단계로 연결하도록 구성했습니다."],
        souf_4: ["운영 지표 확인 및 반복 개선이 가능한 관리 화면(또는 상세 화면)입니다."],
      },
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
    thumbnail: getImage("daily_thumbnail"),
    logo: getImage("daily_logo"),
    cardGradient:
      "from-[#84B3F5] to-[#EFF5FE]",
    link: "https://github.com/Con-graduation/Capstone_FE",
    detail: {
      overview:
        "MCP를 활용해 연주 영상 업로드-분석-피드백 전달 흐름을 설계하고, 학습자가 반복 연습에 활용할 수 있도록 결과 화면을 구성했습니다.",
      images: getImagesByPrefix("daily_"),
      techStacks: [
        { name: "React", icon: "react", reason: "업로드/분석/피드백처럼 단계형 흐름을 컴포넌트로 명확히 분리하기 위해 사용했습니다." },
        { name: "MCP(연동)", reason: "분석 결과를 UI로 연결하는 파이프라인을 구성하기 위해 사용했습니다." },
        { name: "Tailwind CSS", icon: "tailwind", reason: "단계별 화면과 피드백 UI를 빠르게 정렬/수정하기 위해 활용했습니다." },
        { name: "상태 관리(컴포넌트/훅)", reason: "진행 상태와 결과 상태를 일관되게 표현하기 위해 훅 기반 상태를 사용했습니다." },
      ],
      imageDescriptions: {
        daily_thumbnail: ["학습자의 연습 시작/업로드를 직관적으로 유도하는 메인 화면입니다."],
        daily_1: ["업로드/분석 단계로, 상태 표시와 지연 체감 최소화를 목표로 구성했습니다."],
        daily_2: ["분석 결과 요약 화면으로, 사용자가 바로 이해하고 다음 행동으로 넘어가도록 구성했습니다."],
        daily_3: ["피드백 상세 단계로, 반복 연습을 돕는 구조화된 안내를 제공하는 화면입니다."],
        daily_4: ["연습 이력/관리 화면으로, 학습 맥락을 유지하면서 목표에 맞게 개선할 수 있도록 했습니다."],
      },
      highlights: [
        "영상 분석 기반 피드백 플로우",
        "연습 이력 관리 UX 설계",
        "팀 리드로 기능 우선순위 관리",
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
  logo: project.logo,
  link: project.link,
  cardGradient:
    project.cardGradient ??
    "from-slate-700 via-slate-600 to-slate-800",
}));

export const PROJECT_DETAIL_MAP = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project.detail])
);
