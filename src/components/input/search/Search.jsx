import "./search.css";

const Search = () => {
  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fas fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value=""
      />
    </section>
  );
};

export default Search;