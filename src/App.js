import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState, useEffect } from 'react'

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      setTasks(data)
    }
    
    fetchTasks()
  }, [])

  const addTask = task => {
    const id = Math.floor(Math.random() * 999999 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'
        onAdd={() => setShowAddTaskForm(!showAddTaskForm)}
        showAdd={showAddTaskForm}
      />
      {showAddTaskForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : <p>There is no tasks to show</p>}
    </div>
  )
}

export default App
