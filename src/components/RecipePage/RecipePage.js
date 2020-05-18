import React from 'react'
import './RecipePage.scss'
import TagsList from '../App/TagsList/TagsList'

const RecipePage = ({allTags, changeTags}) => {
    const recipe = JSON.parse(sessionStorage.recipe)

    // find calories in a portion
    const calories = Math.round(recipe.calories / recipe.yield)

        
    const recipeIngredients = recipe.ingredientLines.map(item => <li>{item}</li>)

    const recipeNutrition = recipe.digest.map(item =>(
        <li>{item.label}: {item.total} g</li>
    ));
    console.log(recipe)
    return (
        <div className='recipe-page'>
            <h2>{recipe.label}</h2>
            <ul className='recipe-summary'>
                <li>Calories: {calories}</li>
                <li>Portions: {recipe.yield}</li>
                <li className='recipe-summary__rating rating'>
                    <div className='rating__like'>134</div>
                    <div className='rating__dislike'>5</div>
                </li>
            </ul>
            <TagsList allTags={allTags} changeTags={changeTags}/>
            <div className='recipe-page__wrapper'>
                <img alt='' src={recipe.image} />
                <ul className='recipe-page__ingridients'>{recipeIngredients}</ul>
                <ul className='recipe-page__nutrition'>{recipeNutrition}</ul>
                <div className='recipe-page__recomendation'></div>
            </div>
        </div>
    )
}

export default RecipePage
