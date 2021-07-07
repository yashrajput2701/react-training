import React from "react";
// import { Provider } from "react-redux";
// import { Provider } from "react-redux";
// import store from "./modules/Assignment11/store/store";
// import Mainscreen from "./modules/Assignment11/Mainscreen";
// import Assignment13 from "./modules/Assignment13";
// import Assignment14 from "./modules/Assignment14";
// import { store } from "./modules/Assignment14/store";
import Assignment15 from "./modules/Assignment15"
class App extends React.Component {
  render() {
    return (
      <>
      {/* <Provider store={store}>
      <Assignment14 />
      </Provider>  */}
      <Assignment15 />
      {/* <Assignment13 /> */}
        {/* <Provider store={store}>
          <Mainscreen />
        </Provider> */}
      </>
    );
  }
}

export default App;
