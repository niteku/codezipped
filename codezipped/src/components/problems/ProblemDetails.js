import React from "react";

const ProblemDetails = () => {
  return (
    <div className="container problem-details">
      <h4>Redundant Connection</h4>
      <br />
      <div class="divider"></div>
      <br />
      <div class="section">
        <h7 className="grey-text">Union Find, Depth-first Search</h7>
        <br />
        <h6>Medium</h6>
        <p>
          In this problem, a tree is an undirected graph that is connected and
          has no cycles. The given input is a graph that started as a tree with
          N nodes (with distinct values 1, 2, ..., N), with one additional edge
          added. The added edge has two different vertices chosen from 1 to N,
          and was not an edge that already existed. The resulting graph is given
          as a 2D-array ofedges. Each element ofedgesis a pair[u, v]with u less
          than v, that represents an undirected edge connecting nodes u and v.
          Return an edge that can be removed so that the resulting graph is a
          tree of N nodes. If there are multiple answers, return the answer that
          occurs last in the given 2D-array. The answer edge[u, v]should be in
          the same format, with u less than v.
        </p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h5>Solution</h5>
        <p>Stuff</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h5>Reference</h5>
        <p>Stuff</p>
      </div>
      <div class="video center-align">
        <iframe
          width="800"
          height="480"
          src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProblemDetails;
