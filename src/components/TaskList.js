// Import the React library
import React from 'react'
// Import the 'useSelector' hook from 'react-redux' to access the Redux store state
import { useSelector } from 'react-redux'
// Import the 'Task' component to render individual tasks
import Task from './Task'

// Define the 'TaskList' functional component
const TaskList = () => {
  // Use 'useSelector' to extract the 'tasks' array from the Redux store state
  const tasks = useSelector((state) => state.tasks)

  // Return the JSX to render the task list
  return (
    // Create a 'div' container for the task list
    <div>
      {/* Conditionally render content based on whether the 'tasks' array is empty */}
      {tasks.length === 0 ? (
        // If there are no tasks, display a message
        <p>No tasks available.</p>
      ) : (
        // If there are tasks, map over the 'tasks' array to render each task
        tasks.map((task) => (
          // Render the 'Task' component for each task, passing 'task' as a prop
          // Use 'task.id' as the 'key' prop for efficient rendering
          <Task key={task.id} task={task} />
        ))
      )}
    </div>
  )
}

// Export the 'TaskList' component as the default export of this module
export default TaskList
