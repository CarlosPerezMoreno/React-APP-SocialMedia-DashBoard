import React from "react";
import "./App.css";

import Country from "./country";

function App() {
  return (
    <div className="App">
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"
        name="Corea the best"
        population={500000}
        region="Asia"
        capital="Pyongian"
      />
    </div>
  );
}

export default App;
