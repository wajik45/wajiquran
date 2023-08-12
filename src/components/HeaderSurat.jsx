import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  IconBxsLeftArrowAlt,
  IconList,
  IconPlayFill,
  IconPauseFill,
} from "./icons";

const HeaderSurat = ({ data, isDark }) => {
  const { id } = useParams();
  const [play, setPlay] = useState(false);

  const conditionalSelectClass = () => {
    return `${isDark ? "dark" : "light"}-bg-semi`;
  };

  const conditionalButtonClass = () => {
    return `
      ${isDark ? "light" : "dark"}-color
      ${isDark ? "light" : "dark"}-border
    `;
  };

  const handlePlayClick = () => {
    return alert("Masih dalam penegembangan");
    setPlay(!play);
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

  const handleQoriChange = (e) => {
    console.log("qori");
  };

  return (
    <>
      <div className="header-quran">
        <select
          onChange={handleAyatChange}
          className={conditionalSelectClass()}
        >
          <option value="">Pilih Ayat</option>
          {data.ayat.map((item) => (
            <option key={item.nomorAyat} value={item.nomorAyat}>
              {item.nomorAyat}
            </option>
          ))}
        </select>
        <select
          onChange={handleQoriChange}
          className={conditionalSelectClass()}
        >
          <option value="">Pilih Qori</option>
          {Object.values(data.audioFull).map((item, index) => (
            <option key={index} value={item}>
              {item.split("/")[4]}
            </option>
          ))}
        </select>
      </div>
      <div className="header-quran">
        <Link className={conditionalButtonClass()} to="/quran">
          <IconBxsLeftArrowAlt />
          <span>Daftar</span>
        </Link>
        <Link className={conditionalButtonClass()} to={`/quran/tafsir/${id}`}>
          <IconList />
          <span>Tafsir</span>
        </Link>
        <Link
          onClick={handlePlayClick}
          className={conditionalButtonClass()}
          to=""
        >
          {play ? (
            <>
              <IconPauseFill />
              <span>Pause</span>
            </>
          ) : (
            <>
              <IconPlayFill />
              <span>Play</span>
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default HeaderSurat;
