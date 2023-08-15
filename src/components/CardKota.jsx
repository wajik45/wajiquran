import { Link } from "react-router-dom";
import { filtering } from "../utils";
import NotFoundItem from "./NotFoundItem";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const CardKota = ({ data, search }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const filter = filtering(data, search);

  const conditionalCardClass = `
    ${isDarkMode ? "light" : "dark"}-color
    ${isDarkMode ? "light" : "dark"}-border-sm card
  `;

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <Link
          to={`/jadwal-shalat/kota/${item.id}`}
          key={item.id}
          className={conditionalCardClass}
        >
          <div className="card-header">
            <h5>{item.lokasi}</h5>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <NotFoundItem type="Kota / Kabupaten" />
  );
};

export default CardKota;
