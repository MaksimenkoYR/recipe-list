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

    const [tags, setTags] = useState('')
    const [recipeLink, setRecipeLink] = useState(useLocation().pathname)
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('chicken')

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        console.log(
            `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}${tags}`
        )
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}${tags}`
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

    ////---------------Tags--------------------------------

    const changeTags = tag => {
        //prepare tag to request
        const tagCreateRequest = tag => `&health=${tag.api_parametr}`
        const tagRequest = tagCreateRequest(tag)

        //cheking is tag alredy in state.tags
        const isTagsContainTag = tag => {
            return tags.includes(tagRequest)
        }

        const switchTag = tag => {
            const newTags = tags.replace(tagRequest, '')
            setTags(newTags)
        }

        if (tag === 'clear') {
            setTags('')
        } else if (isTagsContainTag()) {
            switchTag(tag)
        } else {
            setTags(tags + tagRequest)
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
                        <RecipesList
                            recipes={recipes}
                            setPath={setPath}
                            allTags={allTags}
                            changeTags={changeTags}
                        />
                    </Route>
                    <Route path={recipeLink}>
                        <RecipePage allTags={allTags} changeTags={changeTags} />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
