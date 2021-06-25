import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProblemDashboard from "./components/dashboard/ProblemDashboard";
import ProblemList from "./components/problems/ProblemList";
import ProblemDetails from "./components/problems/ProblemDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProblemDashboard} />
            <Route exact path="/problems" component={ProblemList} />
            <Route path="/problems/:id" component={ProblemDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
