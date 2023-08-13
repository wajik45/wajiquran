import { useParams } from "react-router-dom";

const Bismillah = ({ isDark }) => {
  const { id } = useParams();

  const conditionalHeaderClass = () => {
    return `${isDark ? "light" : "dark"}-border-sm bismillah`;
  };

  if (id.includes("1") || id.includes("9")) {
    return "";
  }

  return (
    <div className={conditionalHeaderClass()}>
      <h1 className="font-arab">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
    </div>
  );
};

export default Bismillah;
