import { useJob } from "@/context/JobsContext";
import { useRef } from "react";

const Filter = () => {
  const locationRef = useRef<null | HTMLInputElement>(null);
  const { setClicked, locationFilter, setLocationFilter, checked, setChecked } =
    useJob();

  const handleFocus = () => {
    locationRef.current?.focus();
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-10"
      onClick={() => setClicked(false)}
    >
      <div
        className="w-81.75 h-60.25 z-15 bg-white  rounded-main  "
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
            className="outline-0 bg-amber-100 w-full p-3 placeholder:text-jobs "
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
              className="text-desciption font-bold text-jobs cursor-pointer"
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
