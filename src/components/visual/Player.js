import React, { useState } from "react";
import { Controls } from "./Controls";
import "../../pages/styles.scss";

export const Player = ({ title, func, testCases }) => {
  const [testCase, setTestCase] = useState(0);

  const output = func(testCases[testCase]);

  return (
    <section className="section">
      <p className="heading">{title}</p>
      <div className="box has-background-light">
        <div className="section">
          <div className="block">
            input:
            <span className="has-text-weight-bold"> {testCases[testCase]}</span>
          </div>

          <div className="block">
            output:
            <span className="has-text-weight-bold"> {output.toString()}</span>
          </div>
        </div>
        <Controls
          testCases={testCases}
          testCase={testCase}
          setTestCase={setTestCase}
        />
      </div>
    </section>
  );
};
