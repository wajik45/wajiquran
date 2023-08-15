import { MainLayout } from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { online, title } from "../utils";
import {
  putCacheTafsirById,
  matchCacheTafsirById,
} from "../services/getTafsirById.service";
import { getDataByType } from "../services/getDataByType.service";
import * as components from "../components";

const QuranTafsir = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const {
    HeaderMain,
    HeaderTafsir,
    CardTafsir,
    Loader,
    Error,
    NavigationQuran,
  } = components;

  useEffect(() => {
    (async () => {
      online(setError, setRefresh);
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheTafsirById,
          put: putCacheTafsirById,
          id: id,
        });

        title(`Tafsir Surat ${result.data.namaLatin}`);

        setLoading(false);
        setData(result.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [id, refresh]);

  return (
    <MainLayout fixed={loading || error ? true : false}>
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
            <HeaderTafsir data={data} />
            <CardTafsir data={data.tafsir} />
            <NavigationQuran data={data} type="tafsir" />
          </>
        )
      )}
    </MainLayout>
  );
};

export default QuranTafsir;
