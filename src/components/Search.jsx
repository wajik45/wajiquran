import { IconSearch, IconClose } from "./icons";
import { useRef, useState } from "react";

const Search = (props) => {
  const { next, setSearch, isDark } = props;

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

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            onChange={handleSearch}
            className={`${isDark ? "light" : "dark"}-border`}
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
