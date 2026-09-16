import JobFooter from "@/components/main/jobs/job-page-section/JobFooter";
import JobsPageSection from "@/components/main/jobs/job-page-section/JobsPageSection";
import JobPageContainer from "@/container/JobPageContaier";
import { useParams } from "react-router";

const Job = () => {
  const { id } = useParams();
  return (
    <>
      <JobPageContainer className="">
        <JobsPageSection id={id} />
      </JobPageContainer>
      <JobFooter id={id} />
    </>
  );
};

export default Job;
