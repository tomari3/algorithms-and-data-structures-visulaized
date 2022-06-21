import React, { useState } from "react";
import { Controls } from "./Controls";
import "../../pages/styles.scss";

export const Player = ({ func, testCases }) => {
  const [testCase, setTestCase] = useState(0);

  return (
    <section className="section">
      <div className="box has-background-light">
        <div className="section">
          <div className="block">
            test case:
            <span className="has-text-weight-bold"> {testCases[testCase]}</span>
          </div>
          <div className="block">
            input: <span className="has-text-weight-bold"></span>
          </div>
          <div className="block">
            output: <span className="has-text-weight-bold"></span>
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
