import React from "react"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.scss"
import TagsList from "../App/TagsList/TagsList"

const Header = (props) => {
    
    return(
        <div className="app-header__container">
            <header className="app-header">
                <SearchForm
                    {...props}
                />
                <TagsList allTags={props.allTags} changeTags={props.changeTags}></TagsList>
            </header>
        </div>

    )
}

export default Header