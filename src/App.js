import React from "react";
import Calculator from "./components/Calculator";

import "./App.css";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <Calculator initialValue="0" />
    </div>
  );
}

export default App;
