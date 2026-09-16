import data from "../../../data/data.json";
import { Link } from "react-router";
import { useState } from "react";

const JobsCard = () => {
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const hadnleLoadMore = () => {
    const remainingJobs = data.length - visibleCount;
    if (visibleCount > data.length) {
      return;
    }
    setVisibleCount((prev) => prev + remainingJobs);
  };
  return (
    <div>
      <div className="flex flex-col gap-12.5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, visibleCount).map((item) => (
          <Link key={item.id} to={`job/${item.id}`}>
            <div className="w-87.5 h-60 bg-white rounded-main py-9 px-8 relative">
              <div
                className="w-12.5 h-12.5 rounded-[15px] flex items-center justify-center absolute -top-7 "
                style={{ backgroundColor: item.logoBackground }}
              >
                <img src={item.logo} alt={item.company} />
              </div>
              <div className="flex items-center gap-3">
                <p className="text-description">{item.postedAt}</p>
                <div className="rounded-[50%] bg-description w-1 h-1 "></div>
                <p className="text-description ">{item.contract}</p>
              </div>
              <h2 className="text-jobs text-main font-bold my-4 ">
                {item.position}
              </h2>
              <p className="text-description">{item.company}</p>
              <p className="mt-5 text-country text-btn-primary font-bold ">
                {item.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="bg-btn-primary text-center rounded-main text-white font-bold w-30 h-14 cursor-pointer hover:bg-[#939bf4]"
          onClick={hadnleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
