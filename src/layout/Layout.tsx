import Header from "@/components/header/Header";

import { Outlet } from "react-router";
import { JobProvider } from "@/context/JobsContext";

const Layout = () => {
  return (
    <>
      <JobProvider>
        <Header />
        <Outlet />
      </JobProvider>
    </>
  );
};

export default Layout;
