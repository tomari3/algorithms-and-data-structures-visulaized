import React from "react";

import "../../pages/styles.scss";

export const Controls = ({ testCases, testCase, setTestCase }) => {
  const nextTestCase = () => {
    if (testCase + 1 >= testCases.length) return;
    setTestCase(testCase + 1);
  };
  const prevTestCase = () => {
    if (testCase - 1 < 0) return;
    setTestCase(testCase - 1);
  };

  return (
    <div className="columns">
      <div className="column">
        <button className="button">prev</button>
        <button className="button">pause</button>
        <button className="button">play</button>
        <button className="button">next</button>
      </div>
      <div className="column">
        <button className="button" onClick={prevTestCase}>
          prev test case
        </button>
        <button className="button" onClick={nextTestCase}>
          next test case
        </button>
        <label>
          <input
            className="input no-arrows"
            type="number"
            min={1}
            max={testCases.length}
          />
        </label>
      </div>
    </div>
  );
};
