import React, { Component } from "react";
import { Provider } from "react-redux";
import Arrangments from "./components/arrangments";
import Pagination from "./components/common/pagination";
import store from "./store";
import "./App.css";

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
  handlePageChange = (page) => {
    console.log(page);
  };
}

export default App;
