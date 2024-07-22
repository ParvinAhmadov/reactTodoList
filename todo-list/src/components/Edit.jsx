import React, { useState } from 'react';

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inp"
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn_inp">Update Task</button>
    </form>
  );
};

export default Edit;
