import { IconSearch } from "./icons";

const Search = ({ next }) => {
  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder={`Cari ${next} ...`} />
          <IconSearch />
        </div>
      </form>
    </div>
  );
};

export default Search;
