import type { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={`max-w-300 w-full px-6 py-8 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
