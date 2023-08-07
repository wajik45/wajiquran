import { Wrapper, Container, Content } from "../layouts";
import { Navbar, Header, Search, CardKota, Loader, Error } from "../components";
import { useState, useEffect } from "react";
import { getKota } from "../services/getJadwalShalat.service";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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
          <Header title="Jadwal Shalat" paragraph="japoy wwkkwk" />
          <Search next="Kota / Kabupaten" />
          {loading ? (
            <Loader />
          ) : data != 0 ? (
            <CardKota data={data} />
          ) : (
            error && <Error error={error} />
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default JadwalShalat;
