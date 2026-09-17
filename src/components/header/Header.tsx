import Container from "@/container/Container";
import { Switch } from "../ui/switch";
import { useJob } from "@/context/JobsContext";

const Header = () => {
  const { theme, setTheme } = useJob();

  return (
    <header className="bg-[url(/images/mobile/bg-pattern-header.svg)] md:bg-[url(/images/tablet/bg-pattern-header.svg)] lg:bg-[url(/images/desktop/bg-pattern-header.svg)] bg-no-repeat bg-cover  w-full h-34 md:h-40">
      <Container>
        <div className="flex items-center justify-between">
          <img src="/images/desktop/logo.svg" alt="Logo" />
          <div className="flex items-center gap-2">
            <img src="/images/desktop/icon-sun.svg" alt="Sun" />
            <Switch
              checked={theme === "dark" ? true : false}
              onCheckedChange={(e) =>
                e ? setTheme("dark") : setTheme("light")
              }
            ></Switch>
            <img src="/images/desktop/icon-moon.svg" alt="Moon" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
