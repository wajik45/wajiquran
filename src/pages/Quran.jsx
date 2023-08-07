import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  Search,
  CardMain,
  Loader,
  Error,
} from "../components";
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
          <HeaderMain title="Al-Qur'an Al-Kariim" paragraph="japoy wwkkwk" />
          <Search next="Surat" />
          {loading ? (
            <Loader />
          ) : data != 0 ? (
            <CardMain data={data.data} />
          ) : (
            error && <Error error={error} />
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Quran;
