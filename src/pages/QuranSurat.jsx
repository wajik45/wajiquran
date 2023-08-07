import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  Search,
  CardMain,
  Loader,
  Error,
} from "../components";
import { getSuratById } from "../services/getQuran.service";
import { useEffect, useState } from "react";

const QuranSurat = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await getSuratById(1);
        setLoading(false);
        setData(result.data.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          {loading ? (
            <Loader />
          ) : data ? (
            <HeaderMain
              title={`Surat ${data.namaLatin + " | " + data.nama}`}
              paragraph={`${
                data.tempatTurun + " | " + data.arti + " | " + data.jumlahAyat
              } Ayat`}
            />
          ) : (
            error && <Error error={error} />
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default QuranSurat;
