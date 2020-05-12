import React,{useEffect, useState} from 'react'
import Recipe from "../RecipeList/Recipe"
import './App.css'
import SearchForm from '../SearchForm/SearchForm';
import RecipesList from '../RecipeList/RecipesList';

const App = () => {
    const APP_ID = "e281c960";
    const APP_KEY = "7b3583f2c3e95a6d9680b94ce3a03cba";	
    
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
        
    }



// functions working with searchForm
    //update recipes lisr when we submit search form
    const search = e => {
        e.preventDefault();
        getRecipes();
    }
    
    return(
        <div className="app">
            <header className="app-header">
                <SearchForm  
                    searchQuery = {searchQuery}
                    setSearchQuery = {setSearchQuery}
                    search = {search}
                />
            </header>
            <main>
                <RecipesList recipes={recipes}/>
            </main>
        </div>
    )
}

export default App;
