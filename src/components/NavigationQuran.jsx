import { Link } from "react-router-dom";
import { IconLeft, IconRight } from "./icons";

const NavigationQuran = ({ data, type, isDark }) => {
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
          <IconLeft />
          <span>{data.suratSebelumnya.namaLatin}</span>
        </Link>
      )}
      {!data.suratSebelumnya && (
        <Link
          to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
          className={conditionalButtonClass("right")}
        >
          <span>{data.suratSelanjutnya.namaLatin}</span>
          <IconRight />
        </Link>
      )}
      {data.suratSelanjutnya && data.suratSebelumnya && (
        <>
          <Link
            to={`/quran/${type}/${data.suratSebelumnya.nomor}`}
            className={conditionalButtonClass("left")}
          >
            <IconLeft />
            <span>{data.suratSebelumnya.namaLatin}</span>
          </Link>
          <Link
            to={`/quran/${type}/${data.suratSelanjutnya.nomor}`}
            className={conditionalButtonClass("right")}
          >
            <span>{data.suratSelanjutnya.namaLatin}</span>
            <IconRight />
          </Link>
        </>
      )}
    </div>
  );
};

export default NavigationQuran;
