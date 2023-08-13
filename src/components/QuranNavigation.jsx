import { Link } from "react-router-dom";

const QuranNavigation = ({ data, type }) => {
  return (
    <div className="quran-navigation">
      {!data.suratSelanjutnya && (
        <Link
          to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
          className="left light-border light-color"
        >
          ⬅ {data.suratSebelumnya.namaLatin}
        </Link>
      )}
      {!data.suratSebelumnya && (
        <Link
          to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
          className="right light-border light-color"
        >
          {data.suratSelanjutnya.namaLatin} ➡
        </Link>
      )}
      {data.suratSelanjutnya && data.suratSebelumnya && (
        <>
          <Link
            to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
            className="left light-border light-color"
          >
            ⬅ {data.suratSebelumnya.namaLatin}
          </Link>
          <Link
            to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
            className="right light-border light-color"
          >
            {data.suratSelanjutnya.namaLatin} ➡
          </Link>
        </>
      )}
    </div>
  );
};

export default QuranNavigation;
