import { Wrapper, Container, Content } from "../layouts";
import { Navbar, Header, HomeNavigation } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content fixed={true}>
          <Header title="WajiQuran.id" paragraph="Create by Haikal" />
          <HomeNavigation />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
