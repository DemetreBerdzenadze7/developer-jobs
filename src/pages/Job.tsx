import JobFooter from "@/components/main/jobs/job-page-section/JobFooter";
import JobsPageSection from "@/components/main/jobs/job-page-section/JobsPageSection";
import JobPageContainer from "@/container/JobPageContaier";
import { JobProvider } from "@/context/JobsContext";
import { useParams } from "react-router";

const Job = () => {
  const { id } = useParams();
  return (
    <JobProvider>
      <JobPageContainer>
        <JobsPageSection id={id} />
      </JobPageContainer>
      <JobFooter id={id} />
    </JobProvider>
  );
};

export default Job;
