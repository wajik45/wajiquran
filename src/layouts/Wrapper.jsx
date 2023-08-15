import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const Wrapper = ({ children }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`wrapper ${isDarkMode ? "dark" : "light"}`}>{children}</div>
  );
};

export default Wrapper;
