import Container from "@/container/Container";
import { Switch } from "../ui/switch";

const Header = () => {
  return (
    <header className="bg-[url(/images/mobile/bg-pattern-header.svg)] bg-no-repeat  w-full h-24">
      <Container>
        <div className="flex items-center justify-between">
          <img src="/images/desktop/logo.svg" alt="Logo" />
          <div className="flex items-center gap-2">
            <img src="/images/desktop/icon-sun.svg" alt="Sun" />
            <Switch></Switch>
            <img src="/images/desktop/icon-moon.svg" alt="Moon" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
