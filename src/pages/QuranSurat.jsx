import { MainLayout } from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme, online, title } from "../utils";
import {
  putCacheSuratById,
  matchCacheSuratById,
} from "../services/getSuratById.service";
import { getDataByType } from "../services/getDataByType.service";
import * as components from "../components";

const QuranSurat = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const {
    HeaderMain,
    Loader,
    Error,
    HeaderSurat,
    CardAyat,
    Bismillah,
    NavigationQuran,
  } = components;

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);

    (async () => {
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheSuratById,
          put: putCacheSuratById,
          id: id,
        });

        title(`Surat ${result.data.namaLatin}`);

        setLoading(false);
        setData(result.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [id, refresh]);

  return (
    <MainLayout
      setIsDark={setIsDark}
      isDark={isDark}
      fixed={loading || error ? true : false}
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <>
            <HeaderMain
              title={`Surat ${data.namaLatin} |`}
              arab={data.nama}
              paragraph={`${
                data.tempatTurun + " | " + data.arti + " | " + data.jumlahAyat
              } Ayat`}
            />
            <HeaderSurat data={data} isDark={isDark} />
            <Bismillah isDark={isDark} />
            <CardAyat data={data.ayat} isDark={isDark} />
            <NavigationQuran data={data} type="surat" isDark={isDark} />
          </>
        )
      )}
    </MainLayout>
  );
};

export default QuranSurat;
