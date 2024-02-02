const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search-box">
            <input
                className="search-input"
                type="text"
                placeholder="Search by Title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
