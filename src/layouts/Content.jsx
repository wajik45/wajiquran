const Content = ({ children, fixed = false }) => {
  return (
    <div className={`content ${fixed ? "content-fixed" : ""}`}>{children}</div>
  );
};

export default Content;
