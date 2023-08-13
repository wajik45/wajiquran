import { MainLayout } from "../layouts/MainLayout";
import { getSuratById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";
import * as components from "../components";

const QuranSurat = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);

  const {
    HeaderMain,
    Loader,
    Error,
    HeaderSurat,
    CardAyat,
    Bismillah,
    QuranNavigation,
  } = components;

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
      setLoading(true);
      try {
        const result = await getSuratById(id);
        setLoading(false);
        setData(result.data.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [id]);

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
            <QuranNavigation data={data} type="surat" isDark={isDark} />
          </>
        )
      )}
    </MainLayout>
  );
};

export default QuranSurat;
