import React from "react";

export const Middleware = (props) => {
  const { func, input, target } = props;
  const thing = func(input, target);
  console.log(thing);
  return <div></div>;
};
