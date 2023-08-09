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

const QuranTafsir = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <Wrapper>
      <Navbar />
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
              <HeaderTafsir data={data} />
              <CardTafsir data={data.tafsir} />
            </>
          )}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default QuranTafsir;
