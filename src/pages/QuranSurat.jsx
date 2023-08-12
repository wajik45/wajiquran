import { MainLayout } from "../layouts/MainLayout";
import { getSuratById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";
import * as components from "../components";

const QuranSurat = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);

  const { HeaderMain, Loader, Error, ToTop, HeaderSurat, CardAyat } =
    components;

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
      try {
        const result = await getSuratById(id);
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
      {error && <Error error={error} />}
      {data && (
        <>
          <HeaderMain
            title={`Surat ${data.namaLatin} |`}
            arab={data.nama}
            paragraph={`${
              data.tempatTurun + " | " + data.arti + " | " + data.jumlahAyat
            } Ayat`}
          />
          <HeaderSurat data={data} isDark={isDark} />
          <CardAyat data={data.ayat} isDark={isDark} />
        </>
      )}
      <ToTop isDark={isDark} />
    </MainLayout>
  );
};

export default QuranSurat;
