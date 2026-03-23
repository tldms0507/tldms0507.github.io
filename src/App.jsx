import { useEffect, useRef, useState } from "react";
import Header from "./component/header";
import ColorMode from "./component/colorMode";

function NameIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M38.2291 45.1041C34.9652 41.8402 33.3333 37.9166 33.3333 33.3333C33.3333 28.75 34.9652 24.8263 38.2291 21.5625C41.493 18.2986 45.4166 16.6666 50 16.6666C54.5833 16.6666 58.5069 18.2986 61.7708 21.5625C65.0347 24.8263 66.6666 28.75 66.6666 33.3333C66.6666 37.9166 65.0347 41.8402 61.7708 45.1041C58.5069 48.368 54.5833 50 50 50C45.4166 50 41.493 48.368 38.2291 45.1041ZM16.6666 75V71.6666C16.6666 69.3055 17.275 67.1361 18.4916 65.1583C19.7083 63.1805 21.3222 61.6694 23.3333 60.625C27.6388 58.4722 32.0138 56.8583 36.4583 55.7833C40.9027 54.7083 45.4166 54.1694 50 54.1666C54.5833 54.1638 59.0972 54.7027 63.5416 55.7833C67.9861 56.8638 72.3611 58.4777 76.6666 60.625C78.6805 61.6666 80.2958 63.1777 81.5125 65.1583C82.7291 67.1388 83.3361 69.3083 83.3333 71.6666V75C83.3333 77.2916 82.518 79.2541 80.8875 80.8875C79.2569 82.5208 77.2944 83.3361 75 83.3333H25C22.7083 83.3333 20.7472 82.518 19.1166 80.8875C17.4861 79.2569 16.6694 77.2944 16.6666 75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BirthIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 75 87" fill="none" className={className} aria-hidden="true">
      <path
        d="M75 37.5V66.6667C75 68.8768 74.122 70.9964 72.5592 72.5592C70.9964 74.122 68.8768 75 66.6667 75H8.33333C6.1232 75 4.00358 74.122 2.44078 72.5592C0.877973 70.9964 0 68.8768 0 66.6667V37.5H75ZM54.1667 0C55.2717 0 56.3315 0.438987 57.1129 1.22039C57.8943 2.00179 58.3333 3.0616 58.3333 4.16667V8.33333H66.6667C68.8768 8.33333 70.9964 9.21131 72.5592 10.7741C74.122 12.3369 75 14.4565 75 16.6667V29.1667H0V16.6667C0 14.4565 0.877973 12.3369 2.44078 10.7741C4.00358 9.21131 6.1232 8.33333 8.33333 8.33333H16.6667V4.16667C16.6667 3.0616 17.1057 2.00179 17.8871 1.22039C18.6685 0.438987 19.7283 0 20.8333 0C21.9384 0 22.9982 0.438987 23.7796 1.22039C24.561 2.00179 25 3.0616 25 4.16667V8.33333H50V4.16667C50 3.0616 50.439 2.00179 51.2204 1.22039C52.0018 0.438987 53.0616 0 54.1667 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.6667 83.3333C14.375 83.3333 12.4139 82.518 10.7834 80.8875C9.15282 79.2569 8.33615 77.2944 8.33337 75V25C8.33337 22.7083 9.15004 20.7472 10.7834 19.1166C12.4167 17.4861 14.3778 16.6694 16.6667 16.6666H83.3334C85.625 16.6666 87.5875 17.4833 89.2209 19.1166C90.8542 20.75 91.6695 22.7111 91.6667 25V75C91.6667 77.2916 90.8514 79.2541 89.2209 80.8875C87.5903 82.5208 85.6278 83.3361 83.3334 83.3333H16.6667ZM51.0959 53.2833C51.4764 53.1777 51.8403 53.0208 52.1875 52.8125L81.6667 34.375C82.2223 34.0277 82.6389 33.5944 82.9167 33.075C83.1945 32.5555 83.3334 31.9819 83.3334 31.3541C83.3334 29.9652 82.7431 28.9236 81.5625 28.2291C80.382 27.5347 79.1667 27.5694 77.9167 28.3333L50 45.8333L22.0834 28.3333C20.8334 27.5694 19.6181 27.5527 18.4375 28.2833C17.257 29.0138 16.6667 30.0375 16.6667 31.3541C16.6667 32.0486 16.8056 32.6569 17.0834 33.1791C17.3612 33.7013 17.7778 34.1 18.3334 34.375L47.8125 52.8125C48.1598 53.0208 48.525 53.1777 48.9084 53.2833C49.2917 53.3888 49.6556 53.4402 50 53.4375C50.3445 53.4347 50.7098 53.3833 51.0959 53.2833Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SchoolIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M79.1667 55.9625V66.6666C79.1667 76.6583 65.8125 83.3333 50 83.3333C34.1875 83.3333 20.8334 76.6583 20.8334 66.6666V55.9625L45.3584 65.7708C48.0307 66.8407 50.9904 66.9555 53.7375 66.0958L54.6417 65.7708L79.1667 55.9625ZM87.5 43.65L51.5459 58.0333C50.5534 58.4298 49.4466 58.4298 48.4542 58.0333L6.78752 41.3666C3.29169 39.9708 3.29169 35.0291 6.78752 33.6333L48.4542 16.9666C48.7818 16.8348 49.1248 16.7452 49.475 16.7L50 16.6666L50.525 16.7C50.8752 16.7452 51.2183 16.8348 51.5459 16.9666L93.3459 33.6875L93.7959 33.9166L94.2084 34.2L94.575 34.5166L94.8875 34.8583L95.0334 35.0416L95.3375 35.5208L95.5542 36L95.6958 36.425L95.8 36.9875L95.825 37.2291L95.8334 62.5C95.8334 63.605 95.3944 64.6648 94.613 65.4462C93.8316 66.2276 92.7718 66.6666 91.6667 66.6666C90.5616 66.6666 89.5018 66.2276 88.7204 65.4462C87.939 64.6648 87.5 63.605 87.5 62.5V43.65Z"
        fill="currentColor"
      />
    </svg>
  );
}

const HERO_INTRO =
  "주도적으로 문제를 찾아 데이터를 기반으로 개선하는 프론트엔드 개발자 김시은입니다.";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const [heroTyped, setHeroTyped] = useState("");
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [heroTypewriterActive, setHeroTypewriterActive] = useState(false);
  const [colorMode, setColorMode] = useState("light");
  const isDark = colorMode === "dark";

  const sectionClass = `${isDark ? "bg-gray-900" : "bg-white"} p-8 py-24 shadow-sm transition-colors duration-500`;
  const titleClass = `text-3xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"} transition-colors duration-500`;
  const bodyClass = `${isDark ? "text-gray-300" : "text-gray-600"} transition-colors duration-500`;
  const cardClass = `rounded-lg p-4 flex gap-6 items-center ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} transition-colors duration-500`;
  const cardClassLarge = `rounded-lg border p-5 ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} transition-colors duration-500`;
  const subTitleClass = `font-semibold ${isDark ? "text-gray-100" : "text-gray-800"} transition-colors duration-500`;
  const mutedTextClass = `${isDark ? "text-gray-400" : "text-gray-500"} transition-colors duration-500`;
  const tagClass = `inline-flex rounded-full px-3 py-1 text-sm ${isDark ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-700"} transition-colors duration-500`;

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setHeroTyped(HERO_INTRO);
      setHeroTypewriterActive(false);
      return;
    }

    let cancelled = false;
    const timeouts = [];

    const schedule = (fn, ms) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
      return id;
    };

    const typeNext = (i) => {
      if (cancelled) return;
      setHeroTyped(HERO_INTRO.slice(0, i));
      setHeroTypewriterActive(true);
      if (i >= HERO_INTRO.length) {
        setHeroTypewriterActive(false);
        const pauseMs = 3000 + Math.random() * 2000;
        schedule(() => deleteNext(HERO_INTRO.length), pauseMs);
        return;
      }
      schedule(() => typeNext(i + 1), 38);
    };

    const deleteNext = (len) => {
      if (cancelled) return;
      setHeroTypewriterActive(true);
      if (len <= 0) {
        setHeroTyped("");
        setHeroTypewriterActive(false);
        const beforeRetypeMs = 500 + Math.random() * 500;
        schedule(() => typeNext(1), beforeRetypeMs);
        return;
      }
      setHeroTyped(HERO_INTRO.slice(0, len - 1));
      schedule(() => deleteNext(len - 1), 25);
    };

    schedule(() => typeNext(1), 600);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const top = aboutRef.current.getBoundingClientRect().top;
     
      setIsHeaderSolid(top <= 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-100 w-full min-h-screen">
      <Header
        isSolid={isHeaderSolid}
        isDark={isDark}
        onTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAbout={() => scrollToRef(aboutRef)}
        onSkills={() => scrollToRef(skillsRef)}
        onProject={() => scrollToRef(projectRef)}
      />
      <ColorMode
        colorMode={colorMode}
        onToggle={() => setColorMode((prev) => (prev === "light" ? "dark" : "light"))}
      />

      <div className="mx-auto w-full">
        <section className="" aria-label="소개">
          <div className="hero-gradient-bg relative flex h-[38rem] items-center overflow-hidden px-20 py-20 shadow-xl ring-1 ring-white/15 md:px-12 md:py-16 z-30">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
              aria-hidden
            />
            <div className="relative z-10 w-full text-white text-center md:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hero-title-enter">
                Portfolio
              </p>
              <h2 className="hero-title-enter text-3xl font-bold leading-tight tracking-tight drop-shadow-md md:text-4xl lg:text-5xl">
                김시은
                <span className="mt-2 block text-2xl font-semibold text-white/95 md:mt-3 md:text-3xl lg:text-4xl">
                  프론트엔드 개발자 포트폴리오
                </span>
              </h2>
              <p
                className="hero-title-enter-delay mt-8 min-h-[4.5rem] text-base leading-relaxed text-white/90 md:min-h-[3.5rem] md:text-lg"
                aria-live="polite"
              >
                {heroTyped}
                {heroTypewriterActive ? (
                  <span className="hero-typewriter-cursor" aria-hidden="true" />
                ) : null}
              </p>
            </div>
          </div>
        </section>
        <section
          ref={aboutRef}
          style={{ scrollMarginTop: 40 }}
          className={sectionClass}
        >
          <h2 className={titleClass}>About me</h2>
         
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { icon: NameIcon, k: "이름", v: "김시은" },
              { icon: BirthIcon, k: "생년월일", v: "2002.05.07" },
              { icon: MailIcon, k: "이메일", v: "sieun050783@gmail.com" },
              { icon: SchoolIcon, k: "학력", v: "서울과학기술대학교 (산업정보시스템전공)" },
            ].map((item) => (
              <div key={item.k} className={cardClass}>
                  <item.icon
                    className={`h-10 w-10 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                <div className="flex flex-col items-start gap-3">
                
                  <div className={`text-xl font-bold ${subTitleClass}`}>{item.k}</div>
                  <div className={`text-lg ${bodyClass}`}>{item.v}</div>
                </div>
               
              </div>
            ))}
          </div>
          <span
            className={`block h-[0.1rem] w-full my-6 ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></span>

          <div className={`mt-8 space-y-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"} transition-colors duration-500`}>
            {[{
  title: "[책임감 있게 프로젝트를 완수하는 개발자]",
  body: "동아리에서 1년 6개월 동안 운영진으로 활동하며 여러 프로젝트를 진행했습니다. 대부분의 프로젝트에서 프론트엔드 리드를 맡아 구현 방향을 정리하고 일정과 구조를 설계하며 팀과 협업했습니다. 개발 과정에서 예상치 못한 문제들이 발생해도 끝까지 해결 방법을 찾아 프로젝트를 완성하는 과정을 중요하게 생각합니다.",
},
              {
                title: "[사용자의 행동 분석을 통한 성장]",
                body: "동아리 홈페이지의 사용자 유입 데이터와 사이트 이용 경험을 분석해 정보 구조와 주요 홈페이지 구성 요소,  UI 등을 개선했습니다. 그 결과 동아리 지원율 192% 증가, 약 500명 이상의 사용자 유입을 확보하며 홈페이지의 접근성을 높였습니다.",
              },
              {
                title: "[지표로 검증하며 서비스를 개선]",
                body: "대학생–기업 외주 매칭 플랫폼 ‘SOUF’를 개발하고 실제로 운영해보며 Google Analytics 기반 사용자 흐름 분석을 통해 로그인·회원가입 절차를 개선해 로그인 수 300건 이상 증가, 이탈률을 5% 이하로 낮추었습니다. 세종대학교 창업지원단 선정 후, 운영 데이터를 기반으로 지속적인 UX 개선을 이어가고 있습니다.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <div className={`text-lg font-semibold ${subTitleClass}`}>{item.title}</div>
                <p className={`leading-relaxed ${bodyClass}`}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={skillsRef}
          style={{ scrollMarginTop: 40 }}
          className={sectionClass}
        >
          <h2 className={titleClass}>Skills</h2>
          <p className={`mt-4 ${bodyClass}`}>실제로 포트폴리오에서 자주 활용하는 기술들입니다.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Frontend",
                items: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query"],
              },
              {
                title: "Engineering",
                items: ["코드 리뷰", "테스트 작성", "성능 측정/개선", "접근성 체크"],
              },
              {
                title: "UI/UX",
                items: ["반응형 레이아웃", "마이크로 인터랙션", "디자인 시스템 구성"],
              },
              {
                title: "Collaboration",
                items: ["문서화", "이슈 트래킹", "명확한 커뮤니케이션"],
              },
            ].map((card) => (
              <div key={card.title} className={cardClassLarge}>
                <div className={`text-lg ${subTitleClass}`}>{card.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.items.map((s) => (
                    <span key={s} className={tagClass}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`mb-4 ${cardClass}`}>
                <div className="flex items-center justify-between">
                  <div className={subTitleClass}>Skills detail #{i + 1}</div>
                  <div className={`text-sm ${mutedTextClass}`}>Focus: UX + DX</div>
                </div>
                <p className={`mt-2 ${bodyClass}`}>
                  더미 데이터로 스크롤이 충분히 길어지도록 구성했습니다. 실제 포트폴리오에서는
                  각 항목에 프로젝트 링크/스크린샷을 넣으면 좋아요.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={projectRef}
          style={{ scrollMarginTop: 40 }}
          className={sectionClass}
        >
          <h2 className={titleClass}>Project</h2>
          <p className={`mt-4 ${bodyClass}`}>예시용 프로젝트 카드입니다. (스크롤용 더미 길이)</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Dashboard UI",
                desc: "지표/차트/필터를 구성하고 상태 전환을 매끄럽게 만든 화면입니다.",
                tags: ["React", "TypeScript", "UX"],
              },
              {
                title: "Portfolio Template",
                desc: "재사용 가능한 섹션/컴포넌트 구조로 빠르게 페이지 확장할 수 있게 만들었습니다.",
                tags: ["Component", "Tailwind"],
              },
              {
                title: "E-commerce MVP",
                desc: "장바구니/결제 흐름을 간단히 구현하며 데이터 흐름을 정리했습니다.",
                tags: ["State", "API"],
              },
              {
                title: "Realtime Notes",
                desc: "입력/저장/동기화를 UX 중심으로 다듬은 메모 앱 예시입니다.",
                tags: ["Performance", "UX"],
              },
            ].map((p) => (
              <div key={p.title} className={cardClassLarge}>
                <div className={`text-lg ${subTitleClass}`}>{p.title}</div>
                <p className={`mt-2 ${bodyClass}`}>{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={tagClass}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={cardClass}>
                <div className="flex items-center justify-between">
                  <div className={subTitleClass}>Project notes #{i + 1}</div>
                  <div className={`text-sm ${mutedTextClass}`}>Draft</div>
                </div>
                <p className={`mt-2 ${bodyClass}`}>
                  스크롤이 끊기지 않게 길이를 늘리는 더미 문장입니다. 실제로는 여기에 기술 스택,
                  담당 기능, 배운 점을 넣어주세요.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
