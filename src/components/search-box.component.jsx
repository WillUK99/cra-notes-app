import { MdSearch } from "react-icons/md";

export const SearchBox = ({ handleSearch }) => {
  const filter = (event) => {
    console.log(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="search-box">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};
