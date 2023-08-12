import { Wrapper, Container, Content } from "../layouts";
import { Navbar, HeaderMain, HomeNavigation } from "../components";
import { useEffect, useState } from "react";
import { setTheme } from "../utils";

const Home = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    setTheme(setIsDark);
  }, []);

  return (
    <Wrapper isDark={isDark}>
      <Navbar setIsDark={setIsDark} isDark={isDark} />
      <Container>
        <Content fixed={true}>
          <HeaderMain
            title="WajiQuran.id"
            paragraph="Created with ♥ by Haikal"
          />
          <HomeNavigation isDark={isDark} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
