import { MainLayout } from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import { putCacheKota, matchCacheKota } from "../services/getKota.service";
import { getDataByType } from "../services/getDataByType.service";
import { setTheme, online, title } from "../utils";
import * as components from "../components";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardKota, Loader, Error } = components;

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);
    title("Jadwal Shalat");

    (async () => {
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheKota,
          put: putCacheKota,
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
        title="Jadwal Shalat"
        paragraph="Jadwal Imsakiyah seluruh Kota di Indonesia"
      />
      <Search next="Kota / Kabupaten" setSearch={setSearch} isDark={isDark} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && <CardKota data={data} search={search} isDark={isDark} />
      )}
    </MainLayout>
  );
};

export default JadwalShalat;
