import { useState } from "react"

export function NewTodoForm(props) {

    props.onSubmit 
    const [newItem, setNewItem] = useState("") // react state
    // destructuring, watch video from WebDevSimplified !!
    
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return 
        props.onSubmit(newItem)
    
        setNewItem("")
      }

    return (
    <form onSubmit = {handleSubmit} className="new-item-form">
        <div className='form-row'>
            <label htmlFor='item'>New Item</label>
            <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} // event listener in React. Changes the input form thing whenever the user types a character
            type="text" 
            id="item" />
        </div>

        <button className="btn">Add</button>
    </form>
    )
}