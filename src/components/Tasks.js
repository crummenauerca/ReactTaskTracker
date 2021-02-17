import { useState } from 'react'
import Button from './Button'

const Tasks = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 02:00pm',
    reminder: true
  }, {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 01:30pm',
    reminder: true
  }, {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 7th at 02:30pm',
    reminder: false
  }])

  const addTask = event => {
    setTasks([...tasks, {
      id: 4,
      text: 'Clothes Shopping',
      day: 'Feb 8th at 04:20pm',
      reminder: false
    }])
  }

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>)
      )}

      <Button color='white' backgroundColor='blue' text='Add task' onClick={addTask} />
    </>
  )
}

export default Tasks