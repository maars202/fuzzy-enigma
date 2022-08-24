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

// export const ContextProvider2 = ({children}) => {
//     const [activeMenu2, setActiveMenu2] = useState(true)
//     return (
//         <StateContext.Provider 
//         value={{
//             activeMenu2}}>
//             {children}
//         </StateContext.Provider>
//     )
// }

// hwo to use activeMenu in sidebar or navbar components:
// hey give me the data from the context: 
// StateContext -- can have multiple context progviers but here only one is used:

export const useStateContext = () => useContext(StateContext); 