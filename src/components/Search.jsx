import { IconSearch, IconClose } from "./icons";
import { useRef, useState } from "react";

const Search = (props) => {
  const { next, setSearch, isDark } = props;

  const [isEmpty, setIsEmpty] = useState(true);
  const input = useRef(null);

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setSearch(e.target.value);
      return setIsEmpty(true);
    }
    setSearch(e.target.value);
    return setIsEmpty(false);
  };

  const handleCloseClick = () => {
    setIsEmpty(true);
    setSearch("");
    input.current.value = "";
    input.current.focus();
  };

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            onChange={handleSearchChange}
            className={`${isDark ? "light" : "dark"}-border`}
            ref={input}
            type="text"
            placeholder={`Cari ${next} ...`}
          />
          {isEmpty ? (
            <IconSearch className="icon" />
          ) : (
            <IconClose onClick={handleCloseClick} className="icon" />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
