import React, {useState} from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'


export default function Main() {

const [tasks, setTasks] = useState ([])

const createTask = (task) => {
    if (task.trim()=== "") {
        alert("Пустий рядок не приймається")
    } else {
        setTasks ([...tasks, {task, isComplete: false}])
    }
}

const deleteTask = (itemId) => {
  tasks.splice(itemId, 1)
  setTasks([...tasks]);
}

const saveChange = (itemId, task) => {
  const taskItem = tasks[itemId];
  taskItem.task = task;
  setTasks([...tasks]);
}

const toggleTask = (itemId) => {
  const taskItem = tasks[itemId];
  taskItem.isComplete = !taskItem.isComplete;
  setTasks([...tasks]);

}

console.log(tasks);

  return (
    <div className='main'>

     <h3>Список завдань</h3>

      <div>
       <CreateTask createTask={createTask}/>
      </div>

      <div>
      <TaskList tasks={tasks} deleteTask={deleteTask} saveChange={saveChange} toggleTask={toggleTask}/>
      </div>

    </div>
  )
}
