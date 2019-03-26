import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./HomeScreen";
import createStore from "../Redux";

const store = createStore();

class App extends React.Component {
  render() {
    return(
      <Provider store = {store}>
        <HomeScreen />
      </Provider>
    )
  }
}

export default App;