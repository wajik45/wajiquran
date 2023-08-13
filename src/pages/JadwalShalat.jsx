import { MainLayout } from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import { getKota } from "../services/getJadwalShalat.service";
import { setTheme } from "../utils";
import * as components from "../components";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");

  const { HeaderMain, Search, CardKota, Loader, Error } = components;

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
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
    <MainLayout
      setIsDark={setIsDark}
      isDark={isDark}
      fixed={loading ? true : false}
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
