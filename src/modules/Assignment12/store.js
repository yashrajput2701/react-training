import React from "react";

export const initialstate = {
    light: { color: "black", background:"white"},
    dark: { color: "white", background:"black"},
    // theme: { color: "black", background:"white"},
};
  
const themereducer = (state=initialstate,action)=>
{
    switch (action.type){
        case "UPDATE_TO_LIGHT":
            return{...state.light, border:action.payload};
        default : return state ;
        case "UPDATE_TO_DARK":
            return{...state.dark, border:action.payload};
    }
} 

export const ThemeContext = React.createContext(initialstate);

export const useStore = () => React.useContext(ThemeContext);
export const StoreProvider = ({ children, initialstateFromProps, reducer}) => {
    const [ themeState, dispatch] = React.useReducer(
    reducer,
    initialstateFromProps
    );
    return (
        <ThemeContext.Provider value={[themeState, dispatch]}>
            {children}
            </ThemeContext.Provider>
    );

};