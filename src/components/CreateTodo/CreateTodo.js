import React from "react";
//import { useDispatch } from "react-redux";
import {useTodosHandlers} from "../../store/reducers/todoReducer"
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    padding: "20px",
    border: "1px solid purple",
    borderRadius: "10px",
  },
};

function CreateTodo() {
  ////const dispatch = useDispatch();
  const{addTodo} = useTodosHandlers();
  const [todo, setTodo] = React.useState("");

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    // dispatch({
    //   type: "ADD_TODO",
    //   payload: todo,
    // });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>Create Todo</h2>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={handleChange}
        placeholder="todo"
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default CreateTodo;
