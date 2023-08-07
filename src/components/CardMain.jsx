import { useLocation, Link } from "react-router-dom";

const CardMain = ({ data }) => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="card-wrapper">
      {data.map((item) => (
        <Link
          to={pathName.includes("quran") ? `/quran/surat/${item.nomor}` : ""}
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
              {item.tempatTurun} {(item.tempatTurun && "|") || ""} {item.arti}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardMain;
