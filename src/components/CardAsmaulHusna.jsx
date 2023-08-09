import { filtering } from "../utils";
import ItemNotFound from "./ItemNotFound";

const CardAsmaulHusna = ({ data, search }) => {
  const filter = filtering(data, search);

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <div key={item.nomor} className="card">
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
