
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
    cardGradient: "from-[#111111] to-[#4F68AF]",
    link: "https://www.tave-wave.com",
    linkCaption: "실제 운영 중인 동아리 공식 홈페이지입니다. 지원 페이지는 지원 기간에만 공개되고 있습니다.",
    detail: {
      background:
        "동아리 운영진으로 활동하며 두 가지 문제를 직접 경험했습니다.\n\n" +
        "첫째, 외부 지원자와 제휴사가 동아리 정보를 얻을 수 있는 수단이 SNS와 블로그뿐이었습니다. 행사 정보, 프로젝트 결과물 등 핵심 정보를 체계적으로 전달하기 어려운 구조였고, 이것이 동아리의 신뢰도와 경쟁력을 낮추고 있다고 판단했습니다.\n\n" +
        "둘째, 지원 규모가 커질수록 구글폼 기반 지원 방식이 지원자와 운영진 양쪽 모두에게 한계였습니다. 지원자는 작성 중 임시저장이나 제출 후 답변 재확인이 어려웠고, 운영진은 수백 건의 지원 데이터를 스프레드시트에서 일일이 필터링·관리해야 했습니다.\n\n" +
        "이를 해결하기 위해 공식 홈페이지 개발과 함께 전용 지원·관리자 페이지 개발로 프로젝트를 확장했습니다.",

      images: getImagesByPrefix("tave_"),
      techStacks: [
        {
          name: "React",
          icon: "react",
          reason:
            "소개 페이지, 지원 페이지, 관리자 페이지 등 여러 페이지에서 카드, 버튼, 폼 등 공통 UI가 반복되는 구조였습니다. 컴포넌트 기반으로 UI를 재사용할 수 있는 React를 선택해 일관된 화면을 빠르게 구성했습니다. Next.js도 고려했지만 SEO보다 동아리 내부 관리 플랫폼 성격이 강했고, SSR의 복잡도보다 React SPA로 충분하다고 판단했습니다.",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          reason:
            "지원서 질문 데이터가 분야별로 구조가 달라 런타임에 타입 불일치 에러가 발생할 가능성이 높았습니다. 컴파일 타임에 타입을 미리 검증해 런타임 에러를 방지하고, 팀원들과 협업할 때 데이터 구조를 명확히 공유할 수 있어서 선택했습니다.",
        },
        {
          name: "React Query",
          icon: "reactQuery",
          reason:
            "초기엔 useEffect + fetch로 데이터를 가져오는 방식을 고려했는데, 스터디·프로젝트 등 여러 페이지에서 동일한 API를 반복 호출하는 상황이 많았습니다. React Query의 캐싱으로 불필요한 중복 요청을 줄이고, 로딩·에러 상태 관리도 일관되게 처리할 수 있어서 선택했습니다.",
        },
        {
          name: "AWS S3, Route 53, CloudFront",
          icon: "aws",
          reason:
            "지원 시즌에 트래픽이 집중되고 이미지·미디어 파일이 많은 프로젝트 특성상 CDN 기반 배포가 적합하다고 판단했습니다. S3로 정적 파일을 호스팅하고 CloudFront로 엣지 서버에서 캐싱해 응답 속도를 높였습니다. 배포 후에도 이전 버전이 보이는 문제가 발생해 create-invalidation 단계를 추가해 배포 시마다 캐시를 자동 초기화하도록 개선했습니다.",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          reason:
            "유틸리티 클래스 기반으로 별도 CSS 파일 없이 빠르게 스타일링할 수 있었고, 디자인 시스템 없이도 일관된 스타일을 유지할 수 있어서 선택했습니다.",
        },
        {
          name: "Notion",
          icon: "notion",
          reason:
            "주차별 회의록과 개발 문서를 한 곳에서 관리해 팀원 간 정보 공유와 협업이 용이하다고 판단해 선택했습니다.",
        },
      ],
      roles: [
        "프론트엔드 팀장으로서 주차별 개발 스프린트 운영 및 파트 내 진행 상황 조율",
        "동아리 소개 페이지 스크롤 애니메이션, 프로젝트 페이지 등 UI 개발",
        "정규 세션, 후기, 이력 API 연동 및 지원 관리자 페이지 전체 API 연동",
        "지원 관리자 페이지 서류 질문·평가 리팩토링",
        "GitHub Actions 기반 CI/CD 파이프라인 구축 및 AWS S3 + CloudFront 배포 환경 구성",
      ],
      imageDescriptions: {
        tave_0: [
          "PC(50.75%)·모바일(47.69%) 환경 모두에서 일관된 UI를 제공하기 위해 Tailwind CSS로 반응형 레이아웃을 구현했습니다.",
          "스크롤 애니메이션 구현 시 처음엔 window.scrollY 절댓값을 하드코딩했으나 기기마다 스크롤 위치가 달라지는 문제가 발생했습니다. IntersectionObserver와 getBoundingClientRect()로 뷰포트 기준 상대값을 계산하는 방식으로 개선해 모든 환경에서 정확하게 동작하도록 해결했습니다.",
          "MS Clarity로 Dead Click 영역을 탐지한 결과 제휴사 로고에 링크가 없어 클릭이 발생하고 있음을 확인했습니다. 링크를 연결한 후 Dead Click 발생 세션이 77% 감소했습니다.",
        ],
        tave_1: [
          "프로젝트 클릭 시 정보가 부족하다는 사용자 피드백을 수용해 프로젝트 카드 컴포넌트에 대표 이미지 추가를 제안하고 구현했습니다.",
          "MS Clarity 상위 페이지 분석으로 activity 페이지의 높은 관심도를 확인했습니다. 정규 세션 소개에 실제 행사 사진을 추가한 결과 스크롤 깊이가 약 8% 증가하고 Engagement time이 약 2배 이상 증가했습니다.",
        ],
        tave_2: [
          "다수의 스터디·프로젝트·후기 데이터를 처리하기 위해 React Query 캐싱을 도입했습니다. 동일한 API 중복 호출을 제거하고 로딩·에러 상태를 일관되게 처리할 수 있었습니다.",
          "운영진 직급에 따른 권한 관리를 위해 Zustand로 사용자 정보 및 권한을 전역 상태로 관리했습니다. Context API 대비 불필요한 리렌더링을 최소화할 수 있었습니다.",
          "TypeScript로 공통·분야별 질문의 글자 수 제한·필수 여부 등 세부 속성을 타입으로 명세화했습니다. 이를 통해 타입 안정성을 확보하고 런타임 에러를 방지했습니다.",
        ],
        tave_4: [
          "지원 데이터 시각화를 위해 Chart.js를 도입했습니다. 다양한 차트 타입을 기본으로 제공해 대시보드를 빠르게 구현할 수 있었습니다.",
          "실 서비스 운영 중 서류 평가의 불편함을 직접 인지했습니다. 평가 시 필터링·페이지 유지 및 지원자별 코멘트 기능(100자)을 추가해 평가 효율과 의견 공유 방식을 개선했습니다.",
          "120명 서류 합격자의 면접 가능 시간을 수동으로 확인하고 4일치 시간표를 직접 제작하던 문제를 발견했습니다. Hard/Soft Rule 기반 면접 시간표 자동 생성 프로그램을 도입해 시간표 제작 시간을 3시간에서 10분으로 단축했습니다.",
          "행사·프로젝트 페이지처럼 이미지가 많은 페이지에서 INP가 350ms로 측정됐습니다. React Query 캐싱으로 API 중복 호출을 제거해 불필요한 네트워크 요청을 줄인 결과 INP를 220ms로 개선했습니다.",
        ],
      },
      highlights: [
        "공식 홈페이지 런칭 후 동아리 지원율 192% 증가",
        "매 기수 신규 모집 기간 고유 사용자 약 500명 이상 유입",
        "동아리 SNS 팔로워 약 340명 증가",
        "MS Clarity 데이터 기반 지속적 개선으로 Dead Click 세션 77% 감소, Engagement time 2배 이상 증가",
        "면접 시간표 제작 시간 3시간 → 10분으로 단축",
      ],
    },
  },
  {
    id: "souf-platform",
    title: "대학생–기업 외주 매칭 플랫폼 SOUF",
    summary:
      "기업을 대상으로 합리적인 가격에 대학생들과 외주를 매칭해주는 플랫폼을 설계 및 개발했습니다.",
    tags: ["6인", "FE 팀장", "1년 2개월(진행중)"],
    thumbnail: getImage("souf_thumbnail"),
    logo: getImage("souf_logo"),
    cardGradient: "from-[#CDDEFF] via-[#DAE6FF] to-[#FBE59A]",
    link: "https://www.souf.co.kr",
    linkCaption: "현재는 서비스 운영을 잠시 중지하고 있습니다. 4-5월 내에 재오픈 예정입니다.",
    detail: {
      background:
        "대학생은 실무·포트폴리오 부족과 취업 경쟁 속에서 기회를 찾고, 기업은 합리적인 예산으로 역량 있는 인재를 구하기 어려운 구조적 미스매치가 존재했습니다.\n\n" +
        "기존 연결은 교수 추천·학과 커뮤니티 등 비공식 채널에 의존해 시간이 길고 신뢰 확보가 어려웠고, 일반 프리랜서 플랫폼은 대학생 특화 서비스나 작업물 공유·성장을 지원하기 어려운 구조였습니다.\n\n" +
        "이에 대학생과 기업을 직접 연결하고, SNS형 포트폴리오 공유와 AI 매칭으로 문제를 해결하는 플랫폼을 직접 기획부터 설계·개발·운영까지 주도했습니다.\n\n" +
        "서비스 런칭 후에는 Google Analytics로 사용자 행동 데이터를 직접 분석해 이탈 구간을 특정하고 UI를 개편했으며, 이탈률을 31%에서 5% 이하로 낮추는 성과를 달성했습니다.",

      images: getImagesByPrefix("souf_"),
      techStacks: [
        {
          name: "React",
          icon: "react",
          reason:
            "매칭 후 채팅, 공고 조회, 회원가입 등 사용자 인터랙션이 많고 상태 변화에 따른 화면 전환이 빈번한 서비스였습니다. Next.js도 고려했지만 로그인 후 사용하는 서비스라 SEO보다 빠른 인터랙션이 더 중요했고, React SPA로 충분하다고 판단했습니다.",
        },
        {
          name: "React Query",
          icon: "reactQuery",
          reason:
            "공고 목록과 피드 탐색을 필터링·정렬·페이징 등 다양한 조건으로 조회하는 상황이 많았습니다. React Query의 캐싱으로 동일한 조건의 중복 요청을 줄이고, 로딩·에러 상태도 일관되게 처리할 수 있어서 선택했습니다. 특히 실시간 채팅의 초기 메시지 로딩은 React Query로, 실시간 수신은 WebSocket으로 역할을 분리해 채팅 진입 시 렌더링 지연을 방지했습니다.",
        },
        {
          name: "Zustand",
          icon: "zustand",
          reason:
            "기업, 대학생, 동아리 세 가지 역할에 따라 접근 가능한 페이지와 기능이 달라서 전역으로 역할 상태를 관리할 필요가 있었습니다. Context API도 고려했지만 역할 상태가 여러 컴포넌트에서 자주 참조되는 구조라 Context의 리렌더링 문제가 우려됐고, 변경된 상태를 구독하는 컴포넌트만 리렌더링되는 Zustand가 더 적합하다고 판단했습니다.",
        },
        {
          name: "AWS S3, CloudFront",
          icon: "aws",
          reason:
            "피드 이미지, 동영상 등 대용량 미디어 리소스가 많은 서비스 특성상 일반 서버 배포보다 CDN 기반 배포가 적합하다고 판단했습니다. S3로 정적 파일을 호스팅하고 CloudFront로 엣지 서버에서 캐싱해 리소스 응답 속도를 높였습니다. GitHub Actions 기반 CI/CD로 main 브랜치 푸시 시 자동 빌드·배포되는 환경을 구성해 수동 배포의 비효율을 제거했습니다.",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          reason:
            "styled-components나 CSS Modules도 고려했지만, 빠른 개발 속도가 중요한 창업 프로젝트 특성상 별도 CSS 파일 없이 유틸리티 클래스로 바로 스타일링할 수 있는 Tailwind가 적합하다고 판단했습니다.",
        },
        {
          name: "Jira",
          icon: "jira",
          reason:
            "스프린트 기반으로 이슈를 트래킹하고 프로젝트 진행 상황을 시각화하기 위해 사용했습니다. Slack Incoming Webhook을 연동해 신규 회원가입·공고 업로드 등 주요 사용자 활동을 실시간 알림으로 수신해 서비스 이상 징후와 사용자 반응을 빠르게 감지했습니다.",
        },
        {
          name: "Confluence",
          icon: "jira",
          reason:
            "마케팅, 개발, 디자인 등 다양한 분야의 문서를 한곳에서 관리하고 공유하기 위해 사용했습니다. 회의록을 직접 작성하는 것을 습관화해 팀원 간 정보 누락을 방지했습니다.",
        },
      ],
      roles: [
        "프론트엔드 리드 개발(80%) 및 서비스 기획·구조 설계 단계부터 참여",
        "메인 페이지 캐러셀 슬라이드 등 인터랙티브 UI 개발",
        "WebSocket 기반 실시간 채팅 기능 설계 및 구현",
        "액세스 토큰 만료 시 API 요청 큐 기반 자동 재발급 로직 구현",
        "GitHub Actions 기반 CI/CD 파이프라인 구축 및 AWS S3 + CloudFront 배포 환경 구성",
        "Google Analytics trackEvent 설정 및 경로 탐색 분석으로 이탈 구간 특정 및 UI 개편",
        "사용자 유입을 위한 SNS 홍보 활동 및 자체 이벤트 기획",
      ],
      imageDescriptions: {
        souf_0: [
          "서비스 런칭 후 Google Analytics로 사용자 행동 데이터를 수집한 결과 메인 페이지 진입 후 이탈 패턴이 가장 많이 발생했고, 추정 이탈률이 약 31%에 달하는 것을 확인했습니다.",
          "유입 채널 분석 결과 Instagram이 전체 유입의 약 48%를 차지했으나 첫 화면에서 서비스 가치를 바로 인지하지 못하면 이탈한다는 것을 파악했습니다. 이를 개선하기 위해 첫 화면 상단에 인기 피드 노출 개수를 늘리고 이벤트 배너를 상단에 배치해 유입 즉시 서비스 가치를 인지할 수 있도록 UI를 개편했습니다.",
          "이벤트 페이지에 대한 관심이 가장 높다는 데이터를 확인해 플랫폼 진입 시 이벤트 페이지로 바로 이동하는 팝업을 띄워 피드 탐색을 즉시 유도했습니다. 그 결과 이탈률이 31%에서 5% 이하로 감소했습니다.",
        ],
        souf_2: [
          "기업·대학생·동아리 계정으로 회원 역할을 구분하고 각 역할에 맞는 회원가입 폼을 별도로 분리 설계했습니다.",
          "회원가입 단계별 이탈률 측정 결과 단일 페이지에 집중된 복잡한 입력 폼이 주요 이탈 원인임을 파악했습니다. 이를 개선하기 위해 개인정보 입력·역할별 정보 입력·인증 3단계로 분리하고 소셜 로그인을 도입해 입력 부담을 최소화했습니다.",
          "액세스 토큰 만료 시 여러 API가 동시에 401 에러를 받아 재발급 요청이 중복으로 호출되는 문제가 발생했습니다. API 요청 큐를 도입해 첫 번째 401 에러 시 재발급을 1번만 호출하고 대기열에 쌓인 요청을 순차적으로 재호출하도록 해결했습니다.",
        ],
        souf_3: [
          "대학생 계정 인증 절차를 거쳐 피드를 생성할 수 있도록 구현했습니다.",
          "SOUF의 피드 페이지를 바로 포트폴리오로 활용할 수 있도록 구성하는 것을 목표로 설계했습니다.",
          "피드 게시글마다 좋아요·댓글 기능을 구현해 사용자 상호작용을 증가시켰습니다.",
          "채팅 화면 진입 시 과거 메시지 로딩과 실시간 연결이 동시에 이루어져야 하는 상황에서 React Query로 초기 데이터를 로드하고 WebSocket으로 실시간 메시지를 수신하도록 역할을 분리했습니다. 그 결과 0.3~0.5초 내 끊김 없는 연결을 달성했습니다.",
        ],
        souf_4: [
          "기업 계정 인증 절차를 거쳐 외주 공고를 생성할 수 있도록 구현했습니다.",
          "외주 카테고리·희망 금액·작업 기간·상세 이미지 등을 함께 업로드해 대학생들이 외주 작업에 대한 상세한 정보를 바로 얻을 수 있도록 했습니다.",
          "외주 공고에 지원한 학생들의 프로필(포트폴리오 형태 피드 목록)을 확인하여 기업 측에서 채팅을 생성할 수 있도록 구현했습니다.",
        ],
      },
      highlights: [
        "세종대학교 창업지원단 선정",
        "Google Analytics 경로 탐색 분석으로 이탈 구간 특정 → UI 개편 후 이탈률 31% → 5% 이하로 감소",
        "자체 이벤트 및 SNS 홍보로 이벤트 기간 동안 활성 사용자 400명 이상 증가",
        "WebSocket + React Query 역할 분리로 채팅 진입 시 0.3~0.5초 내 끊김 없는 연결 달성",
        "API 요청 큐 도입으로 액세스 토큰 만료 시 중복 재발급 요청 문제 해결",
      ],
    },
  },
  {
    id: "daily-guitar",
    title: "Daily Guitar : 기타 연주 AI 분석 및 MCP 기반 기타 연습 어시스턴트",
    summary:
      "기타 연주 오디오를 분석해 피드백을 제공하는 기타 연습 보조 프로그램을 개발했습니다.",
    tags: ["3인", "팀장", "9개월"],
    thumbnail: getImage("daily_thumbnail"),
    logo: getImage("daily_logo"),
    cardGradient: "from-[#84B3F5] to-[#EFF5FE]",
    link: "https://github.com/Con-graduation/Capstone_FE",
    linkCaption: "캡스톤 프로젝트 프론트엔드 코드 저장소입니다.",
    detail: {
      background:
        "학과 밴드 동아리 활동 중 기타 개인 연습 과정에서 두 가지 문제를 직접 경험했습니다.\n\n" +
        "첫째, 연주 정확도에 대한 객관적인 피드백을 받을 수단이 없어 연습 효율이 낮았습니다. 잘 치고 있는지, 어떤 부분이 부족한지 스스로 판단하기 어려운 상황이었습니다.\n\n" +
        "둘째, 연습 기록을 체계적으로 관리하기 어려워 꾸준한 연습 루틴을 유지하기 힘들었습니다.\n\n" +
        "이를 해결하기 위해 기타 연주 오디오를 AI로 분석해 박자·음정 정확도를 계산하고 피드백을 제공하는 서비스를 기획했습니다. " +
        "MCP 서버를 통해 연습 기록 통계를 분석하고 맞춤 곡을 추천하며, Google Calendar API로 연습 일정을 자동으로 생성하는 기능까지 구현했습니다.",

      images: getImagesByPrefix("daily_"),
      techStacks: [
        {
          name: "React",
          icon: "react",
          reason:
            "기타 지판 UI, 메트로놈 애니메이션, 실시간 음향 분석 등 사용자 인터랙션과 상태 변화가 매우 빈번한 서비스였습니다. 모바일 전용 웹 인터페이스로 구현했기 때문에 SSR보다 클라이언트 중심의 빠른 인터랙션이 더 중요했고, React SPA가 적합하다고 판단했습니다.",
        },
        {
          name: "MCP(연동)",
          reason:
            "자연어로 입력된 연습 일정 요청을 구조화된 데이터로 변환해 Google Calendar API와 연결하는 파이프라인이 필요했습니다. MCP 서버를 통해 AI 분석 결과와 캘린더 생성을 하나의 채팅 흐름 안에서 처리할 수 있었고, 사용자가 별도 앱 전환 없이 채팅 내에서 일정 관리까지 완결되는 경험을 구현했습니다.",
        },
        {
          name: "Zustand",
          icon: "zustand",
          reason:
            "사용자 정보, 연습 이력, 루틴 설정 등 여러 컴포넌트에서 공통으로 참조하는 상태가 많고 연습 중 BPM, 메트로놈 상태 등 자주 변경되는 값이 많아 Zustand가 적합하다고 판단했습니다.",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          reason:
            "기타 지판 UI, 메트로놈 피드백, 단계별 연습 화면 등 구현해야 할 UI가 많았습니다. 유틸리티 클래스로 빠르게 스타일링할 수 있는 Tailwind가 개발 속도 면에서 적합하다고 판단했습니다.",
        },
        {
          name: "AWS(S3, CloudFront)",
          icon: "aws",
          reason:
            "사용자가 업로드하는 기타 연주 오디오 파일은 용량이 크고 AI 분석 후 결과 파일도 저장해야 했습니다. S3로 대용량 오디오 파일을 안정적으로 저장하고 CloudFront로 캐싱해 파일 응답 속도를 높여 분석 대기 시간을 최소화했습니다.",
        },
        {
          name: "Notion",
          icon: "notion",
          reason:
            "주차별 회의록과 기능별 스프린트를 한곳에서 정리해 팀원 간 정보 공유와 협업에 활용했습니다. 회의록을 직접 작성하는 것을 습관화해 팀원 간 정보 누락을 방지했습니다.",
        },
      ],
      roles: [
        "팀장으로서 프로젝트 전반 기획·사용자 연습 흐름을 기준으로 핵심 기능 정의 및 서비스 구조 설계",
        "프론트엔드 개발(100%)",
        "모바일 중심 사용 환경을 고려한 UI 설계 및 모바일 전용 웹 인터페이스 구현",
        "Google Identity 기반 로그인과 OAuth2 Token Client 기반 캘린더 권한 획득 분리 구현",
        "MCP 서버 연동 및 Google Calendar API 연결 파이프라인 구현",
        "AudioContext 기반 실시간 음향 분석 및 requestAnimationFrame 기반 60fps 피드백 구현",
        "경진대회 발표자료 제작",
      ],
      imageDescriptions: {
        daily_0: [
          "로그인 후 진입하는 메인 화면으로, 사용자의 연속 연습 기록(주간 연습 정확도 및 Streak)을 확인하고 연습 루틴을 조회할 수 있도록 구성했습니다.",
          "Google 계정 연동 버튼을 통해 Google Identity 기반 로그인(ID 토큰 전달)과 OAuth2 Token Client 기반 캘린더 권한 획득을 분리해 구현했습니다. 앱 인증과 외부 API 권한을 독립적으로 운영하도록 설계했습니다.",
        ],
        daily_1: [
          "연습 기록이 존재하는 경우 우측 하단의 'AI 질문하기' 버튼을 통해 MCP 서버에 자연어로 루틴 연습 기록 통계 조회 및 Google 캘린더 일정 생성을 요청할 수 있습니다.",
          "백엔드로부터 받은 응답에 calendar 키가 포함된 경우에만 Google Calendar API를 직접 호출하도록 메시지 처리 로직을 분리 설계했습니다. 일반 채팅 응답과 캘린더 생성 응답을 타입별로 구분해 처리했습니다.",
          "채팅 형식의 UI/UX를 위해 답변을 20ms마다 타이핑하는 효과로 출력했습니다.",
        ],
        daily_2: [
          "일정 생성 완료 후 사용자에게 생성 결과 메시지와 Google 캘린더 바로가기 링크를 제공해 별도 앱 전환 없이 채팅 내에서 일정 관리가 완결되는 사용자 경험을 구현했습니다.",
          "Google 계정 연동 과정에서 기존 One Tap 방식이 브라우저·환경별로 안정적으로 동작하지 않는 문제가 발생했습니다. FedCM dismiss·미표시·스킵 케이스를 감지해 OAuth2 Token Client 기반 수동 로그인으로 폴백하고 access/refresh token을 직접 수집해 백엔드 연동 흐름을 재구성했습니다. 그 결과 Google 캘린더 권한 획득과 계정 연동 성공률을 안정적으로 확보했습니다.",
        ],
        daily_3: [
          "사용자의 연습 기록 중 가장 높은 정확도를 기록한 BPM(박자) 및 선호 장르를 기반으로 MCP 서버가 맞춤 곡 3개를 추천합니다.",
          "GPT가 유튜브 링크를 직접 생성할 경우 삭제된 영상·지역 제한 영상 등 재생이 불가능한 링크를 반환하는 문제가 발생했습니다. GPT가 생성하는 콘텐츠를 아티스트명과 곡명으로만 한정하고 YouTube Data API를 직접 호출해 신뢰도 높은 링크를 추출하도록 구조를 변경했습니다.",
        ],
        daily_4: [
          "사용자가 원하는 유형(코드·크로매틱), 반복횟수, BPM을 직접 설정해 맞춤 연습 루틴을 제작할 수 있도록 구현했습니다.",
          "코드 연습의 경우 미리 정의된 코드 데이터와 사용자 정의 구성을 통해 기타 지판 UI에 운지법을 동적으로 렌더링하고, 설정된 BPM에 맞춰 메트로놈 사운드와 Pulse 애니메이션을 동기화해 시각·청각 피드백을 동시에 제공했습니다.",
          "크로매틱 연습의 경우 사용자가 정의한 손가락 순서를 BPM에 맞게 기타 지판 UI에 출력해 12프렛까지 순회하며 연습할 수 있도록 구현했습니다.",
        ],
        daily_5: [
          "AI 서버 분석 규격에 맞추기 위해 MediaRecorder로 수집한 WEBM 녹음을 WAV 파일로 변환한 뒤 업로드하는 파이프라인을 구현했습니다.",
          "분석 결과를 받아 반원 차트·막대그래프 차트·피드백 메시지로 시각화했습니다. 초·중·후반 구간별 정확도와 지난 연습 기록 평균값을 비교해 사용자에게 객관적인 피드백을 제공했습니다.",
          "AudioContext → MediaStreamSource → GainNode → AnalyserNode 노드 체인을 구성해 실시간 음향을 분석했습니다. RMS 알고리즘으로 볼륨을 계산하고 requestAnimationFrame 기반 루프로 60fps 수준의 실시간 피드백을 제공했습니다.",
        ],
      },
      highlights: [
        "서울과학기술대학교 산업정보시스템전공 2025 캡스톤 경진대회 금상(2위) 수상",
        "MCP 서버 연동을 통한 자연어 기반 연습 기록 분석 및 맞춤 곡 추천 기능 구현",
        "Google Calendar API 연동으로 채팅 내에서 연습 일정 관리까지 완결되는 사용자 경험 구현",
        "YouTube Data API 도입으로 GPT 생성 링크 신뢰성 문제 해결 및 기능 안정성 확보",
        "One Tap 방식 불안정 문제 발견 → OAuth2 Token Client 기반 폴백 구현으로 계정 연동 성공률 확보",
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
