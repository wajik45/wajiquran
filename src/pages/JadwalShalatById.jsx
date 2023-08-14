import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, TableJadwal, Loader, Error } from "../components";
import { useState, useEffect } from "react";
import {
  putCacheJadwalShalatById,
  matchCacheJadwalShalatById,
} from "../services/getJadwalShalatById.service";
import { getDayName, getMonthName, online, title } from "../utils";
import { useParams } from "react-router-dom";
import { setTheme } from "../utils";
import { getDataByType } from "../services/getDataByType.service";

const JadwalShalatById = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const dayName = getDayName(day);
  const monthName = getMonthName(month);

  online(setError, setRefresh);

  useEffect(() => {
    setTheme(setIsDark);

    (async () => {
      setLoading(true);

      try {
        const result = await getDataByType({
          match: matchCacheJadwalShalatById,
          put: putCacheJadwalShalatById,
          id: id,
          month: month,
          year: year,
        });

        title(`Jadwal Shalat | ${data.lokasi}`);

        setLoading(false);
        setData(result.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [refresh]);

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
              title={data.lokasi}
              paragraph={`Provinsi ${
                data.daerah
              }, ${dayName} ${`0${date}`.slice(-2)} ${monthName} ${year}`}
            />
            <TableJadwal data={data.jadwal} date={date} isDark={isDark} />
          </>
        )
      )}
    </MainLayout>
  );
};

export default JadwalShalatById;
