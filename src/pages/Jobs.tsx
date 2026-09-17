import InputSection from "@/components/main/input-section/InputSection";
import JobsSection from "@/components/main/jobs/JobsSection";
import Container from "@/container/Container";
import { JobProvider } from "@/context/JobsContext";

const Jobs = () => {
  return (
    <JobProvider>
      <Container>
        <InputSection />
        <JobsSection />
      </Container>
    </JobProvider>
  );
};

export default Jobs;
