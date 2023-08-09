import { Link } from "react-router-dom";
import { filtering } from "../utils";
import ItemNotFound from "./ItemNotFound";

const CardDaftarSurat = ({ data, search }) => {
  const filter = filtering(data, search);

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <Link
          to={`/quran/surat/${item.nomor}`}
          key={item.nomor}
          className="card"
        >
          <div className="card-header">
            <h5>
              {item.nomor}. {item.namaLatin}
            </h5>
          </div>
          <div className="card-body">
            <h3>{item.nama}</h3>
            <p>
              {item.tempatTurun} | {item.arti}
            </p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <ItemNotFound type="Surat" />
  );
};

export default CardDaftarSurat;
