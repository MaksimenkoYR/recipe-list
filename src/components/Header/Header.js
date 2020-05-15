import React from "react"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.scss"

const Header = (props) => {
    
    return(
        <div className="app-header__container">
            <header className="app-header">
                <SearchForm
                    {...props}
                />
            </header>
        </div>

    )
}

export default Header