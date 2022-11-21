//The children prop beside the ThemeProvider just represents any children components that 
// this component ( i.e ThemeProvider) that we making might wrap in the future so that then 
// we can render those children inside these (i.e {{children}} ) component template.

// Summarily any component in the application can access the value provided by our
// theme context provider

// EXPLANATION: First we create our ThemeContext object, then we create a custom react component
//  called ThemeContext that has a template in which we render the ThemeContext.Provider right here.
// And inside that provider we pass in any children component that this provider wraps
// i.e all the children component gets access to the theme context provider value,
// then we also take the themeprovider component and go to index.js to wrap it in our APP component
// so that means the App component will be the value of the children prop

import { createContext, useReducer } from "react"; // The useReducer allows us to specify a reducer function
                                                //  which is gonna be responsible for updating our states and 
                                                // keeping all that update logic together in one place

// EXPLANATION:The themeReducer takes in the currentstate and the action(the const theReducer state,action line)
// we check that action type (on the switch line action.type) and if its equals to change color, the we 
// return a new state object with a new color value(the return line), and that then updates
// the new states object that we get back from the useReducer Hook 

// 
export const ThemeContext = createContext() // this returns a new context object which is now stored in ThemeContext
const themeReducer = (state, action) => {   // the themeReducer function is taking in two arguments
                                            // the current up to date state i.e (state) and the current action
                                            // object we passed into the dispatch call.
    switch(action.type){
        case 'CHANGE_COLOR':
        return {...state, color: action.payload}// ...state means that we want to spread the current state that we take in
        case 'CHANGE_MODE':
        return{ ...state, mode: action.payload}  
        default:
            return state
    }

}

export function ThemeProvider ({children}) {
    const [state, dispatch] = useReducer(themeReducer, { 
        color: 'blue', // the blue is the initial state our code is in 
        mode: 'dark'               // The useReducer hook specifies the reducer function that we'd be using to update 
                        // the state and also an initial value for the state
                        // NOTE: just like the use state hook, it returns two values inside an array
                        // so we can captutre them the same way
                        // The [state, will be the initial state that we specified
                        // The dispatch function is a way that we can dispatch state change to the reducer 
                      // function that we made 
    })
    // CHANGING THE COLOR FUNCTION

    const changeColor = (color) => {                        // the change color took in the color argument, then the dispatch function
        dispatch({ type: 'CHANGE_COLOR', payload:color})     // is called inside this function
    }                                                       // Now the dispatch function takes in an object as 
    
    const changeMode = (mode) => {                           // an argument which is refered to as the dispatch
      dispatch({ type: 'CHANGE_MODE', payload:mode})          // action and under the dispatch, we specified two 
    }                                                         // properties which are the type property and the 
                                                             // payload property
                                                            // The type property basically describe the type of state change we want to make 
                                                            // The payload is any data we want to base the state change on 


    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}