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

  const onChange = (e) => {
    if (
      e.target.value <= 0 ||
      e.target.value > testCases.length ||
      !e.target.value
    )
      return;
    setTestCase(parseInt(e.target.value) - 1);
  };

  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">player</p>
            <div className="level">
              <div className="level-item">
                <button className="button">prev</button>
              </div>
              <div className="level-item">
                <button className="button">pause</button>
              </div>
              <div className="level-item">
                <button className="button">play</button>
              </div>
              <div className="level-item">
                <button className="button">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="level-right">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">test cases</p>
            <div className="level">
              <div className="level-item">
                <button className="button" onClick={prevTestCase}>
                  previous
                </button>
              </div>
              <div className="level-item">
                <button className="button" onClick={nextTestCase}>
                  next
                </button>
              </div>
              <div className="level-item">
                <input
                  className="input has-no-arrows is-wide"
                  type="number"
                  min={1}
                  max={testCases.length}
                  placeholder={`${parseInt(testCase) + 1}/${testCases.length}`}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
