import React from 'react'
import {Link} from 'react-router-dom'
import TagsList from '../App/TagsList/TagsList'

const Recipe = ({recipe, setPath, allTags, changeTags}) => {
    //// use this ratio to find calories and nutrients in portion
    // const ratioPortion = recipe.totalWeight/recipe.yield ;

    // use this ration to find calories and nutients in 100g
    const ratio = recipe.totalWeight / 100

    const calories = Math.round(recipe.calories / ratio)
    const recipePath = `/${recipe.label.replace(/ /g, '_')}`

    const recipeFeatures = recipe.dietLabels.concat(recipe.healthLabels)
    const nutrientsShort = recipe.digest.slice(0, 3)

    return (
        <li className='recipe-list__item recipe-item'>
            <Link
                onClick={() => {
                    setPath(recipePath)

                    sessionStorage.clear()
                    sessionStorage.setItem('recipe', JSON.stringify(recipe))
                }}
                to={recipePath}
            >
                <img src={recipe.image} alt='' />
                <div className='recipe-item__information'>
                    <h2 className='recipe-item__title'>{recipe.label}</h2>
                    <h3>In 100g of product:</h3>
                    <ul className='recipe-item__nutrition'>
                        <li>Calories: {calories}</li>
                        {nutrientsShort.map(item => (
                            <li key={recipe.label + item.label}>
                                {item.label}: {Math.round((item.total / ratio) * 4)}g{' '}
                            </li>
                        ))}
                    </ul>
                    <h3>Tags:</h3>
                    <TagsList allTags={allTags} changeTags={changeTags}/>
                </div>
            </Link>
        </li>
    )
}

export default Recipe
