import React from "react";
import { useState , useEffect } from "react";
import { createContext } from "react";
import { setThemeVariables } from "./ThemeContextVariables";
import { themes } from "../shared/Themes";
const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [dark,setDark] = useState(false)
    useEffect(() => {
        const isDark = localStorage.getItem("dark") === "true"
        // store the state mode to the local sto\rage
        setDark(isDark)
    }, [dark])
    // to toggle bettween dark and light modes
    //
    useEffect(() => {
        let mode = dark ? "Theatre Mode " : "Normal Mode";
        document.title = "Anime Movies - " + mode
    })
    
    const theme = dark ? themes.dark :  themes.light

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark' , JSON.stringify(isDark))
        setDark(isDark)
    }
     setThemeVariables(theme)
    return(
        <ThemeContext.Provider 
        value = {{theme,dark,toggle}}>
             {children}
        </ThemeContext.Provider>
    )
     




}
export {ThemeContext,ThemeProvider}



