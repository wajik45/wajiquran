import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const CardAyat = ({ data }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalCardClass = `
    ${isDarkMode ? "light" : "dark"}-border-sm card-quran
  `;

  const conditionalCardHeaderClass = `
    ${isDarkMode ? "dark" : "light"}-bg-semi card-quran-header
  `;

  const conditionalLineClass = `${isDarkMode ? "dark" : "light"} line`;

  return (
    <div className="card-quran-wrapper">
      {data.map((item) => (
        <div
          id={item.nomorAyat}
          key={item.nomorAyat}
          className={conditionalCardClass}
        >
          <div className={conditionalCardHeaderClass}>
            <h4>{item.nomorAyat}.</h4>
          </div>
          <div className="card-quran-body">
            <h1 className="lh-lg font-arab">{item.teksArab}</h1>
            <p>
              <b>{item.teksLatin}</b>
            </p>
            <div className={conditionalLineClass}></div>
            <p className="lh-md">{item.teksIndonesia}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAyat;
