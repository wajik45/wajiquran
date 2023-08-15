import { Link } from "react-router-dom";
import { filtering } from "../utils";
import NotFoundItem from "./NotFoundItem";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const CardDaftarSurat = ({ data, search }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const filter = filtering(data, search);

  const conditionalCardClass = `
    ${isDarkMode ? "light" : "dark"}-color
    ${isDarkMode ? "light" : "dark"}-border-sm
    ${isDarkMode ? "dark" : "light"}-bg-semi card
  `;

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <Link
          to={`/quran/surat/${item.nomor}`}
          key={item.nomor}
          className={conditionalCardClass}
        >
          <div className="card-header">
            <h5>
              {item.nomor}. {item.namaLatin}
            </h5>
          </div>
          <div className="card-body">
            <h3 className="font-arab">{item.nama}</h3>
            <p>
              {item.tempatTurun} | {item.arti}
            </p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <NotFoundItem type="Surat" />
  );
};

export default CardDaftarSurat;
