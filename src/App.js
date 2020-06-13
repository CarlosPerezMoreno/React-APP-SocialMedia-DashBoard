import React from "react";
import "./App.css";

import CountryList from "./components/countries/country-list";
import Country from "./components/countries/country";

function App() {
  return (
    <div className="App">
      <CountryList />
    </div>
  );
}

export default App;
