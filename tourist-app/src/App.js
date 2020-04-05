import React, { Component } from "react";
import { Provider } from "react-redux";
import Arrangments from "./components/arrangments";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Arrangments />
        </div>
      </Provider>
    );
  }
}

export default App;
