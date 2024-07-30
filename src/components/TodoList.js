import React from "react";

export default function TodoList({todos}){
    // loop over todays and  map out a view
    // console.log(todos)
      return(
        <div>
           <ul>
              {todos.map((todo,index) => (
                  <li key={index}> {index} {todo.text}</li>
              ))}
           </ul>
        </div>
      )
}

