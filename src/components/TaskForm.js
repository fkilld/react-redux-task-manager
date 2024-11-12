// Import React and the 'useState' hook from the 'react' library
import React, { useState } from 'react'
// Import the 'useDispatch' hook from 'react-redux' to dispatch actions
import { useDispatch } from 'react-redux'
// Import the 'addTask' action creator from the 'taskActions' file
import { addTask } from '../actions/taskActions'

// Define the 'TaskForm' functional component
const TaskForm = () => {
  // Declare a state variable 'title' with an initial value of an empty string
  const [title, setTitle] = useState('')
  // Get the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch()

  // Define the 'handleSubmit' function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    // Check if 'title' is not empty after trimming whitespace
    if (title.trim()) {
      // Dispatch the 'addTask' action with 'title' as the payload
      dispatch(addTask(title))
      // Reset the 'title' state to an empty string after adding the task
      setTitle('')
    }
  }

  // Return the JSX to render the form
  return (
    // Create a 'form' element with 'handleSubmit' as the submit event handler
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      {/* Input field for entering the task title */}
      <input
        type='text' // Specify the input type as 'text'
        placeholder='Add new task...' // Placeholder text for the input field
        value={title} // Bind the input value to the 'title' state variable
        onChange={(e) => setTitle(e.target.value)} // Update 'title' state on input change
        style={{ padding: '10px', width: '80%', marginRight: '10px' }} // Inline styles for the input field
      />
      {/* Button to submit the form and add the task */}
      <button type='submit' style={{ padding: '10px' }}>
        Add Task
      </button>
    </form>
  )
}

// Export the 'TaskForm' component as the default export
export default TaskForm
