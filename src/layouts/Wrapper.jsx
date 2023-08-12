const Wrapper = ({ children, isDark }) => {
  return (
    <div className={`wrapper ${isDark ? "dark" : "light"}`}>{children}</div>
  );
};

export default Wrapper;
