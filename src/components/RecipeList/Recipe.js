import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({recipe, setPath}) => {
    //// use this ratio to find calories and nutrients in portion 
    // const ratioPortion = recipe.totalWeight/recipe.yield ;

    // use this ration to find calories and nutients in 100g 
    const ratio = recipe.totalWeight/100 ;
    
    const calories = Math.round(recipe.calories / ratio);
    const recipePath = `/${recipe.label.replace(/ /g, "_")}`;
    
    
    const recipeFeatures = recipe.dietLabels.concat(recipe.healthLabels);
    const nutrientsShort = recipe.digest.slice(0,3); 

    return(
        <li className="recipe-item">
            <Link onClick={()=>setPath(recipePath)} to={recipePath}>
                <img src={recipe.image} alt=""/>
                <h2>{recipe.label}</h2>
                <h3>In 100g of product:</h3>
                <p>{calories} calories</p>
                <ul className="recipe-item_features">
                    {nutrientsShort.map(item => (
                        <li key={recipe.label + item.label}>{item.label}:{Math.round(item.total/ratio*4)}g </li>
                    ))}
                </ul>
                <h3>Tags:</h3>
                <ul className="recipe-item__features">
                    {recipeFeatures.map(item => (
                        <li key={recipe.label + item}>{item}</li>
                    ))}
                </ul>
            </Link>
        </li>
    )
}

export default Recipe;