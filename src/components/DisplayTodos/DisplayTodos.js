import React from "react";
import { useSelector } from "react-redux";

const styles = {
  container: {
    width: "400px",
    padding: "20px",
    border: "1px solid purple",
    borderRadius: "10px",
    minHeight: "60vh",
    margin: "10px",
  },
  card: {
    border: "1px solid purple",
    borderRadius: "10px",
    margin: "10px auto",
    width: "90%",
    padding: "10px",
  },
};

function DisplayTodos() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <div key={todo}>
          <p>{todo}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodos;
