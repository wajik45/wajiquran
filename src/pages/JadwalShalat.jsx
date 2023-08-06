import { Wrapper, Container, Content } from "../layouts";
import { Navbar, Header, Search } from "../components";

const JadwalShalat = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          <Header title="Jadwal Shalat" paragraph="japoy wwkkwk" />
          <Search next="Kota" />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default JadwalShalat;
