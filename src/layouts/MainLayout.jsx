import Wrapper from "./Wrapper";
import Container from "./Container";
import Content from "./Content";
import { Navbar, ToTop } from "../components";

export const MainLayout = ({ children, fixed }) => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content fixed={fixed}>
          {children}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};
