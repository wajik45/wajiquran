import { IconSearch, IconClose } from "./icons";
import { useRef, useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const Search = (props) => {
  const { next, setSearch } = props;
  const { isDarkMode } = useContext(DarkModeContext);

  const [isEmpty, setIsEmpty] = useState(true);
  const input = useRef(null);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearch(e.target.value);
      return setIsEmpty(true);
    }
    setSearch(e.target.value);
    return setIsEmpty(false);
  };

  const handleClose = () => {
    setIsEmpty(true);
    setSearch("");
    input.current.value = "";
    input.current.focus();
  };

  const conditionalInputClass = `
    ${isDarkMode ? "light" : "dark"}-border
  `;

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            onChange={handleSearch}
            className={conditionalInputClass}
            ref={input}
            type="text"
            placeholder={`Cari ${next} ...`}
          />
          {isEmpty ? (
            <IconSearch className="icon" />
          ) : (
            <IconClose onClick={handleClose} className="icon" />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
