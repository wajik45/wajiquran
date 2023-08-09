import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const HeaderSurat = ({ data }) => {
  const { id } = useParams();
  const [play, setPlay] = useState(false);
  const audio = new Audio("");

  const location = useLocation();

  const handleClickPlay = (e) => {
    e.preventDefault();
    setPlay(!play);
    console.log("ok");
  };

  const handleChangeAyat = (e) => {
    const element = document.getElementById(e.target.value);
    scrollTo({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
    e.target.selectedIndex = 0;
  };

  const handleChangeQori = (e) => {
    console.log("qori");
  };

  return (
    <>
      <div className="header-quran">
        <select onChange={handleChangeAyat}>
          <option value="">Pilih Ayat</option>
          {data.ayat.map((item) => (
            <option key={item.nomorAyat} value={item.nomorAyat}>
              {item.nomorAyat}
            </option>
          ))}
        </select>
        <select onChange={handleChangeQori}>
          <option value="">Pilih Qori</option>
          {Object.values(data.audioFull).map((item, index) => (
            <option key={index} value={item}>
              {item.split("/")[4]}
            </option>
          ))}
        </select>
      </div>
      <div className="header-quran">
        <Link to="/quran">Daftar</Link>
        <Link to={`/quran/tafsir/${id}`}>Tafsir</Link>
        <Link to="" onClick={handleClickPlay}>
          Play
        </Link>
      </div>
    </>
  );
};

export default HeaderSurat;
