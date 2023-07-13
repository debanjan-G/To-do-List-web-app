import React from "react";

function Todoitem(props) {
  return <li onClick={props.isDone}>{props.item}</li>;
}

export default Todoitem;
