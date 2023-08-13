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
          <span>⬅ {data.suratSebelumnya.namaLatin}</span>
        </Link>
      )}
      {!data.suratSebelumnya && (
        <Link
          to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
          className={conditionalButtonClass("right")}
        >
          <span>{data.suratSelanjutnya.namaLatin} ➡</span>
        </Link>
      )}
      {data.suratSelanjutnya && data.suratSebelumnya && (
        <>
          <Link
            to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
            className={conditionalButtonClass("left")}
          >
            <span>⬅ {data.suratSebelumnya.namaLatin}</span>
          </Link>
          <Link
            to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
            className={conditionalButtonClass("right")}
          >
            <span>{data.suratSelanjutnya.namaLatin} ➡</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default QuranNavigation;
