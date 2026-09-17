import {
  createContext,
  useContext,
  type ReactNode,
  useEffect,
  useState,
} from "react";

interface JobTypes {
  titleFilter: string;
  setTitleFilter: (titleFilter: string) => void;
  locationFilter: string;
  setLocationFilter: (locationFilter: string) => void;
  checked: boolean;
  setChecked: (cheked: boolean) => void;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
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
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.style.backgroundColor =
      theme === "dark" ? "#121721" : "#f4f6f8";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <jobContext.Provider
      value={{
        titleFilter,
        setTitleFilter,
        locationFilter,
        setLocationFilter,
        checked,
        setChecked,
        theme,
        setTheme,
        clicked,
        setClicked,
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
