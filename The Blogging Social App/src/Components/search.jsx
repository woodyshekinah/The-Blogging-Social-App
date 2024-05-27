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

// import { useState } from "react";

// function SearchBar({ items }) {
//   const [query, setQuery] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     setQuery(searchQuery);
//     const filtered = items.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery)
//     );
//     setFilteredItems(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleSearch}
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;
