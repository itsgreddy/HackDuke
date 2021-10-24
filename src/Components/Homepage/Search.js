import "./Homepage.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="search-bar">
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
      />
    </form>
  </div>
);

export default SearchBar;
