import { Wrapper, Container, Content } from "../layouts";
import {
  Navbar,
  HeaderMain,
  JadwalTable,
  Loader,
  Error,
  ToTop,
} from "../components";
import { useState, useEffect } from "react";
import { getJadwalShalat } from "../services/getJadwalShalat.service";
import { getDayName, getMonthName } from "../utils";
import { useParams } from "react-router-dom";

const JadwalShalatById = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const dayName = getDayName(day);
  const monthName = getMonthName(month);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await getJadwalShalat({ id, year, month });
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
                title={data.lokasi}
                paragraph={`Provinsi ${
                  data.daerah
                }, ${dayName} ${`0${date}`.slice(-2)} ${monthName} ${year}`}
              />
              <JadwalTable data={data.jadwal} date={date} />
            </>
          ) : (
            error && <Error error={error} />
          )}
          <ToTop />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default JadwalShalatById;
