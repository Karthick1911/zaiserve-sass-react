import React from "react";
import logo from "./logo.svg";

import "./styles/_style.scss";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
