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
                isCompleted: false
            });
            // clear the form and reset the state reference
            setInputValue('')
        }
    }
    
      return(
        <div>
            <h4>{sharedText}</h4>
            <h4>notsharedtext</h4>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value) }
                />
                <button type="submit">Add To Do</button>
                <button type="reset">reset form</button>
                <div>This is the change </div>
            </form>
        </div>
      )
}


