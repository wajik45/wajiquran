import { Link } from "react-router-dom";
import { filtering } from "../utils";
import ItemNotFound from "./ItemNotFound";

const CardKota = ({ data, search }) => {
  const filter = filtering(data, search);

  return filter < 1 !== true ? (
    <div className="card-wrapper">
      {filter.map((item) => (
        <Link
          to={`/jadwal-shalat/kota/${item.id}`}
          key={item.id}
          className="card"
        >
          <div className="card-header">
            <h5>{item.lokasi}</h5>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <ItemNotFound type="Kota / Kabupaten" />
  );
};

export default CardKota;
