/* Main */

import React from "react";
import "./App.css";

/* Components */

import CountryList from "./components/countries/country-list";
import ActionList from "./components/actions/action-list";
import Header from "./components/header/header";

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
      <Header />
      <ActionList />
      <CountryList />
    </Provider>
  );
}

export default App;
