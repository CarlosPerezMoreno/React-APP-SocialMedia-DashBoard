import React from "react";
import "./App.css";

import CountryList from "./components/countries/country-list";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Region } from "./components/regions/region";

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

    case "SET_COUNTRY_BY_NAME": {
      const countryListByName = (state.countryList || []).filter((country) =>
        country.name.toLowerCase().includes(act.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    case "FILTER_BY_REGION": {
      const { regionSelected } = act.payload;

      if ("" === regionSelected) {
        return { ...state, coutryFilteredByRegion: [], filterByRegion: "" };
      }

      const coutryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );

      return {
        ...state,
        coutryFilteredByRegion,
        filterByRegion: regionSelected,
      };
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
        <Region />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
