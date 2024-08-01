import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todos,updateTodo,deleteTodo}){
    // loop over todays and  map out a view
    // console.log(todos)

   //  conditional rendering is the display of components on specific conditions 
   // if the list is empty show a paragraph that says "No current data " , if list is not empty show the list items   

      return(
        <>
          { todos.length === 0 ? (
                <div>
                  <p>The List is empty</p>
                </div>
          ) : (
            <ul>
               {todos.map((todo, index) => (
                  <TodoItem
                     key={index}
                     todo={todo}
                     index={index}
                     updateTodo={updateTodo}
                     deleteTodo={deleteTodo}
                  />
               ))}
            </ul>
          ) }
        </>

      )
}

