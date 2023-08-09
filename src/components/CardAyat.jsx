const CardAyat = ({ data }) => {
  return (
    <div className="card-quran-wrapper">
      {data.map((item) => (
        <div id={item.nomorAyat} key={item.nomorAyat} className="card-quran">
          <div className="card-quran-header">
            <h4>{item.nomorAyat}.</h4>
          </div>
          <div className="card-quran-body">
            <h1 className="lh-lg">{item.teksArab}</h1>
            <p>
              <b>{item.teksLatin}</b>
            </p>
            <div className="line"></div>
            <p className="lh-md">{item.teksIndonesia}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAyat;
