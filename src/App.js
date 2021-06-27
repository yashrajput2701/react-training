import  Assignment9  from "./modules/Assignment9";
// import Assignment10 from "./modules/Assignment10/counter/index"
import React from "react";
// import { Provider } from "react-redux";
// import store from "./modules/Assignment11/store/store";
// import Mainscreen from "./modules/Assignment11/Mainscreen";

class App extends React.Component {
  render() {
    return (
      <>
      <Assignment9 />

        {/* <Provider store={store}>
          <Mainscreen />
        </Provider> */}
      </>
    );
  }
}

export default App;
