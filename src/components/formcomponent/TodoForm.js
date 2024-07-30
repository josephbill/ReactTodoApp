import { useState } from 'react'
import './TodoForm.css'

export default function TodoForm({addToDo,sharedText}){
    // define states here 
    const [inputValue,setInputValue] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        // validate inputs 
        if(inputValue.trim()){
            addToDo({
                text: inputValue, 
                completed: false
            });
            setInputValue('')
        }
    }
    
      return(
        <div>
            <h4>{sharedText}</h4>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value) }
                />
                <button type="submit">Add To Do</button>
            </form>
        </div>
      )
}

