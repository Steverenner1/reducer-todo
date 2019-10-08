import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { reducer, todo } from "./reducers/reducer";

function App() {
  return (
    <>
    <h1>To-Do List</h1>
    <div className="App">
      <TodoList />
    </div>
    </>
  );
}

export default App;
