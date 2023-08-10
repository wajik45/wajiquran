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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
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
          <Search next="Surat / kata kunci" setSearch={setSearch} />
          {loading && <Loader />}
          {error && <Error error={error} />}
          {data && <CardDaftarSurat data={data.data} search={search} />}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Quran;
