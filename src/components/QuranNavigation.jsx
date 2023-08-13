import { Link } from "react-router-dom";

const QuranNavigation = ({ data, type, isDark }) => {
  const conditionalButtonClass = (type) => {
    return `
      ${isDark ? "light" : "dark"}-border
      ${isDark ? "light" : "dark"}-color
      ${type}
    `;
  };

  return (
    <div className="quran-navigation">
      {!data.suratSelanjutnya && (
        <Link
          to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
          className={conditionalButtonClass("left")}
        >
          ⬅ {data.suratSebelumnya.namaLatin}
        </Link>
      )}
      {!data.suratSebelumnya && (
        <Link
          to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
          className={conditionalButtonClass("right")}
        >
          {data.suratSelanjutnya.namaLatin} ➡
        </Link>
      )}
      {data.suratSelanjutnya && data.suratSebelumnya && (
        <>
          <Link
            to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
            className={conditionalButtonClass("left")}
          >
            ⬅ {data.suratSebelumnya.namaLatin}
          </Link>
          <Link
            to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
            className={conditionalButtonClass("right")}
          >
            {data.suratSelanjutnya.namaLatin} ➡
          </Link>
        </>
      )}
    </div>
  );
};

export default QuranNavigation;
