import React, { useReducer } from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { reducer, todo } from "../reducers/reducer";

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, todo);
    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </div>
    );
};

export default TodoList;