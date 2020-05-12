import React from "react";

const Recipe = ({recipe}) => {
    return(
        <li className="recipe">
            <h1>{recipe.label}</h1>
            <p>{recipe.calories}</p>
            <img src={recipe.image} alt=""/>
        </li>
    )
}

export default Recipe;