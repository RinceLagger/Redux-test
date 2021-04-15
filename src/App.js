import logo from "./logo.svg";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTodos />
        <CreateTodo />
      </header>
    </div>
  );
}

export default App;
