import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {
const {mode} = useTheme

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  return (
    <div className="recipe-list"> 
      {/** the next line will map through them and take each recipe and return 
       *  a bit of template for each one 
       */}
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          {/** the above div i.e the first div will be the div to surround all 
           * of them and it'll have a key prop with a recipe.id */ }

          <h3>{recipe.title}</h3>{/** this will output the title from the db.json title */}
          <p>{recipe.cookingTime} to make.</p> {/** takes the ccoking time in the db.json also and output it */}
          <div>{recipe.method.substring(0, 100)}...</div> {/** the length will be short i.e
           * the method is a property name in the db.json and it will generate a new string for us 
           * based on the method and it grabs us the characters from positions 0 all the way 
           * to position 100.
           */}
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link> {/** Clicking Cook this will take us to the 
           * Recipe.JS file. And Note: to output a variable inside a template string we use the dollar $ sign
           * curly brackets and the recipe.id
           */}
        </div>
      ))}
    </div>
  )
}