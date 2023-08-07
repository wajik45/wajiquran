const HeaderMain = ({ title, paragraph }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default HeaderMain;
