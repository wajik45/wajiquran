import { Link, useParams } from "react-router-dom";
import { IconBxsLeftArrowAlt } from "./icons";

const HeaderTafsir = ({ data }) => {
  const { id } = useParams();

  const handleChangeAyat = (e) => {
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
      <Link to={`/quran/surat/${id}`}>
        <IconBxsLeftArrowAlt />
        <span>Surat</span>
      </Link>
      <select onChange={handleChangeAyat}>
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
