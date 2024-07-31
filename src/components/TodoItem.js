import React, { useState } from "react";
export default function TodoItem({todo,index,updateTodo,deleteTodo}){
    // editing , deleting 
    // for conditional rendering in component i.e. if my user is editing show a form , if my user is not editing do not show form
    const [isEditing, setIsEditing] = useState(false);
    // capture desired text to edit
    const [newText, setNewText] = useState(todo.text)


    const handleUpdate = () => {
        updateTodo(index,newText)
        setIsEditing(false)
    }


    return(
        <li>
            {isEditing ? (
                <>
                  <input
                     type="text"
                     value={newText}
                     onChange={(e) => setNewText(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>

            ) : (

                <>
                 <span>{todo.text}</span>
                 <button onClick={() => setIsEditing(true)}>Edit</button>
                 <button onClick={() => deleteTodo(index)}>Delete</button>
                </>
            )
            
            
            }
        </li>
    )

}

