import data from "../../../../data/data.json";
import { useJob } from "@/context/JobsContext";
import JobDescription from "./JobDescription";

interface IId {
  id: string | undefined;
}

const JobsPageSection = ({ id }: IId) => {
  const { theme } = useJob();
  const job = data.find((item) => item.id === Number(id));
  const isDark = theme === "dark";

  return (
    <div className="-mt-12 lg:-mt-20">
      <div
        className={
          isDark
            ? "flex flex-col gap-5 items-center bg-jobs py-8 px-10 rounded-main relative md:flex-row md:items-center md:justify-between md:w-full md:p-0 shadow-[0_15px_30px_rgba(0,0,0,0.22)]"
            : "flex flex-col gap-5 items-center bg-white py-8 px-10 rounded-main relative md:flex-row md:items-center md:justify-between md:w-full md:p-0 shadow-[0_15px_30px_rgba(25,32,45,0.08)]"
        }
      >
        <div
          className="absolute w-12.5 h-12.5 flex items-center justify-center rounded-[15px] -top-6 left-1/2 -translate-x-1/2 md:hidden"
          style={{ backgroundColor: `${job?.logoBackground}` }}
        >
          <img src={job?.logo} alt={job?.company} />
        </div>
        <div className="flex items-center">
          <div
            className="hidden md:flex w-35 h-35 items-center justify-center"
            style={{ backgroundColor: `${job?.logoBackground}` }}
          >
            <img src={job?.logo} alt={job?.company} className="w-20" />
          </div>
          <div className="md:pl-10 text-center md:text-left">
            <h2
              className={
                isDark
                  ? "text-main font-bold text-white"
                  : "text-main font-bold text-jobs"
              }
            >
              {job?.company}
            </h2>
            <p className="text-description">{job?.company}.com</p>
          </div>
        </div>
        <div className="rounded-main bg-btn-primary/5 py-4 px-5 text-center md:mr-10">
          <a href={job?.website} className="text-btn-primary font-bold">
            Company Site
          </a>
        </div>
      </div>

      {job && <JobDescription job={job} />}
    </div>
  );
};

export default JobsPageSection;
