// The BrowserRouter surrounds everything that we'd use.
// The Switch component allows us to only show one route component at a time
// Then the route is used to make routes 

import { BrowserRouter, Switch, Route} from 'react-router-dom' 


//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

//styles
import './App.css';



function App() {
const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          {/** the exact prop is added so the path for the home doesnt
           * match the other route that we go to as well
           */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App
