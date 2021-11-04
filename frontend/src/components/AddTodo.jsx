import { useState } from "react";
import { Button } from "@mui/material";
import "../App.css";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch

    setTodo({
      task: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          Add Task
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
