import React, { useState, useReducer } from "react";
import TodoList from "./TodoList";
import { reducer, todo } from "../reducers/reducer";

const TodoForm = ({ dispatch }) => {
    const [item, setItem] = useState("");

    const handleChanges = e => {
        setItem(e.target.value);
    };
    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");
    };
    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="todo" hidden>
                    To-do
                </label>
                <input name="todo" onChange={handleChanges} value={item} />
                <button>Add To-Do</button>
                <button onClick={clearCompleted}>Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;