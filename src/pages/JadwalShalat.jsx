import { MainLayout } from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import { putCacheKota, matchCacheKota } from "../services/getKota.service";
import { getDataByType } from "../services/getDataByType.service";
import { online, title } from "../utils";
import * as components from "../components";

const JadwalShalat = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const { HeaderMain, Search, CardKota, Loader, Error } = components;

  useEffect(() => {
    (async () => {
      title("Jadwal Shalat");
      online(setError, setRefresh);
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
    <MainLayout fixed={loading || error ? true : false}>
      <HeaderMain
        title="Jadwal Shalat"
        paragraph="Jadwal Imsakiyah seluruh Kota di Indonesia"
      />
      <Search next="Kota / Kabupaten" setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && <CardKota data={data} search={search} />
      )}
    </MainLayout>
  );
};

export default JadwalShalat;
