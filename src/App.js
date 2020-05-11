import React,{useEffect, useState} from 'react'
import Recipe from "./Recipe"
import './App.css'

const App = () => {
    const APP_ID = "e281c960";
    const APP_KEY = "7b3583f2c3e95a6d9680b94ce3a03cba";	
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chiken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );

        const data = await response.json();
        setRecipes(data.hits);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    const updateSearch  = e => {
        setSearch(e.target.value);
        console.log(search)
    }

    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-form__input" type="text" value={search} onChange={updateSearch}/>
                <button className="search-form__button button" type="submit">
                    Search
                </button>
            </form>
            {recipes.map(recipe =>(
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}

                />
            ))}
        </div>
    )
}

export default App;
