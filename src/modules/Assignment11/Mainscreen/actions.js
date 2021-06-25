import axios from 'axios';



const getColors = (data) => {
    return {
        type: "GET_MAIN_REQUEST_SUCCESS",
        payload: data,
    };
};

const getErrors = (error) => {
    return {
        type: "GET_MAIN_REQUEST_FAILURE",
        payload: error,
    };
};

export const getMain = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get("https://reqres.in/api/unknown");
            dispatch(getColors(res.data.data));
        } catch (error) {
            dispatch(getErrors(error));
        }
    }
}