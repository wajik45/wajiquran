const CardAyat = ({ data, isDark }) => {
  const conditionalCardClass = () => {
    return `${isDark ? "light" : "dark"}-border-sm card-quran`;
  };

  const conditionalCardHeaderClass = () => {
    return `${isDark ? "dark" : "light"}-bg-semi card-quran-header`;
  };

  const conditionalLineClass = () => {
    return `${isDark ? "dark" : "light"} line`;
  };

  return (
    <div className="card-quran-wrapper">
      {data.map((item) => (
        <div
          id={item.nomorAyat}
          key={item.nomorAyat}
          className={conditionalCardClass()}
        >
          <div className={conditionalCardHeaderClass()}>
            <h4>{item.nomorAyat}.</h4>
          </div>
          <div className="card-quran-body">
            <h1 className="lh-lg">{item.teksArab}</h1>
            <p>
              <b>{item.teksLatin}</b>
            </p>
            <div className={conditionalLineClass()}></div>
            <p className="lh-md">{item.teksIndonesia}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAyat;
