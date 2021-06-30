import React,{ useState } from "react";
import { ThemeContext, initialstate } from "./context";
import { Mainscreen } from "./Mainscreen";

const Assignment12 = (props) => {
    return (
        <div>
            <ThemeContext.Provider value={initialstate.light}>
                <Mainscreen />
            </ThemeContext.Provider>
        </div>
    );
};
export default Assignment12;