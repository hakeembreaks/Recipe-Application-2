
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icons.png'

// styles
import './ThemeSelector.css'




const themeColors = ["#58249c", "#249c6b", "#b70233"]
export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
      changeMode(mode === 'dark'?'light':'dark')   // Evaluate mode and return two different values i.e if its true, return the left value, if its false the right value
    }
    console.log(mode)

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img 
        onClick={toggleMode}
        src={modeIcon}
        alt= "dark/light toggle-icon"
        style={{filter:mode==="dark"? 'invert(100%)': 'invert(20%)'}} 
        // The filter property allows to use an invert function to invert the color so that I can invert it
        // from black to white but we only doing this if the mode is dark, if its light we do something else
        />

      </div>
        <div className='theme-buttons'>
            {themeColors.map(color =>(                // we taking each color and then map through them
                 <div 
                 key = {color}
                 onClick={() => changeColor(color)}
                 style = {{background:color}}
                 />    
            ))}
        </div>
    </div>
  )
}
