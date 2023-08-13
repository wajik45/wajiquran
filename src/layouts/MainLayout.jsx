import Wrapper from "./Wrapper";
import Container from "./Container";
import Content from "./Content";
import { Navbar, ToTop } from "../components";

export const MainLayout = (props) => {
  const { children, setIsDark, isDark, fixed } = props;

  return (
    <Wrapper isDark={isDark}>
      <Navbar setIsDark={setIsDark} isDark={isDark} />
      <Container>
        <Content fixed={fixed}>
          {children}
          <ToTop isDark={isDark} />
        </Content>
      </Container>
    </Wrapper>
  );
};
