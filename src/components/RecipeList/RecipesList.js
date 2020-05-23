import React from "react"
import Recipe from "./Recipe"
import "./RecipeList.scss"

const RecipesList = ({recipes, setPath, allTags, changeTags}) => {
    return(
        <ul className="recipe-list">
            {recipes.map(item => (
                <Recipe key={item.recipe.label}recipe={item.recipe} setPath={setPath} allTags={allTags} changeTags={changeTags}/>
            ))}        
        </ul>
)}

export default RecipesList;