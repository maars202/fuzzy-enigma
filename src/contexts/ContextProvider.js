import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

// 1. add all the values that are going to be used in the value attribute of the StateContext.Provider:
// 2. add the children to that this context provider can be used to wrap existing divs to hydrate the values in :
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [theme, setTheme] = useState(null)

    const handleClick = (click) => {
        setIsClicked({...initialState, [click]: true})
    }

    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            theme, setTheme}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext); 