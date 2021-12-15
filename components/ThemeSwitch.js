import {useState} from "react";
import DarkTheme from "./DarkTheme";

function loadThemeMode() {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    const value = localStorage.getItem('themeMode')
    return (value === null) ? false : JSON.stringify(value)
}

const ThemeSwitch = () => {

    const [themeMode, setThemeMode] = useState(loadThemeMode)
    const text = themeMode ? "Light Mode" : "Dark Mode"

    const handleClick = () => {
        localStorage.setItem('themeMode', JSON.stringify(!themeMode))
        setThemeMode(!themeMode)
    }

    return (
        <>
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
              button {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
              }
            `}</style>
            {themeMode &&  <DarkTheme/>}
        </>
    )
}

export default ThemeSwitch
