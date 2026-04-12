
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
    linkCaption: "실제 운영 중인 동아리 공식 홈페이지입니다. 지원 페이지는 지원 기간에만 공개되고 있습니다.",
    detail: {
      background:
      "동아리 브랜딩을 정립하고 스터디·프로젝트 등 활동을 아카이브해 외부 지원자가 동아리를 제대로 알고 지원할 수 있는 정보 제공 역할과 외부 제휴사에 동아리를 공식적으로 소개할 수 있는 창구를 마련하기 위해 프로젝트 시작\n" +
        "운영진으로 활동하며, 지원 규모가 커질수록 구글 폼 기반 지원이 지원자와 운영진 양쪽 모두에게 한계라고 판단함\n" +
        "지원자는 작성 중 임시저장이나 제출 후 답변 재확인이 어려웠고, 운영진은 수백 건에 달하는 지원 데이터를 스프레드시트에서 일일이 필터링·관리해야 했음\n"+
        "이를 해결하기 위해 공식 홈페이지 개발과 함께 전용 지원 페이지 개발로 프로젝트를 확장",
        

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
        tave_0: ["사용자가 여러 섹션에서 상세 정보를 확인하기 쉽도록 Tailwind css를 사용해 섹션별 스크롤 애니메이션 구현", 
          "미디어 쿼리를 통한 반응형 디자인을 구현해 PC와 모바일에서 안정적으로 화면을 구성", 
          "MS Clarity 기반 Dead Click 탐지 → 제휴사 로고에 링크 연결 → Dead Click 발생 세션 77% 감소",
        ],
        tave_1: ["프로젝트 클릭 시 정보 부족 사용자 피드백 수용 → 프로젝트 카드 컴포넌트 대표 이미지 추가 제안 및 구현", 
          "MS Clarity 상위 페이지 분석으로 activity 페이지 높은 관심 확인 → 정규 세션 소개에 실제 행사 사진 추가로 콘텐츠 생동감 강화 → 스크롤 깊이  약 8% 증가, Engagement time 약 2배 이상 증가"
        ],
        tave_2: ["동아리 소개 페이지 및 지원 페이지를 편집하는 관리자 페이지 개발", 
          "정규 세션, 후기, 이력 API 연동 및 지원 관리자 페이지 전체 API 연동을 담당",
          "다수의 스터디, 프로젝트, 후기 등 텍스트와 이미지 데이터를 처리하기 위해 React Query를 사용",
          "운영진 직급에 따른 권한 관리를 위해 사용자 정보 및 권한 저장 장소로 Zustand 사용",
        ],
        tave_4: ["지원 관리자 페이지의 대시보드 기능은 다양한 차트 타입을 기본 제공하며, 대시보드 기능을 빠르게 구현하는 데 적합하다고 판단해 chart.js 라이브러리를 사용", 
          "TypeScript를 통한 서류 질문·답변 데이터 타입 명세화 → 공통·분야별 질문의 글자 수 제한·필수 여부 등 세부 속성 타입 정의 → 타입 안정성 확보 및 런타임 에러 방지", 
          "120명 서류 합격자 면접 가능 시간 수동 확인 및 4일치 시간표 직접 제작 → Hard/Soft Rule 기반 면접 시간표 자동 생성 프로그램 도입 → 시간표 제작 시간을 3시간에서 10분으로 단축",
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
    linkCaption: "현재는 서비스 운영을 잠시 중지하고 있습니다. 4-5월 내에 재오픈 예정입니다.",
    detail: {
      background:
        "대학생은 실무·포트폴리오 부족과 취업 경쟁 속에서 기회를 찾고, 기업은 합리적인 예산으로 역량 있는 인재를 구하기 어려운 구조적 미스매치 존재\n" +
        "기존 연결은 교수 추천·학과 커뮤니티 등 비공식 채널에 의존해 시간이 길고 신뢰 확보가 어렵고, 기존의 일반 프리랜서 플랫폼은 대학생 특화와 작업물 공유·성장을 지원하기 어려움\n" +
        "이에 대학생과 기업을 직접 연결하고, SNS형 포트폴리오 공유와 AI 매칭으로 문제를 해결하는 플랫폼을 개발하고자 함.",
      images: getImagesByPrefix("souf_"),
      techStacks: [
        { name: "React", icon: "react", reason: "상태 변화에 따른 화면 전환을 안정적으로 처리하기 위해 사용" },
        { name: "AWS S3,CloudFront", icon: "aws", reason: "대용량의 피드 이미지, 동영상 등 리소스를 효율적으로 관리하기 위해 사용" },
        { name: "Tailwind CSS", icon: "tailwind", reason: "재사용되는 스타일 코드를 효율적으로 관리하기 위해 사용" },
        { name: "React Query", icon: "reactQuery", reason: "데이터를 필터링, 정렬, 페이징 등 다양한 방식으로 조회하는데 효율성을 높이기 위해 사용" },
        { name: "Zustand", icon: "zustand", reason: "역할(기업, 대학생, 동아리) 구분에 따른 서비스 이용 권한 관리를 위해 전역 상태를 설정하는데에 사용" },
        { name: "Jira", icon: "jira", reason: "스프린트를 기반으로 협업을 효율적으로 관리하고, 프로젝트 진행 상황을 시각화하기 위해 사용" },
        { name: "Confluence", icon: "jira", reason: "마케팅, 개발, 디자인 등 다양한 분야의 문서를 공유하고 협업하기 위해 사용" },
      ],
      roles: [
        "프론트엔드 리드 개발(80%)",
        "메인 페이지 캐러셀 슬라이드 등 인터랙티브 UI 개발",
        "관리자 페이지 전체 API 연동",
        "사용자 유입을 위한 SNS 홍보 활동",
        "Google Analyitics를 활용한 사용자 행동 지표 추적 및 분석",
      ],
      imageDescriptions: {
        souf_0: ["대학생–기업 외주 매칭 플랫폼 SOUF의 기능을 한 눈에 파악할 수 있도록 외주 찾기, 대학생 피드보기 버튼을 헤더에 두고, 인기 피드나 외주 게시글을 바로 확인할 수 있도록 메인 화면의 UI 구성", "홈 화면 진입 후 서비스 가치를 파악하기 전에 사용자가 이탈하는 문제를 해결하기 위해 랜딩 화면의 콘텐츠 구조를 개편해 핵심 정보와 서비스 가치, 가이드라인을 노출하도록 UI 수정"],
        souf_2: ["기업/대학생/동아리 계정으로 회원 역할을 구분하고, 각 역할에 맞는 회원가입 폼을 별도로 분리 설계", "각 역할에 따라 필요한 정보를 3단계로 나누어 받고, 소셜로그인을 도입해 사용자의 회원가입 입력 부담을 최소화"],
        souf_3: ["대학생 계정 인증 절차를 거쳐 피드 생성 가능", "SOUF의 피드 페이지를 바로 포트폴리오로 사용할 수 있도록 구성하는 것을 목표함", "피드 게시글 마다 좋아요, 댓글 등을 구현해 사용자 상호작용을 증가시킴", ""],
        souf_4: ["기업 계정 인증 절차를 거쳐 외주 공고 생성 가능","외주 카테고리, 희망 외주 금액, 외주 작업 기간, 상세 이미지 등을 함께 업로드해 대학생들이 외주 작업에 대한 상세한 정보를 바로 얻을 수 있게 함", "외주 공고에 지원한 학생들의 프로필(포트폴리오 형태 피드 목록)을 확인하여 기업 측에서 채팅을 생성할 수 있음"],
      },
      highlights: [
        "세종대학교 창업지원단 선정",
        "자체 이벤트 및 SNS 홍보로 이벤트 기간 동안 로그인 수 300건 이상 증가",
        "GA 경로 탐색으로 이탈률 31% → 5% 이하로 개선",

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
    linkCaption: "캡스톤 프로젝트 프론트엔드 코드 저장소입니다.",
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
        daily_0: ["학습자의 연습 시작/업로드를 직관적으로 유도하는 메인 화면입니다."],
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
  linkCaption: project.linkCaption,
  cardGradient:
    project.cardGradient ??
    "from-slate-700 via-slate-600 to-slate-800",
}));

export const PROJECT_DETAIL_MAP = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project.detail])
);
