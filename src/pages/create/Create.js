import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useHistory} from "react-router-dom"

//styles
import './Create.css'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('') 
  const [newIngredient, setNewIngredient] = useState('') // This will not store all the ingredient, just the one thats currently entering into the input field, now once they,ve entered it into the input field, and once they click into the button to add it, what we want to do is add it to an array of ingredient and we gonna store that Array in a different bit os state.
  const [ingredients, setIngredients] = useState([]) // so a user will type into this field i.e input type, they click the add button, at that point we take whatever this value is i.e const new Ingredient, set.. and we add it to this array usestate([]) the ingredient array
  const ingredientInput = useRef(null)
  
  const {postData, data} = useFetch('http://localhost:3000/recipes', 'POST')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault() // prevents a default action when the page is reloading
    postData ({title, ingredients, method, cookingTime: cookingTime + 'minutes'})
    
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim() // the trim method takes away any white space from the ingredients just so that we dont have duplicates i.e when i type breaks twice,it'll appear just once.

    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])

    }
    
    setNewIngredient('')
    ingredientInput.current.focus()
   
  }

    // redirect the user when we get data response
    useEffect(() =>{
      if (data){
        history.push('/') // this will push the user to a new route i.e the home route
      }
    },[data, history])

    return (
      <div className='create'>
        <h2 className='page-title'>Add a New Recipe</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title:</span>
            <input type="text"
            onChange={(e) => setTitle(e.target.value)} // The e means that we firing a function and taking in the event object automatically as an argument and the setTitle wil update this bit of state and we do that with the help of the e.target then the value to get the value
            value={title} // this way will be setting about 2 way binding so that if the state changes [(const [title, setTitle] = useState(''))] outside of the user, put something into the input field, then its gonna automatically reflect inside the input field as well. 
            required
            />
          </label>

          
          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients"> 
              <input
               type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput} 
              />
              <button onClick={handleAdd} className='btn'>add</button>
            </div>
          </label> 

          <p>Current Ingredients:
          {ingredients.map(i => <em key = {i}>{i},</em>)} </p>
       

          <label>
            <span>Recipe Method:</span>
            <textarea
            onChange={(e) => setMethod(e.target.value)} // this will take the event object, set the cooking time to update the state
            value={method}
            required
            />
          </label>

          <label>
            <span>Cooking Time(minutes):</span>
            <input type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
            />
          </label>
          <button className='btn'>Submit</button>

        </form>
      </div>
    )
  
}


  
