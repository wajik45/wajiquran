import { MainLayout } from "../layouts/MainLayout";
import {
  putCacheSuratList,
  matchCacheSuratList,
} from "../services/getSuratList.service";
import { useEffect, useState } from "react";
import { setTheme, online } from "../utils";
import * as components from "../components";

const Quran = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardDaftarSurat, Loader, Error } = components;

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
      setLoading(true);
      try {
        let response;
        let result;

        if (await matchCacheSuratList()) {
          response = await matchCacheSuratList();
          result = await response.json();

          setLoading(false);
          return setData(result);
        }

        await putCacheSuratList();

        response = await matchCacheSuratList();
        result = await response.json();

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
        title="Al-Qur'an Al-Kariim"
        paragraph="Baca Al-Qur'an Terjemah & Latin"
      />
      <Search next="Surat / kata kunci" setSearch={setSearch} isDark={isDark} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <CardDaftarSurat data={data.data} search={search} isDark={isDark} />
        )
      )}
    </MainLayout>
  );
};

export default Quran;
