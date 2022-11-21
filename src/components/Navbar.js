import { Link } from 'react-router-dom';
import {useTheme} from '../hooks/useTheme'

// When we click the CHEF BREAKS, It'll take us to 
// the home page in APP.JS
// AND WHEN we click the Create Recipe in Navbar,
// it'll take us to the Create.js page

// styles
import './Navbar.css'
import Searchbar from './Searchbar'


export default function Navbar() {

  const {color, changeColor} = useTheme()

 
  return (
    <div className="navbar" style={{background: color}}> {/** The output will be the color in the ThemeContext.Js */}
      <nav onClick={() => changeColor('pink')}> {/** when a user clicks the nav element, we fire the function, and invoke the changeColor function and we pass in the pink function*/}
        <Link to="/" className="brand">
          <h1>CHEF BREAKS</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}