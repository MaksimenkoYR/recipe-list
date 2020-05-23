import React from 'react'
import TagsList from '../App/TagsList/TagsList'

const SearchForm = ({doSearch, setSearchQuery, ...props}) => {
    return (
        <form onSubmit={doSearch} className='search-form'>
            <label className='search-form__search-label'>
                <input
                    className='search-form__search-input'
                    type='text'
                    onChange={e => {
                        setSearchQuery(e.currentTarget.value)
                    
                    }}
                    placeholder="Search"
                />
            </label>
            <p>Choose tags:</p>
            <TagsList allTags={props.allTags} changeTags={props.changeTags}></TagsList>
            <button className='search-form__button button' type='submit'>
                Search
            </button>
        </form>
    )
}

export default SearchForm
