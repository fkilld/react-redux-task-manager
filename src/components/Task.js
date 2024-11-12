// Import React and 'useState' hook from the 'react' library
import React, { useState } from 'react'
// Import 'useDispatch' hook from 'react-redux' to dispatch actions
import { useDispatch } from 'react-redux'
// Import the 'deleteTask' and 'updateTask' action creators
import { deleteTask, updateTask } from '../actions/taskActions'

// Define the 'Task' functional component, accepting 'task' as a prop
const Task = ({ task }) => {
  // Declare a state variable 'isEditing' to track edit mode, initialized to 'false'
  const [isEditing, setIsEditing] = useState(false)
  // Declare a state variable 'title' to store the task title, initialized to 'task.title'
  const [title, setTitle] = useState(task.title)
  // Get the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch()

  // Handler function to delete the task
  const handleDelete = () => {
    // Dispatch the 'deleteTask' action with the task's 'id'
    dispatch(deleteTask(task.id))
  }

  // Handler function to update the task
  const handleUpdate = () => {
    // Check if 'title' is not empty after trimming whitespace
    if (title.trim()) {
      // Dispatch the 'updateTask' action with the task's 'id' and new 'title'
      dispatch(updateTask(task.id, title))
      // Exit edit mode by setting 'isEditing' to 'false'
      setIsEditing(false)
    }
  }

  // Return the JSX to render the task
  return (
    // Render a 'div' container with inline styles
    <div
      style={{
        marginBottom: '10px', // Add a bottom margin
        padding: '10px', // Add padding
        border: '1px solid #ccc', // Add a border
      }}
    >
      {/* Conditionally render content based on 'isEditing' state */}
      {isEditing ? (
        // If 'isEditing' is true, render the edit form
        <>
          {/* Input field to edit the task title */}
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '5px', width: '70%', marginRight: '10px' }}
          />
          {/* Button to save the updated task */}
          <button onClick={handleUpdate} style={{ padding: '5px' }}>
            Save
          </button>
          {/* Button to cancel editing */}
          <button
            onClick={() => setIsEditing(false)}
            style={{ padding: '5px', marginLeft: '5px' }}
          >
            Cancel
          </button>
        </>
      ) : (
        // If 'isEditing' is false, display the task title and action buttons
        <>
          {/* Display the task title */}
          <span style={{ marginRight: '10px' }}>{task.title}</span>
          {/* Button to enter edit mode */}
          <button onClick={() => setIsEditing(true)} style={{ padding: '5px' }}>
            Edit
          </button>
          {/* Button to delete the task */}
          <button
            onClick={handleDelete}
            style={{ padding: '5px', marginLeft: '5px' }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  )
}

// Export the 'Task' component as the default export
export default Task
