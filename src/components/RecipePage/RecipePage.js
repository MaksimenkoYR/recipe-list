import React from 'react'
import './RecipePage.scss'
import TagsList from '../App/TagsList/TagsList'

const RecipePage = ({allTags, changeTags}) => {
    const recipe = JSON.parse(sessionStorage.recipe)

    // find calories in a portion
    const calories = Math.round(recipe.calories / recipe.yield)

        
    const recipeIngredients = recipe.ingredientLines.map(item => <li>{item}</li>)
    const nutrientsIn100g = item =>{

        let result = (item.total/recipe.totalWeight*100).toFixed(1)
        if(item.unit === "g"){
            return result + " g" 
        } else {
           return result +" mg"
        }
    }

    
    const recipeNutrition = recipe.digest.map(item => (
        <li>
            {item.label}: {nutrientsIn100g(item)} 
        </li>
    ))
    console.log(recipe)
    return (
        <div className='recipe-page'>
            <h2>{recipe.label}</h2>
            <ul className='recipe-summary'>
                <li className='recipe-summary__item'>Calories: {calories/recipe.yield}</li>
                <li className='recipe-summary__item'>Portions: {recipe.yield}</li>
                <li className='recipe-summary__item rating'>
                    <div className='rating__like'>134</div>
                    <div className='rating__dislike'>5</div>
                </li>
            </ul>
            <TagsList allTags={allTags} changeTags={changeTags} />
            <div className='recipe-page__wrapper'>
                <img alt='' src={recipe.image} />
                <h3>Ingredients:</h3>
                <ul className='recipe-page__ingredients'>{recipeIngredients}</ul>
                <a className="button recipe-page__button" href={recipe.url}>Instructuion</a>
                <h3>In 100g of product:</h3>
                <ul className='recipe-page__nutrition'>{recipeNutrition}</ul>
                <div className='recipe-page__recomendation'></div>
            </div>
        </div>
    )
}

export default RecipePage
