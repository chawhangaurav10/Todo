/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

export default function TodoItem(props) {
  return (
    <div className="mx-5 my-4">
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button href="#" className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>
        Delete
      </button>
    </div>
  );
}
