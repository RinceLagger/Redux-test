import logo from './logo.svg';
import './App.css';
import CreateTodo from "./components/CreateTodo/CreateTodo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateTodo/>
      </header>
    </div>
  );
}

export default App;
