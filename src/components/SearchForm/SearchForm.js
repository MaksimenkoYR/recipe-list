import React, {useState} from 'react'
import TagsList from '../App/TagsList/TagsList'


const SearchForm = ({doSearch, setSearchQuery, ...props}) => {
    const [hide, setHide] = useState({display: "none"})
    
    const openSearchPanel = () => {
       setHide() 
    }
    
    const closeSearchPanel = () => {
        setHide({display: "none"})
    }
    return (
        <form onSubmit={doSearch} className='search-form'>
            <label className='search-form__search-label'>
                <input
                    className='search-form__search-input'
                    type='text'
                    onChange={e => {
                        setSearchQuery(e.currentTarget.value)
                    }}
                    placeholder='Search'

                    onFocus = {() => {
                        openSearchPanel()
                    }}

                    onBlur = {() => {
                        closeSearchPanel()
                    }}

                />
            </label>
            <div  className="hide-container" style={hide}>
                <p>Search by tag</p>
                <TagsList allTags={props.allTags} changeTags={props.changeTags}></TagsList>
                <button className='search-form__button button' type='submit'>
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm
