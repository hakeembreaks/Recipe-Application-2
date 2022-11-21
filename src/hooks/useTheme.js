import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// The useTheme grabs us the ThemeContext, does the if little check, and then return the context 

export const useTheme = () => {
    const context = useContext(ThemeContext) // The context will return whatever the value prop is and in our
                                            // case it's gonna be an object if we open the ThemeContext.js
                                            // i.e this object (color: 'blue'). so that will be the value
                                            // of the context constant

    if (context === undefined) { // the context will be undefined if we try to use it outside the scope of it
        throw new Error ("useTheme()must be used inside a ThemeProvider") // Basically we telling the d 
                                                                        // developer right here that you
                                                                        // cannot ise this context unless
                                                                        // the component that's using it 
                                                                        // is inside the theme provider..
                                                                        //Note we won't get this error since
                                                                        // we already surrounded our app in
                                                                        // index.js, we just put it just 
                                                                        // incase of the future 
    }
    return context
}