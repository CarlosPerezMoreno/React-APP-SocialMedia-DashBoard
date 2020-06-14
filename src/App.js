import React from "react";
import "./App.css";

import CountryList from "./components/countries/country-list";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Region } from "";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

function reducer(state, act) {
  switch (act.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: act.payload };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
