import './SearchFilter.css'

function SearchFilter({ searchQuery, setSearchQuery }) {
    return (
        <div className="search-filter">
            <input 
                type="text" 
                placeholder="Поиск по имени или дисциплине..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
                <button className="clear-btn" onClick={() => setSearchQuery('')}>
                    ✕
                </button>
            )}
        </div>
    )
}

export default SearchFilter