import React from "react";
import Recipe from "./Recipe";

const RecipesList = ({recipes}) => {
    return(
        <ul className="recipe-list">
            {recipes.map(item => (
                <Recipe recipe={item.recipe} />
            ))}        
        </ul>
)}

export default RecipesList;