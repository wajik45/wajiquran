import { MainLayout } from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import { getKota } from "../services/getJadwalShalat.service";
import { setTheme } from "../utils";
import * as components from "../components";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");

  const { HeaderMain, Search, CardKota, Loader, Error } = components;
  const cachedData = localStorage.getItem("jadwal-shalat");

  useEffect(() => {
    setTheme(setIsDark);

    if (cachedData) return setData(JSON.parse(cachedData));

    (async () => {
      setLoading(true);
      try {
        const result = await getKota();
        setLoading(false);
        setData(result);

        result.exp = Date.now() + 43200000;

        localStorage.setItem("jadwal-shalat", JSON.stringify(result));
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, []);

  if (data?.exp <= Date.now()) {
    localStorage.removeItem("jadwal-shalat");
  }

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
        data && <CardKota data={data.data} search={search} isDark={isDark} />
      )}
    </MainLayout>
  );
};

export default JadwalShalat;
