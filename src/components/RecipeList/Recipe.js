import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({recipe, setPath}) => {
    const recipePath = `/${recipe.label.replace(/ /g, "_")}`;
    return(
        <li className="recipe-item">
            <Link onClick={()=>setPath(recipePath)} to={recipePath}>
                <h1>{recipe.label}</h1>
                <p>{recipe.calories}</p>
                <img src={recipe.image} alt=""/>
            </Link>
        </li>
    )
}

export default Recipe;