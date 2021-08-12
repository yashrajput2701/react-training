import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// import Mainpage from "./Components/Mainpage";
// function Assignment20() {
//   return (
//     <>
    
//   <h1>dfsfsdkj</h1>
//   {/* <Mainpage /> */}
//     </>
//   );
// }
// export default Assignment20;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);