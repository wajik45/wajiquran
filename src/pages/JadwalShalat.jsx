import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  Search,
  CardKota,
  Loader,
  Error,
  ToTop,
} from "../components";
import { useState, useEffect } from "react";
import { getKota } from "../services/getJadwalShalat.service";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const result = await getKota();
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
            title="Jadwal Shalat"
            paragraph="Jadwal Imsakiyah seluruh Kota di Indonesia"
          />
          <Search next="Kota / Kabupaten" setSearch={setSearch} />
          {loading && <Loader />}
          {error && <Error error={error} />}
          {data && <CardKota data={data} search={search} />}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default JadwalShalat;
