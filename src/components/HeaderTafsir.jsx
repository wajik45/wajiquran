import { Link, useParams } from "react-router-dom";
import { IconBxsLeftArrowAlt } from "./icons";

const HeaderTafsir = ({ data, isDark }) => {
  const { id } = useParams();

  const conditionalSelectClass = () => {
    return `${isDark ? "dark" : "light"}-bg-semi`;
  };

  const conditionalButtonClass = () => {
    return `
      ${isDark ? "light" : "dark"}-color
      ${isDark ? "light" : "dark"}-border
    `;
  };

  const handleAyatChange = (e) => {
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
      <Link className={conditionalButtonClass()} to={`/quran/surat/${id}`}>
        <IconBxsLeftArrowAlt />
        <span>Surat</span>
      </Link>
      <select onChange={handleAyatChange} className={conditionalSelectClass()}>
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
