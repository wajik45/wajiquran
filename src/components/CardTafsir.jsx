const CardTafsir = ({ data }) => {
  return (
    <div className="card-quran-wrapper">
      {data.map((item) => (
        <div id={item.ayat} key={item.ayat} className="card-quran">
          <div className="card-quran-header">
            <h4>{item.ayat}.</h4>
          </div>
          <div className="card-quran-body">
            <p className="text-justify lh-md">{item.teks}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTafsir;
