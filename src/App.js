/* Main */

import React from "react";
import "./App.css";

/* Components */

import CountryList from "./components/countries/country-list";
import { Region } from "./components/regions/region";
import ActionList from "./components/actions/action-list";

/* Redux */

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./components/reducer/reducer";

/* App */

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <i class="far fa-moon"></i>
      <div className="App">
        <ActionList />
        <Region />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
