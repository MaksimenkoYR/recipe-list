import React from "react";
import Recipe from "./Recipe";

const RecipesList = ({recipes, setPath}) => {
    return(
        <ul className="recipe-list">
            {recipes.map(item => (
                <Recipe recipe={item.recipe} setPath={setPath}/>
            ))}        
        </ul>
)}

export default RecipesList;