import { Link } from "react-router-dom";

const CardKota = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((item) => (
        <Link to={`/jadwal-shalat/${item.id}`} key={item.id} className="card">
          <div className="card-header">
            <h5>{item.lokasi}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardKota;
