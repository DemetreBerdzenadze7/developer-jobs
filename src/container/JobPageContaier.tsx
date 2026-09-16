import type { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const JobPageContainer = ({ children, className }: IContainer) => {
  return (
    <div className={`max-w-182.5 w-full px-6 py-8 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default JobPageContainer;
