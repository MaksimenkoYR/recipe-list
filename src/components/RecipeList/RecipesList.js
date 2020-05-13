import React from "react"
import Recipe from "./Recipe"
import "./RecipeList.css"

const RecipesList = ({recipes, setPath}) => {
    return(
        <ul className="recipe-list">
            {recipes.map(item => (
                <Recipe key={item.recipe.label}recipe={item.recipe} setPath={setPath}/>
            ))}        
        </ul>
)}

export default RecipesList;