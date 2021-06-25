import { DECREMENT, INCREMENT } from "../utils/ActionName"

const initialState= {
    counter: 0
}

const counterReducer = (state= initialState, Action)=>{
    switch(Action.type){
        case INCREMENT: return {
            ...state,
            counter: state.counter+ Action.payload
        }
        case DECREMENT: return {
            ...state,
            counter: state.counter- Action.payload
        }
        default: return state
    }
}
export default counterReducer;