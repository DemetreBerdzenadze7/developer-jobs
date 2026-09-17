import { useJob } from "@/context/JobsContext";
import { useRef } from "react";

const Filter = () => {
  const locationRef = useRef<null | HTMLInputElement>(null);
  const {
    setClicked,
    locationFilter,
    setLocationFilter,
    checked,
    setChecked,
    theme,
  } = useJob();

  const handleFocus = () => {
    locationRef.current?.focus();
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-10"
      onClick={() => setClicked(false)}
    >
      <div
        className={
          theme === "dark"
            ? "w-81.75 h-45.25 z-15 bg-jobs rounded-main shadow-[0_15px_30px_rgba(0,0,0,0.22)]"
            : "w-81.75 h-45.25 z-15 bg-white rounded-main shadow-[0_15px_30px_rgba(25,32,45,0.08)]"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 border-b border-description/20 py-5 px-4">
          <button className="cursor-pointer" onClick={handleFocus}>
            <img src="/images/desktop/icon-location.svg" alt="Location icon" />
          </button>
          <input
            type="text"
            ref={locationRef}
            value={locationFilter}
            placeholder="Filter by location..."
            className={
              theme === "dark"
                ? "outline-0 w-full p-3 placeholder:text-white/50 text-white"
                : "outline-0 w-full p-3 placeholder:text-jobs/50 text-jobs"
            }
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>
        <div className="mt-7 px-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="filter"
              id="filter"
              className="size-5 appearance-none rounded-sm border border-gray-400 bg-white transition duration-200 checked:border-blue-600 checked:bg-blue-600 checked:relative checked:after:content-['✓'] checked:after:absolute  checked:after:left-1/2  checked:after:top-1/2  checked:after:-translate-x-1/2  checked:after:-translate-y-1/2  checked:after:text-sm  checked:after:font-bold  checked:after:text-white cursor-pointer"
              onChange={() => setChecked(!checked)}
            />
            <label
              htmlFor="filter"
              className={
                theme === "dark"
                  ? "text-description font-bold text-white cursor-pointer"
                  : "text-description font-bold text-jobs cursor-pointer"
              }
            >
              Full Time Only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
