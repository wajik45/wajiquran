const Card = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((item) => (
        <a
          href={`/quran/surat/${item.nomor}`}
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
        </a>
      ))}
    </div>
  );
};

export default Card;
