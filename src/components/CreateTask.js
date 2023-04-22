import React, {useState} from 'react'

export default function CreateTask({createTask}) {

const [task, setTask] = useState()

const handleChange = (e) => {
    setTask(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    createTask (task);
    setTask ('');
}

  return (
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Напишіть завдання" onChange={handleChange} value={task}/>
    <button className="button">Додати</button>
</form>
  )
}
