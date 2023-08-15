import { MainLayout } from "../layouts/MainLayout";
import {
  putCacheSuratList,
  matchCacheSuratList,
} from "../services/getSuratList.service";
import { getDataByType } from "../services/getDataByType.service";
import { useEffect, useState } from "react";
import { online, title } from "../utils";
import * as components from "../components";

const Quran = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardDaftarSurat, Loader, Error } = components;

  useEffect(() => {
    (async () => {
      title("Al-Qur'an");
      online(setError, setRefresh);
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheSuratList,
          put: putCacheSuratList,
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
        title="Al-Qur'an Al-Kariim"
        paragraph="Baca Al-Qur'an Terjemah & Latin"
      />
      <Search next="Surat / kata kunci" setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && <CardDaftarSurat data={data.data} search={search} />
      )}
    </MainLayout>
  );
};

export default Quran;
