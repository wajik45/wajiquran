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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
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
          {loading ? (
            <Loader />
          ) : data != 0 ? (
            <CardKota data={data} search={search} />
          ) : (
            error && <Error error={error} />
          )}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default JadwalShalat;
