const HeaderMain = (props) => {
  const { title, paragraph, arab } = props;
  return (
    <div className="header">
      <h1>
        {title} <span className="font-arab">{arab}</span>
      </h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default HeaderMain;
