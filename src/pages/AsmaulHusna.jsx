import { Wrapper, Container, Content } from "../layouts";
import { Navbar, Header, Search, Card } from "../components";
import { getAsmaulHusna } from "../services/getAsmaulHusna.service";
import { useEffect, useState } from "react";

const AsmaulHusna = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await getAsmaulHusna();
        setLoading(false);
        setData(result.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          <Header title="Asma'ul Husna" paragraph="japoy wwkkwk" />
          <Search next="Asma'ul Husna" />
          {loading ? (
            <h1>LOADING!!</h1>
          ) : data != 0 ? (
            <Card data={data.asmaulHusna} />
          ) : (
            error && <h1>ERROR</h1>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AsmaulHusna;
