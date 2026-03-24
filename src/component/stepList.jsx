import { useEffect, useRef, useState } from "react";
import StepBox from "./stepBox";

const STEP_TABS = ["Language", "Frontend", "ETC"];

export default function StepList({ isDark }) {
  const [activeTab, setActiveTab] = useState("Language");
  const tabListRef = useRef(null);
  const buttonRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeTab];
      const tabList = tabListRef.current;
      if (!activeButton || !tabList) return;

      const buttonRect = activeButton.getBoundingClientRect();
      const listRect = tabList.getBoundingClientRect();
      setIndicatorStyle({
        left: buttonRect.left - listRect.left,
        width: buttonRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <section className="w-full">
      <div className="border-b border-gray-300">
        <div ref={tabListRef} className="relative flex items-center gap-6">
          {STEP_TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                ref={(el) => {
                  if (el) buttonRefs.current[tab] = el;
                }}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative py-3 text-xl font-semibold transition-colors cursor-pointer ${
                  isActive ? "text-[#5E7AE7]" : isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            );
          })}
          <span
            className="pointer-events-none absolute bottom-0 h-0.5 bg-[#5E7AE7] transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>
      </div>

      <StepBox activeTab={activeTab} isDark={isDark} />
    </section>
  );
}