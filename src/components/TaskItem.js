import React, {useState} from 'react'


export default function TaskItem({taskItem, id, deleteTask, saveChange, toggleTask}) {
 
  const [task, setTask] = useState(taskItem.task);
  const [isEditing, setIsEditing] = useState(false);
  

const removeTask = () => {
  deleteTask(id);
}

const handleChange = (e) => {
  setTask(e.target.value)
}

const saveEdit = () => {
  saveChange(id, task);
  setIsEditing(false)
}

const toggle = () => {
  toggleTask(id)
  
}


  return (
    <tr>
     {isEditing ?
     <>
     <td>
      <form>
        <input value={task} onChange={handleChange} autoFocus/>
      </form>
    </td>
    <td>
     <button onClick={saveEdit}>Зберегти</button>
     <button onClick={() => {setIsEditing(false)}}>Скасувати</button>
    </td>
    </>
    :
    <>
        <td onClick={toggle}>
           <span className={taskItem.isComlete ? "complete" : "not-complete"}>{taskItem.task}</span>
        </td>
        <td>
            <button onClick={removeTask}>Видалити</button>
            <button onClick={() => {setIsEditing(true)}}>Редагувати</button>
        </td>
     </>
}
     </tr>
   )
}
