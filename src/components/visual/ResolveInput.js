import React from "react";

export const ResolveInput = (props) => {
  const { testCases, testCase, target, targetType, inputType } = props;
  const input = () => {
    if (inputType === "Number") {
      return <p>{testCases[testCase]}</p>;
    }
    if (inputType === "Array") {
      return testCases[testCase].map((test, i) => {
        return (
          <div key={i} className="row">
            <span className="row-item">{test}</span>
          </div>
        );
      });
    }
  };

  const resolveTarget = () => {
    if (target) {
      if (targetType === "Array") {
        target[testCase].map((item) => {
          return <p key={item}>{item}</p>;
        });
      }
      if (targetType === "Number") {
        return <p>{target[testCase]}</p>;
      }
    }
  };
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item has-text-centered">
          <div>
            <span className="heading">input:</span>
            <div className="row">{input()}</div>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item has-text-centered">
          <div>
            {target && <span className="heading">target:</span>}
            <div className="row">{resolveTarget()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
