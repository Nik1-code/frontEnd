import React from "react";

const Two = (props) => {
  return (
    <div>
      <h2>{props.state.showText ? props.state.text : null}</h2>
    </div>
  );
};

export default Two;
