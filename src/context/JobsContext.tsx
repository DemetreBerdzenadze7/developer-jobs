import { createContext, useContext, type ReactNode, useState } from "react";

interface JobTypes {
  titleFilter: string;
  setTitleFilter: (titleFilter: string) => void;
  locationFilter: string;
  setLocationFilter: (locationFilter: string) => void;
  checked: boolean;
  setChecked: (cheked: boolean) => void;
  search: boolean;
  setSearch: (search: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
}
interface Children {
  children: ReactNode;
}

const jobContext = createContext<null | JobTypes>(null);

export const JobProvider = ({ children }: Children) => {
  const [titleFilter, setTitleFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");

  return (
    <jobContext.Provider
      value={{
        titleFilter,
        setTitleFilter,
        locationFilter,
        setLocationFilter,
        checked,
        setChecked,
        search,
        setSearch,
        theme,
        setTheme,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(jobContext);
  if (!context) throw new Error("useJob must be used within JobProvider");
  return context;
};
