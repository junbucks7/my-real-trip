import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import TourTicket from './pages/TourTicket'
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/Detail" component={Detail} exact />
        <Route path="/TourTicket" component={TourTicket} exaxt/>
      </Router>
    </div>
  );
}

export default App;
