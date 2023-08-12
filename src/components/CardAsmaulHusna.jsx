import { filtering } from "../utils";
import ItemNotFound from "./ItemNotFound";

const CardAsmaulHusna = (props) => {
  const { data, search, isDark } = props;
  const filter = filtering(data, search);

  const conditionalThemeClass = () => {
    return `
      ${isDark ? "light" : "dark"}-border-sm
      ${isDark ? "dark" : "light"} card
    `;
  };

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <div key={item.nomor} className={conditionalThemeClass()}>
          <div className="card-header">
            <h5>
              {item.nomor}. {item.namaLatin}
            </h5>
          </div>
          <div className="card-body">
            <h3>{item.nama}</h3>
            <p>{item.arti}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <ItemNotFound type="Asma'ul Husna" />
  );
};

export default CardAsmaulHusna;
