import { Wrapper, Container, Content } from "../layouts";
import { Navbar, Header, Search, Card } from "../components";
import { getSuratList } from "../services/getQuran.service";
import { useEffect, useState } from "react";

const Quran = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await getSuratList();
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
          <Header title="Al-Quran Al-Kariim" paragraph="japoy wwkkwk" />
          <Search next="Surat" />
          {loading ? (
            <h1>LOADING</h1>
          ) : data != 0 ? (
            <Card data={data.data} />
          ) : (
            error && <h1>ERROR {error.message}</h1>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Quran;
