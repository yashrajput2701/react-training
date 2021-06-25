import { DECREMENT, INCREMENT } from "../utils/ActionName";

export const incrementNumber = (number) => {
    return {
        type: INCREMENT,
        payload: number,
    };
};

export const decrementNumber = (number) => {
    return {
        type: DECREMENT,
        payload: number,
    };
};