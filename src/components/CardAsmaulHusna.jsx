import { filtering } from "../utils";
import NotFoundItem from "./NotFoundItem";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const CardAsmaulHusna = ({ data, search }) => {
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
        <div key={item.nomor} className={conditionalCardClass}>
          <div className="card-header">
            <h5>
              {item.nomor}. {item.namaLatin}
            </h5>
          </div>
          <div className="card-body">
            <h3 className="font-arab">{item.nama}</h3>
            <p>{item.arti}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <NotFoundItem type="Asma'ul Husna" />
  );
};

export default CardAsmaulHusna;
