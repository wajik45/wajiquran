import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  HeaderTafsir,
  CardTafsir,
  Loader,
  Error,
  ToTop,
} from "../components";
import { getTafsirById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";

const QuranTafsir = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);

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
    <Wrapper isDark={isDark}>
      <Navbar setIsDark={setIsDark} isDark={isDark} />
      <Container>
        <Content>
          {loading && <Loader />}
          {error && <Error />}
          {data && (
            <>
              <HeaderMain
                title={`Surat ${data.namaLatin + " | " + data.nama}`}
                paragraph={`${
                  data.tempatTurun + " | " + data.arti + " | " + data.jumlahAyat
                } Ayat`}
              />
              <HeaderTafsir data={data} isDark={isDark} />
              <CardTafsir data={data.tafsir} isDark={isDark} />
            </>
          )}
          <ToTop isDark={isDark} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default QuranTafsir;
