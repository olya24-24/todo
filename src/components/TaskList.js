import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks, deleteTask, saveChange, toggleTask}) {
  return (
    <table>
      <thead>
        <tr>
            <th>
                Завдання
            </th>
            <th>
                Дії
            </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
                <TaskItem key={index} taskItem={task} id={index} deleteTask={deleteTask} saveChange={saveChange} toggleTask={toggleTask}/>
        ))}
      </tbody>
    </table>
  )
}
