import React from "react"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.scss"

const Header = (props) => {
    
    return(
        <header className="app-header">
            <SearchForm
                {...props}
            />
        </header>
    )
}

export default Header