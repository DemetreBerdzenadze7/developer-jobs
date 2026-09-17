import { useRef } from "react";
import Filter from "./Filter";
import { useJob } from "@/context/JobsContext";

const InputSection = () => {
  const titleRef = useRef<null | HTMLInputElement>(null);
  const locationRef = useRef<null | HTMLInputElement>(null);
  const {
    clicked,
    setClicked,
    titleFilter,
    setTitleFilter,
    locationFilter,
    setLocationFilter,
    checked,
    setChecked,
    theme,
  } = useJob();

  const handleSearchFocus = (): void => {
    titleRef.current?.focus();
  };

  const handleLocationFocus = (): void => {
    locationRef.current?.focus();
  };

  const handleChecked = () => {
    setChecked(!checked);
    if (checked) {
      setTitleFilter("");
      setLocationFilter("");
    }
  };

  return (
    <section className="-mt-20 md:-mt-23 lg:-mt-19">
      {clicked && <Filter />}
      <div
        className={
          theme === "dark"
            ? "flex items-center justify-between gap-4 w-full p-2 md:p-0 rounded-main bg-jobs shadow-[0_15px_30px_rgba(0,0,0,0.22)]"
            : "flex items-center justify-between gap-4 w-full p-2 md:p-0 rounded-main bg-white shadow-[0_15px_30px_rgba(25,32,45,0.08)]"
        }
      >
        <div className=" w-full md:border-r md:border-description/20 md:w-[35%] lg:w-[45%]">
          <div className="md:flex md:items-center  md:gap-4 md:p-3">
            <button onClick={handleSearchFocus}>
              <img
                src="/images/desktop/icon-search.svg"
                alt="Search icon"
                className="hidden md:block"
              />
            </button>
            <input
              type="text"
              placeholder="Filter by title..."
              ref={titleRef}
              value={titleFilter}
              className={
                theme === "dark"
                  ? "outline-0 placeholder:text-white/50 text-white w-full py-4 px-2"
                  : "outline-0 placeholder:text-jobs/50 text-jobs w-full py-4 px-2"
              }
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="hidden md:block md:border-r md:border-description/20 md:w-[35%] lg:w-[45%]">
          <div className="flex items-center gap-2 p-3  ">
            <button onClick={handleLocationFocus}>
              <img src="/images/desktop/icon-location.svg" alt="Location" />
            </button>
            <input
              type="text"
              placeholder="Filter by location..."
              ref={locationRef}
              value={locationFilter}
              className={
                theme === "dark"
                  ? "outline-0 placeholder:text-white/50 text-white w-full py-4 px-2"
                  : "outline-0 placeholder:text-jobs/50 text-jobs w-full py-4 px-2"
              }
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 md:w-[25%] lg:w-[20%]">
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setClicked(true)}
          >
            <img
              src="/images/mobile/icon-filter.svg"
              alt="Filter icon"
              className={theme === "dark" ? "brightness-0 invert" : ""}
            />
          </button>
          <div className="hidden md:flex items-center gap-3">
            <input
              type="checkbox"
              checked={checked}
              name="job"
              id="job"
              className="size-5 appearance-none rounded-sm border border-gray-400 bg-white transition duration-200 checked:border-blue-600 checked:bg-blue-600 checked:relative checked:after:content-['✓'] checked:after:absolute  checked:after:left-1/2  checked:after:top-1/2  checked:after:-translate-x-1/2  checked:after:-translate-y-1/2  checked:after:text-sm  checked:after:font-bold  checked:after:text-white"
              onChange={handleChecked}
            />
            <label
              htmlFor="job"
              className={
                theme === "dark"
                  ? "text-description font-bold text-white"
                  : "text-description font-bold text-jobs"
              }
            >
              Full Time
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputSection;
