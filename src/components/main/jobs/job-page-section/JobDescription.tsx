import data from "../../../../data/data.json";

interface IJobDescription {
  job: (typeof data)[0];
}

const JobDescription = ({ job }: IJobDescription) => {
  return (
    <div className="mt-6 rounded-main">
      <div className="bg-white py-10 px-6 rounded-main md:px-12">
        <div className="flex items-center gap-3">
          <p className="text-description">{job.postedAt}</p>
          <div className="h-1 w-1 rounded-[50px] bg-description "></div>
          <p className="text-description">{job.contract}</p>
        </div>
        <div className="mt-2.75 flex flex-col md:flex-row md:items-center md:justify-between  ">
          <div className="flex flex-col gap-3">
            <h2 className="text-main text-jobs font-bold md:text-[28px]">
              {job.position}
            </h2>
            <p className="text-btn-primary font-bold text-country  ">
              {job.location}
            </p>
          </div>
          <button className="bg-btn-primary py-4  rounded-main text-white  mt-13 md:mt-0 md:px-7 cursor-poiner ">
            Apply Now
          </button>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-description leading-[1.63]">{job.description}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-main font-bold text-jobs">Requirments</h2>
          <p className="text-description mt-7">{job.requirements.content}</p>
          <ul className="list-disc mt-8 px-4">
            {job.requirements.items.map((item) => (
              <li key-={item} className="mb-2 text-description">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-main font-bold text-jobs">What You Will Do</h2>
          <p className="text-description mt-7">{job.role.content}</p>
          <ul className="list-decimal px-3 mt-8">
            {job.role.items.map((item) => (
              <li key={item} className="mb-2 text-description">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default JobDescription;
