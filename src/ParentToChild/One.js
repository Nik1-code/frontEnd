import React from "react";

const One = (props) => {
  return (
    <>
      <br />
      <br />
      <input type="text" value={props.input} onChange={props.onChange} />
      <button onClick={props.onClick}>show</button>
    </>
  );
};

export default One;
