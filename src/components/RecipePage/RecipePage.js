import React from "react"

const RecipePage = ({recipe}) => {
console.log(recipe)
    return(
        <h1>{recipe.label}</h1> 
    )   
}

export default RecipePage