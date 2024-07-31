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

  // method for update 
  const updateTodo = (index, newText) => {
       const newTodos = [...todos]
       newTodos[index].text = newText
      //  update the state 
      setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos  = todos.filter((_,i) => i !== index)
    setTodos(newTodos)
  }


  return ( 
    <div className="App">
       <h4>TO-DO-LIST</h4>
       <TodoForm  addToDo={addToDo} sharedText="Class todo list"/>
       <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
     
    </div>
  );
}
// JSX
export default App;

