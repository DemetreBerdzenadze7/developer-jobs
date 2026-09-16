import data from "../../../../data/data.json";

interface IId {
  id: string | undefined;
}

const JobFooter = ({ id }: IId) => {
  const job = data.find((item) => item.id === Number(id));
  return (
    <div className="bg-white p-6.25 absolute w-full text-center md:flex md:justify-center">
      <div className="w-full max-w-182.5 md:flex md:items-center md:justify-between">
        <div className="hidden md:flex flex-col items-start gap-3">
          <h2 className="font-bold text-main text-jobs">{job?.position}</h2>
          <p className="text-description">So Digital Inc.</p>
        </div>
        <button className="w-full bg-btn-primary py-4 rounded-main text-white font-bold md:w-35.25 cursor-pointer hover:bg-[#939bf4] ">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobFooter;
