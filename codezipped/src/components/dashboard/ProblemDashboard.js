import React, { Component } from "react";
import ProblemList from "../problems/ProblemList";
import ProblemTagList from "../problems/ProblemTagList";

class ProblemDashboard extends Component {
  render() {
    return (
      <div className="problem-dashboard">
        <div className="row">
          <div className="col s12 m4 l3">
            <h5>Problem Tags</h5>
            <br />
            <ProblemTagList />
          </div>
          <div className="col s12 m8 l9">
            <ProblemList />
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemDashboard;
