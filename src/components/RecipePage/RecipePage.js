import React from "react"

const RecipePage = () => {
const recipe = JSON.parse(sessionStorage.recipe);
    
console.log(recipe)
    return(
        <h1>{recipe.label}</h1> 
    )   
}

export default RecipePage