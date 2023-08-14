import { MainLayout } from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { setTheme, online, title } from "../utils";
import * as components from "../components";
import {
  putCacheAsmaulHusna,
  matchCacheAsmaulHusna,
} from "../services/getAsmaulHusna.service";
import { getDataByType } from "../services/getDataByType.service";

const AsmaulHusna = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardAsmaulHusna, Loader, Error } = components;

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);
    title("Asma'ul Husna");

    (async () => {
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheAsmaulHusna,
          put: putCacheAsmaulHusna,
        });

        setLoading(false);
        setData(result);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [refresh]);

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
