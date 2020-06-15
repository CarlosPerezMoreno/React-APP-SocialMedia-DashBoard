/* Main */

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Components */

import CountryList from "./components/countries/country-list";
import CountryPage from "./components/countries/country-page";
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
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
