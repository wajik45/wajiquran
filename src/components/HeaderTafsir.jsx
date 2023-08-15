import { Link, useParams } from "react-router-dom";
import { IconLeft } from "./icons";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const HeaderTafsir = ({ data }) => {
  const { id } = useParams();
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalSelectClass = `${isDarkMode ? "dark" : "light"}-bg-semi`;

  const conditionalButtonClass = `
    ${isDarkMode ? "light" : "dark"}-color
    ${isDarkMode ? "light" : "dark"}-border
  `;

  const hadleAyat = (e) => {
    const element = document.getElementById(e.target.value);
    scrollTo({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
    e.target.selectedIndex = 0;
  };

  return (
    <div className="header-quran">
      <Link className={conditionalButtonClass} to={`/quran/surat/${id}`}>
        <IconLeft />
        <span>Surat</span>
      </Link>
      <select onChange={hadleAyat} className={conditionalSelectClass}>
        <option value="">Pilih Ayat</option>
        {data.tafsir.map((item) => (
          <option key={item.ayat} value={item.ayat}>
            {item.ayat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderTafsir;
