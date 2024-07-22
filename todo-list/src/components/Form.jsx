import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inp"
        placeholder="what tasl do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn_inp">Add Task</button>
    </form>
  );
};

export default Form;
