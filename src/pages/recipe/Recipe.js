import {useParams} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'


// the const will destructure the ID from the object
 //  i.e on the const id use params () line 
 // Note the ID is the same as what we called it in the App.js
 // i.e Routh path = "/recipes/:id"
 // so if I call it ABC it'll be ABC not ID

 // the map ing ing line in the code explanation.. Take the recipe we have, get the ingredients, use the 
 // map method, and each time around I'm gonna take the individual ingredient into a fraction where we want 
 // to return some kind of template. 

//styles
import './Recipe.css'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id // This is us constructing the endpoint that we wanna use to fetch the data.
  const {error, isPending, data: recipe} = useFetch(url) // This line means that we grabbing the data error and the isPending and now we can output the error if theres one, a loading message(isPending) and also the data when we have it. 
  const {mode} = useTheme()

    return (
      <div className={`recipe ${mode}`}>
        {error && <p className="error">{error}</p>} {/** error styled in the global css i.e index.css and here we outputting the error*/}
        {isPending && <p className="loading">loading...</p>} {/** we outputting the Ispending here */}
        {recipe && (
          <>
          <h2 className="page-title">{recipe.title}</h2> {/** outputting the recipe when we have it */}
          <p>Takes {recipe.cookingTime} to cook..</p>
          <ul>
            {recipe.ingredients.map(ing => <li key = {ing}>{ing}</li>)} {/** the map method is used to cycle through our recipe */}
          </ul>
          <p className="method">{recipe.method}</p>
          </>
        )}
      </div>
    )
}

