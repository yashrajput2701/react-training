import React from "react";

export const initialstate = {
    light: { color: "black", background: "white" },
    dark: { color: "white", background: "black"},

};

export const ThemeContext = React.createContext(initialstate);