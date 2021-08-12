import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store, persistor} from "./store";
import "./styles/main.scss";
// import { store, persistor } from "./store";
import App from "./components/App";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";
function Assignment21 () {
   

    return(
       <>
            <Provider store={store}>
            <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
            </Provider>,
            {/* document.getElementById("root") */}
         </>
    );

serviceWorker.unregister();
}
export default Assignment21;