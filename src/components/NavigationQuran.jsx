import { Link } from "react-router-dom";
import { IconLeft, IconRight } from "./icons";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const NavigationQuran = ({ data, type }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalButtonClass = (type) => {
    return `
      ${isDarkMode ? "light" : "dark"}-border
      ${isDarkMode ? "light" : "dark"}-color
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
