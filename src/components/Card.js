import React from "react";

const Card = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default Card;
