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
import { setTheme } from "../utils";

const AsmaulHusna = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTheme(setIsDark);
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
    <Wrapper isDark={isDark}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Container>
        <Content>
          <HeaderMain
            title="Asma'ul Husna"
            paragraph="Nama-nama Allah SWT yang baik"
          />
          <Search
            next="Asma'ul Husna / kata kunci"
            setSearch={setSearch}
            isDark={isDark}
          />
          {loading && <Loader />}
          {error && <Error error={error} />}
          {data && (
            <CardAsmaulHusna
              data={data.asmaulHusna}
              search={search}
              isDark={isDark}
            />
          )}
          <ToTop isDark={isDark} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AsmaulHusna;
