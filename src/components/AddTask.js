import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setday] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    if (!text) {
      alert('Please, add a task text')
      return
    }
    onAdd({ text, day, reminder })
    setText('')
    setday('')
    setReminder(false)
  }

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day}
          onChange={event => setday(event.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder}
          checked={reminder}
          onChange={event => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' onClick={onSubmit} />
    </form>
  )
}

export default AddTask