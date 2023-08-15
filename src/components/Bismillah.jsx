import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const Bismillah = () => {
  const { id } = useParams();
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalHeaderClass = `
    ${isDarkMode ? "light" : "dark"}-border-sm bismillah
  `;

  if (id !== "1" && id !== "9") {
    return (
      <div className={conditionalHeaderClass}>
        <h1 className="font-arab">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      </div>
    );
  }
};

export default Bismillah;
