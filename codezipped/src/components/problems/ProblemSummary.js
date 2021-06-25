import React from "react";
import { Link } from "react-router-dom";

const ProblemSummary = () => {
  return (
    /*<div className="problem-list section">
      <div className="card blue-grey problem-summary">
        <div className="card-content grey-text text-darken-3">
          <p className="grey-text">LeetCode 1. Two Sum</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <p className="grey-text">Two Sum</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <p className="grey-text">Two Sum</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <p className="grey-text">Two Sum</p>
        </div>
      </div>
    </div>*/
    <table className="striped highlight">
      <thead>
        <tr>
          <th>Platform</th>
          <th>Title</th>
          <th>Difficulty</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>LeetCode</td>
          <td>
            <Link to="/">1. Two Sum</Link>
          </td>
          <td>Easy</td>
        </tr>
        <tr>
          <td>LeetCode</td>
          <td>
            <Link to="/">2. Redundant Connection</Link>
          </td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>LeetCode</td>
          <td>
            <Link to="/">3. Redundant Connection 2</Link>
          </td>
          <td>Hard</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProblemSummary;
