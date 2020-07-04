import React from "react";
import ReactDom from "react-dom";

import Header from "./layout/header";
import Dashboard from "./members/Dashboard";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
