import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, JadwalTable, Loader, Error } from "../components";
import { useState, useEffect } from "react";
import { getJadwalShalat } from "../services/getJadwalShalat.service";
import { getDayName, getMonthName } from "../utils";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";

const JadwalShalatById = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);

  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const dayName = getDayName(day);
  const monthName = getMonthName(month);

  useEffect(() => {
    setTheme(setIsDark);
    (async () => {
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
    <MainLayout
      setIsDark={setIsDark}
      isDark={isDark}
      fixed={data ? false : true}
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <>
            <HeaderMain
              title={data.lokasi}
              paragraph={`Provinsi ${
                data.daerah
              }, ${dayName} ${`0${date}`.slice(-2)} ${monthName} ${year}`}
            />
            <JadwalTable data={data.jadwal} date={date} isDark={isDark} />
          </>
        )
      )}
    </MainLayout>
  );
};

export default JadwalShalatById;
