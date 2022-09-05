import React from "react";
import TodoItem from "./todoItem";

export default function Todos(props) {
  return (
    <div className="container my-3">
      <h3 className="text-center ">Todo List</h3>
      {props.todos.length === 0
        ? "NO TODOS FOUND"
        : props.todos.map((todo) => {
            return (
                
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                
            );
          })}
    </div>
  );
}
