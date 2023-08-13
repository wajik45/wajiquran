import { MainLayout } from "../layouts/MainLayout";
import { getSuratList } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { setTheme } from "../utils";
import * as components from "../components";

const Quran = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [search, setSearch] = useState("");

  const { HeaderMain, Search, CardDaftarSurat, Loader, Error } = components;
  const cachedData = localStorage.getItem("daftar-surat");

  useEffect(() => {
    setTheme(setIsDark);

    if (cachedData) return setData(JSON.parse(cachedData));

    (async () => {
      setLoading(true);
      try {
        const result = await getSuratList();
        setLoading(false);
        setData(result.data);

        result.data.exp = Date.now() + 43200000;

        localStorage.setItem("daftar-surat", JSON.stringify(result.data));
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, []);

  if (data?.exp <= Date.now()) {
    localStorage.removeItem("daftar-surat");
  }

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
