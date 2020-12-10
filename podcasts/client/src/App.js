import React, { Component } from "react";
import "./App.css";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import AudioList from "../src/components/AudioList";
import { initialDataAction } from "./redux/actions";
import { getAllAudios } from "./services/Audio.service";

class App extends Component {
  componentDidMount = () => {
    getAllAudios(this.props.initialData);
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AudioList />
        </div>
      </Provider>
    );
  }
}

export default connect(undefined, (dispatch) => {
  return {
    initialData: (data) => {
      dispatch(initialDataAction(data));
    },
  };
})(App);
