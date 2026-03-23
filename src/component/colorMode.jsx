import lightIcon from "../assets/image/lightIcon.svg";
import darkIcon from "../assets/image/darkIcon.svg";

export default function ColorMode({ colorMode, onToggle }) {

  return (
    <div
      className={`z-50 fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full shadow-md  ${
        colorMode === "light" ? "bg-gray-100" : "bg-gray-600"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex h-full w-full items-center justify-center cursor-pointer"
      >
        {colorMode === "light" ? (
          <img src={lightIcon} alt="light" className="h-8 w-8" />
        ) : (
          <img src={darkIcon} alt="dark" className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}