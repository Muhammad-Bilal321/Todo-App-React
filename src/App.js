import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState("")

let handleChange= (e)=>{
setText(e.target.value)
  console.log(e.target.value)
}
let add = ()=>{
list.push(text)
  setList([...list])
}

let deleteBtn = (i)=>{
  let deleteArray = [...list];
  deleteArray.splice(i, 1);
  setList(deleteArray)
}
let deleteAll = (i)=>{
  let deleteAll = [...list];
  deleteAll.splice(i);
  setList(deleteAll)
}

let updateBtn = (i)=>{
  let updateArray = [...list];
  let updateInput = prompt("Enter");

  if (updateInput !== null) {
    
    updateArray[i] = updateInput
    
    setList(updateArray)
  }
}

  return (
  <>
  <div className='todo-app'>
      <div className='input-section'>
        <input
          placeholder='Enter Task'
          value={text}
          onChange={handleChange}
        />
        <button className='add-button' onClick={add}>Add</button>
        <button className='add-button2' onClick={deleteAll}>Delete All</button>
      </div>
      <ul className='task-list'>
        {list.map((task, i) => (
          <li key={i} className='task-item'>
            <span className='task-text'>{task}</span>
            <div className='button-group'>
              <button className='delete-button' onClick={() => deleteBtn(i)}>Delete</button>
              <button className='update-button' onClick={() => updateBtn(i)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}

export default App;
