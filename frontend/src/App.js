import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTodo />
      <ListTodos />
    </div>
  );
};

export default App;
