import { MainLayout } from "../layouts/MainLayout";
import { getAsmaulHusna } from "../services/getAsmaulHusna.service";
import { useEffect, useState } from "react";
import { setTheme } from "../utils";
import * as components from "../components";

const AsmaulHusna = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");

  const { HeaderMain, Search, CardAsmaulHusna, Loader, Error } = components;

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
    <MainLayout
      setIsDark={setIsDark}
      isDark={isDark}
      fixed={loading || error ? true : false}
    >
      <HeaderMain
        title="Asma'ul Husna"
        paragraph="Nama-nama Allah SWT yang baik"
      />
      <Search
        next="Asma'ul Husna / kata kunci"
        setSearch={setSearch}
        isDark={isDark}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <CardAsmaulHusna
            data={data.asmaulHusna}
            search={search}
            isDark={isDark}
          />
        )
      )}
    </MainLayout>
  );
};

export default AsmaulHusna;
