import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  HeaderTafsir,
  CardTafsir,
  Loader,
  Error,
} from "../components";
import { getTafsirById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuranTafsir = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
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
          {loading ? (
            <Loader />
          ) : data != 0 ? (
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
          ) : (
            error && <Error error={error} />
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default QuranTafsir;
