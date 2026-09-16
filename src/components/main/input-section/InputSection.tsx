import { useRef } from "react";

const InputSection = () => {
  const titleRef = useRef<null | HTMLInputElement>(null);
  const locationRef = useRef<null | HTMLInputElement>(null);

  const handleSearchFocus = (): void => {
    titleRef.current?.focus();
  };

  const handleLocationFocus = (): void => {
    locationRef.current?.focus();
  };

  return (
    <section className="-mt-20 md:-mt-23 lg:-mt-19">
      <div className="flex items-center justify-between gap-4 w-full p-2 md:p-0  ounded-main bg-white rounded-main ">
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
              className="outline-0 placeholder:text-desctiption placeholder:text-jobs placeholder:opacity-[0.5] w-full py-4 px-2"
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
              className="outline-0 placeholder:text-desctiption placeholder:text-jobs placeholder:opacity-[0.5] w-full py-4 px-2  "
            />
          </div>
        </div>
        <div className="flex items-center gap-4 md:w-[25%] lg:w-[20%]">
          <button className="cursor-pointer md:hidden">
            <img src="/images/mobile/icon-filter.svg" alt="Filter icon" />
          </button>
          <div className="hidden md:flex items-center gap-3">
            <input
              type="checkbox"
              name="job"
              id="job"
              className="size-5 appearance-none rounded-sm border border-gray-400 bg-white transition duration-200 checked:border-blue-600 checked:bg-blue-600 checked:relative checked:after:content-['✓'] checked:after:absolute  checked:after:left-1/2  checked:after:top-1/2  checked:after:-translate-x-1/2  checked:after:-translate-y-1/2  checked:after:text-sm  checked:after:font-bold  checked:after:text-white"
            />
            <label
              htmlFor="job"
              className="text-desciption font-bold text-jobs"
            >
              Full Time
            </label>
          </div>
          <button className="w-12 h-12 bg-btn-primary flex items-center justify-center rounded-main cursor-pointer">
            <img
              src="/images/desktop/icon-search.svg"
              alt="Search icon"
              className="brightness-0 invert"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InputSection;
