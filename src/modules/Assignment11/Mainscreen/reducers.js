const initialState = {
  error: "",
  mainData: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_MAIN_REQUEST_SUCCESS":
      return {
        
       error:"",
        mainData: action.payload,
      };

    case "GET_MAIN_REQUEST_FAILURE":
      return {
    
        mainData:[],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
