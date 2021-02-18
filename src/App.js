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

  const addTask = async task => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    if (Object.keys(data).length === 0) {
      alert("The task couldn't be save on the server")
    } else {
      setTasks([...tasks, data])
    }
  }

  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const deleteTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    if (res.ok === true) {
      setTasks(tasks.filter(task => task.id !== id))
    } else {
      alert('It was not possible to delete the task on the server!')
    }
  }

  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? {
      ...task, reminder: data.reminder
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
