import React from "react";

    const SearchForm = ({doSearch, setSearchQuery}) => {
        return(
        <form  onSubmit={doSearch} className="search-form">
            <label className="search-form__search-label">
            <input 
                className="search-form__search-input" 
                type="text" 
                onChange={e => {setSearchQuery(e.currentTarget.value)}} 
            />
            </label>
            <button className="search-form__button button" type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm