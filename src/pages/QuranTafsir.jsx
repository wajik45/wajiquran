import { MainLayout } from "../layouts/MainLayout";
import { getTafsirById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";
import * as components from "../components";

const QuranTafsir = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);

  const { HeaderMain, HeaderTafsir, CardTafsir, Loader, Error, ToTop } =
    components;

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
      try {
        const result = await getTafsirById(id);
        setLoading(false);
        setData(result.data.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, []);

  return (
    <MainLayout setIsDark={setIsDark} isDark={isDark}>
      {loading && <Loader />}
      {error && <Error />}
      {data && (
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
        </>
      )}
      <ToTop isDark={isDark} />
    </MainLayout>
  );
};

export default QuranTafsir;
