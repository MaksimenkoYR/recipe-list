import React,{useEffect, useState} from 'react'
import './App.css'
import SearchForm from '../SearchForm/SearchForm'
import RecipesList from '../RecipeList/RecipesList'
import RecipePage from '../RecipePage/RecipePage'
import {Route, Switch, useLocation } from 'react-router-dom'


const App = () => {
    const APP_ID = "e281c960";
    const APP_KEY = "7b3583f2c3e95a6d9680b94ce3a03cba";
    const [recipeLink, setRecipeLink] = useState(useLocation().pathname);
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



//Search
    //update recipes list when we submit search form
    const search = e => {
        e.preventDefault();
        getRecipes();
    }
//Routing
    //set path in RecipePage when we chose the recipe
    const setPath = (path) => {
        console.log(path);
        setRecipeLink(path);
        console.log(path);
        console.log(recipeLink);

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
            <Switch>
                <Route path={recipeLink}>
                    <RecipePage recipe={recipeLink}/>
                </Route>
                <Route path="/">
                    <RecipesList recipes={recipes} setPath={setPath}/>
                </Route>
            </Switch>
            </main>
        </div>
    )
}

export default App;
