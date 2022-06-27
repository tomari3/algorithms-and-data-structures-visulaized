import React from "react";

export const ResolveOutput = (props) => {
  const { outputType, testCases, testCase, func, target } = props;

  const output = func(testCases[testCase], target && target[testCase]);
  const visual = () => {
    if (outputType === "Triangle") {
      return output.map((row, i) => {
        return (
          <div key={i} className="row has-text-centered">
            {row.map((num, i) => {
              return (
                <div key={i} className="row-item">
                  <span className="heading">{num}</span>
                </div>
              );
            })}
          </div>
        );
      });
    }
    if (outputType === "Array") {
      return (
        <div className="row has-text-centered">
          {output.map((num, i) => {
            return (
              <span key={i} className="row-item">
                {num}
              </span>
            );
          })}
        </div>
      );
    }
    if (outputType === "Number") {
      return <span className="">{output}</span>;
    }
    if (outputType === "Boolean") {
      return <div className="row">{output.toString()}</div>;
    }
  };

  return <div className="block">{visual()}</div>;
};
