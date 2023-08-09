import { Wrapper, Container, Content } from "../layouts";
import { Navbar, HeaderMain, HomeNavigation } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content fixed={true}>
          <HeaderMain
            title="WajiQuran.id"
            paragraph="Created with ♥ by Haikal"
          />
          <HomeNavigation />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
