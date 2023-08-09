import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  HeaderSurat,
  Loader,
  Error,
  CardAyat,
  ToTop,
} from "../components";
import { getSuratById } from "../services/getQuran.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuranSurat = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {data && (
            <>
              <HeaderMain
                title={`Surat ${data.namaLatin + " | " + data.nama}`}
                paragraph={`${
                  data.tempatTurun + " | " + data.arti + " | " + data.jumlahAyat
                } Ayat`}
              />
              <HeaderSurat data={data} />
              <CardAyat data={data.ayat} />
            </>
          )}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default QuranSurat;
