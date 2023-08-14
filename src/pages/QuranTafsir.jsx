import { MainLayout } from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme, online } from "../utils";
import {
  putCacheTafsirById,
  matchCacheTafsirById,
} from "../services/getTafsirById.service";
import * as components from "../components";

const QuranTafsir = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const {
    HeaderMain,
    HeaderTafsir,
    CardTafsir,
    Loader,
    Error,
    NavigationQuran,
  } = components;

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
      setLoading(true);
      try {
        let response;
        let result;

        if (await matchCacheTafsirById(id)) {
          response = await matchCacheTafsirById(id);
          result = await response.json();

          setLoading(false);
          return setData(result.data);
        }

        await putCacheTafsirById(id);

        response = await matchCacheTafsirById(id);
        result = await response.json();

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
            <HeaderTafsir data={data} isDark={isDark} />
            <CardTafsir data={data.tafsir} isDark={isDark} />
            <NavigationQuran data={data} type="tafsir" isDark={isDark} />
          </>
        )
      )}
    </MainLayout>
  );
};

export default QuranTafsir;
