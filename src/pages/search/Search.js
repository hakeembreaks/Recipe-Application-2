import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'

// styles
import './Search.css'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query // when this is the end point with that query added on, then the JSON server will look through the recipes, and it would try and find the recipes including that query
  const { error, isPending, data } = useFetch(url) // this is sending the request, error if there's one, isPending = while it loads data is the data

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {/** we need data and when we have data, show this < RecipeList recipes=data  */} 
      {data && <RecipeList recipes={data} />}
    </div>
  )
}