import React from "react";

const ProblemTagList = () => {
  return (
    <form action="#">
      <p>
        <label>
          <input type="checkbox" className="black" />
          <span>Array</span>
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" />
          <span>String</span>
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" />
          <span>Dynamic Programming</span>
        </label>
      </p>
    </form>
  );
};

export default ProblemTagList;
