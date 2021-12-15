import {useState} from "react";
import DarkTheme from "./DarkTheme";

const ThemeSwitch = () => {

    const [themeMode, setThemeMode] = useState(false)
    const text = themeMode ? "Light Mode" : "Dark Mode"

    return (
        <>
            <button onClick={() => setThemeMode(!themeMode)}>
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
