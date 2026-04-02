export default function LoadingScreen({ isDark = false }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${
        isDark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      }`}
      role="status"
      aria-live="polite"
      aria-label="페이지 로딩 중"
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-5 px-6">
        <p className="text-2xl font-bold tracking-[0.24em]">LOADING</p>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e3a5f]/20">
          <div className="loading-progress-bar h-full w-2/5 rounded-full bg-[#1e3a5f]" />
        </div>
      </div>
    </div>
  );
}
