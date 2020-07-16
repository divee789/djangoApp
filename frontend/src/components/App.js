import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import Header from "./layout/header";
import Dashboard from "./members/Dashboard";

import store from "../store";

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <>
            <Header />
            <div className="container">
              <Dashboard />
            </div>
          </>
        </Provider>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
