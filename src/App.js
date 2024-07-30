import { useState } from 'react';
import './App.css';
import TodoForm from './components/formcomponent/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // a list of todos
  const [todos, setTodos] = useState([]);

  // CRUD methods
  // create 
  const addToDo = (todo) => {
      // update the state with the new item
      setTodos([...todos, todo])
      // console.log(JSON.stringify(todos))
  } 

  return ( 
    <div className="App">
       <h4>TO-DO-LIST</h4>
       <TodoForm  addToDo={addToDo} sharedText="Joseph's todo list"/>
       <TodoList todos={todos} />
     
    </div>
  );
}
// JSX
export default App;
