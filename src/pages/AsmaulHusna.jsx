import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  Search,
  CardAsmaulHusna,
  Loader,
  Error,
  ToTop,
} from "../components";
import { getAsmaulHusna } from "../services/getAsmaulHusna.service";
import { useEffect, useState } from "react";

const AsmaulHusna = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
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
          <HeaderMain
            title="Asma'ul Husna"
            paragraph="Nama-nama Allah SWT yang baik"
          />
          <Search next="Asma'ul Husna" setSearch={setSearch} />
          {loading && <Loader />}
          {error && <Error error={error} />}
          {data && <CardAsmaulHusna data={data.asmaulHusna} search={search} />}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AsmaulHusna;
