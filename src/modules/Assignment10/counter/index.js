import { useDispatch,useSelector } from "react-redux";
import { incrementNumber, decrementNumber } from "./Action";
import React from "react";
function Assignment10 () {
    const dispatch = useDispatch();
    const { counter }= useSelector(state=>state.counterReducer)
    return(
        <div>
            <div>Counter: {counter}</div>
            <button
            onClick={() => {
                dispatch(incrementNumber(1));
            }}
            >
                Increment
            </button>
            <button onClick={() => {
                dispatch(decrementNumber(1));
            }}>Decrement</button>
        </div>
    )
}
export default Assignment10;