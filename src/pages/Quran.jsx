import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  Search,
  CardDaftarSurat,
  Loader,
  Error,
  ToTop,
} from "../components";
import { getSuratList } from "../services/getQuran.service";
import { useEffect, useState } from "react";

const Quran = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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
          <HeaderMain
            title="Al-Qur'an Al-Kariim"
            paragraph="Baca Al-Qur'an Terjemah & Latin"
          />
          <Search next="Surat" setSearch={setSearch} />
          {loading ? (
            <Loader />
          ) : data != 0 ? (
            <CardDaftarSurat data={data.data} search={search} />
          ) : (
            error && <Error error={error} />
          )}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Quran;
