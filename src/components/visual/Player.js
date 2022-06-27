import React, { useState } from "react";
import "../../pages/styles.scss";

import { Controls } from "./Controls";
import { ResolveOutput } from "./ResolveOutput";
import { Middleware } from "./Middleware";
import { ResolveInput } from "./ResolveInput";

export const Player = (props) => {
  const { title, func, testCases, inputType, target, targetType, outputType } =
    props;

  const [testCase, setTestCase] = useState(0);

  return (
    <section className="section">
      <p className="heading">{title}</p>
      <div className="box has-background-light">
        <div className="section">
          <div className="block">
            <ResolveInput
              inputType={inputType}
              testCase={testCase}
              testCases={testCases}
              target={target}
              targetType={targetType}
            />
          </div>
          <div className="block">
            <Middleware
              func={func}
              input={testCases[testCase]}
              target={target && target[testCase]}
            />
          </div>
          <div className="block">
            <ResolveOutput
              outputType={outputType}
              testCase={testCase}
              testCases={testCases}
              target={target}
              func={func}
            />
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
