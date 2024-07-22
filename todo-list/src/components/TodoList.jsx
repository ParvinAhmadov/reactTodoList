import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit"; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="container bg-blue-950 mt-20 p-8 rounded-md">
      <Form createTodo={createTodo} />
      {todos.map((todo, idx) => (
        todo.isEditing ? (
          <Edit key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  );
};

export default TodoList;
