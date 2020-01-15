import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/Detail" component={Detail} exact />
      </Router>
    </div>
  );
}

export default App;
