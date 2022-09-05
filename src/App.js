/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import Head from "./MyComponents/Head";
import Todos from "./MyComponents/todo";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo", title, desc);
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log("Adding todo", myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Head title="My todo List" searchBar={false} />
        <Routes>
        <Route
            exact
            path="/"
            element={
                <>
                  <AddTodo addTodo={addTodo} />
                </>
             }
          ></Route>

          <Route
            exact
            path="/add"
            element={
                <>
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
          ></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
