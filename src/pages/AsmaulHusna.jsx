import { MainLayout } from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { online, title } from "../utils";
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
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardAsmaulHusna, Loader, Error } = components;

  useEffect(() => {
    (async () => {
      title("Asma'ul Husna");
      online(setError, setRefresh);
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
    <MainLayout fixed={loading || error ? true : false}>
      <HeaderMain
        title="Asma'ul Husna"
        paragraph="Nama-nama Allah SWT yang baik"
      />
      <Search next="Asma'ul Husna / kata kunci" setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && <CardAsmaulHusna data={data.asmaulHusna} search={search} />
      )}
    </MainLayout>
  );
};

export default AsmaulHusna;
