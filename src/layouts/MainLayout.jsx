import Wrapper from "./Wrapper";
import Container from "./Container";
import Content from "./Content";
import { Navbar } from "../components";

export const MainLayout = (props) => {
  const { children, setIsDark, isDark } = props;

  return (
    <Wrapper isDark={isDark}>
      <Navbar setIsDark={setIsDark} isDark={isDark} />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
