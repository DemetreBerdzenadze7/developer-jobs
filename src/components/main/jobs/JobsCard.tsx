import data from "../../../data/data.json";
import { Link } from "react-router";
import { useJob } from "@/context/JobsContext";

const JobsCard = () => {
  const { titleFilter, locationFilter, checked, theme } = useJob();

  const fullTime = data.filter((item) => item.contract === "Full Time");

  const filtered = data.filter(
    (item) =>
      item.position.toLowerCase().includes(titleFilter.toLowerCase()) &&
      item.location.toLowerCase().includes(locationFilter.toLowerCase()),
  );

  const cardClass =
    theme === "dark"
      ? "w-87.5 h-60 bg-jobs rounded-main py-9 px-8 relative shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
      : "w-87.5 h-60 bg-white rounded-main py-9 px-8 relative shadow-[0_15px_30px_rgba(25,32,45,0.08)]";

  const titleClass =
    theme === "dark"
      ? "text-main font-bold my-4 text-white"
      : "text-jobs text-main font-bold my-4";

  return (
    <div>
      <div className="flex flex-col gap-12.5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {checked ? (
          <>
            {fullTime.map((item) => (
              <Link key={item.id} to={`job/${item.id}`}>
                <div className={cardClass}>
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
                  <h2 className={titleClass}>{item.position}</h2>
                  <p className="text-description">{item.company}</p>
                  <p className="mt-5 text-country text-btn-primary font-bold ">
                    {item.location}
                  </p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <Link key={item.id} to={`job/${item.id}`}>
                  <div className={cardClass}>
                    <div
                      className="w-12.5 h-12.5 rounded-[15px] flex items-center justify-center absolute -top-7"
                      style={{ backgroundColor: item.logoBackground }}
                    >
                      <img src={item.logo} alt={item.company} />
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-description">{item.postedAt}</p>
                      <div className="rounded-[50%] bg-description w-1 h-1"></div>
                      <p className="text-description">{item.contract}</p>
                    </div>
                    <h2 className={titleClass}>{item.position}</h2>
                    <p className="text-description">{item.company}</p>
                    <p className="mt-5 text-country text-btn-primary font-bold">
                      {item.location}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-2xl font-bold text-gray-400">
                No jobs found 😕
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsCard;
