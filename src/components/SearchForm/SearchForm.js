import React from "react";

    const SearchForm = ({search, setSearchQuery}) => {

    return(
        <form onSubmit={search} className="search-form">
            <input 
                className="search-form__input" 
                type="text" 
                onChange={e => {setSearchQuery(e.currentTarget.value)}} 
            />
            <button className="search-form__button button" type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm