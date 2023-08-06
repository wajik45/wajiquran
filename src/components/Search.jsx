import { Icons } from ".";

const Search = ({ next }) => {
  const { IconSearch } = Icons;

  return (
    <div className="search">
      <form>
        <div>
          <input type="text" placeholder={`Cari ${next} ...`} />
          <IconSearch />
        </div>
      </form>
    </div>
  );
};

export default Search;
