import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ tags, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter tags based on the search term
    const filteredTags = tags.filter((tag) =>
      tag.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filteredTags);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchInput"
      />
    </div>
  );
};

SearchBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

