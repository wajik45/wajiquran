import { IconSearch } from "./icons";

const Search = ({ next, setSearch }) => {
  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder={`Cari ${next} ...`}
          />
          <IconSearch />
        </div>
      </form>
    </div>
  );
};

export default Search;
