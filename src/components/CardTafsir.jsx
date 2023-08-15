import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const CardTafsir = ({ data }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalCardClass = `
    ${isDarkMode ? "light" : "dark"}-border-sm card-quran
  `;

  const conditionalCardHeaderClass = `
    ${isDarkMode ? "dark" : "light"}-bg-semi card-quran-header
  `;

  return (
    <div className="card-quran-wrapper">
      {data.map((item) => (
        <div id={item.ayat} key={item.ayat} className={conditionalCardClass}>
          <div className={conditionalCardHeaderClass}>
            <h4>{item.ayat}.</h4>
          </div>
          <div className="card-quran-body">
            <p className="text-justify lh-md">{item.teks}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTafsir;
