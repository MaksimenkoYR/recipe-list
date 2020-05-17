import React, {useEffect, useState} from 'react'
import './App.scss'
import RecipesList from '../RecipeList/RecipesList'
import RecipePage from '../RecipePage/RecipePage'
import {Route, Switch, useLocation} from 'react-router-dom'
import Header from '../Header/Header'
import {allTags} from './AllTags'

const App = () => {
    const APP_ID = 'e281c960'
    const APP_KEY = '7b3583f2c3e95a6d9680b94ce3a03cba'

    const [recipeLink, setRecipeLink] = useState(useLocation().pathname)
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('chicken')

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}{tags}`
        )

        const data = await response.json()
        console.log(data.hits)
        setRecipes(data.hits)
    }

    //Search
    //update recipes list when we submit search form
    const doSearch = e => {
        e.preventDefault()
        getRecipes()
    }

    //Routing
    //set path in RecipePage when we chose the recipe
    const setPath = path => {
        setRecipeLink(path)
    }

    //Tags
    const tagCreateRequest = tag => `&health={tag.api_parametr}`
    
    const [tags, setTags] = useState([])
    
    const changeTags = tag => {
        
        const tagRequest = tagCreateRequest(tag)    
        
        const isTagsContain = tag => {
            tags.includes(tagRequest)
        }
        
        const switchTag = tag => {
            const newTags = tags.filter(item => {
                return(tag !== tagRequest)
            })
            setTags(newTags)
        }
        
        
        switch (tag) {
            case !Object:
                setTags([])
                break
            case isTagsContain(tag):
                switchTag(tag)
                break
            default:
                setTags(tags.push(tagRequest))
        }
    }

    /////////////////////////////////////////////////////////////////////////
    return (
        <div className='app'>
            <Header
                changeTags={changeTags}
                allTags={allTags}
                doSearch={doSearch}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
            />
            <main>
                <Switch>
                    <Route exact path='/'>
                        <RecipesList recipes={recipes} setPath={setPath} />
                    </Route>
                    <Route path={recipeLink}>
                        <RecipePage />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
