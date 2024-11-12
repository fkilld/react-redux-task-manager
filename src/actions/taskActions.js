// Import the 'uuidv4' function from the 'uuid' library to generate unique IDs
import { v4 as uuidv4 } from 'uuid'

// Export a constant named 'ADD_TASK' with the value 'ADD_TASK'
export const ADD_TASK = 'ADD_TASK'
// Export a constant named 'DELETE_TASK' with the value 'DELETE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
// Export a constant named 'UPDATE_TASK' with the value 'UPDATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

// Export an action creator function named 'addTask' that takes 'title' as a parameter
export const addTask = (title) => ({
  // Set the 'type' property of the action object to the 'ADD_TASK' constant
  type: ADD_TASK,
  // Set the 'payload' property of the action object to an object containing task details
  payload: {
    // Generate a unique 'id' for the task using 'uuidv4'
    id: uuidv4(),
    // Set the 'title' of the task to the provided 'title' parameter
    title,
  },
})

// Export an action creator function named 'deleteTask' that takes 'id' as a parameter
export const deleteTask = (id) => ({
  // Set the 'type' property of the action object to the 'DELETE_TASK' constant
  type: DELETE_TASK,
  // Set the 'payload' property of the action object to the 'id' of the task to delete
  payload: id,
})

// Export an action creator function named 'updateTask' that takes 'id' and 'title' as parameters
export const updateTask = (id, title) => ({
  // Set the 'type' property of the action object to the 'UPDATE_TASK' constant
  type: UPDATE_TASK,
  // Set the 'payload' property of the action object to an object containing updated task details
  payload: {
    // Include the 'id' of the task to be updated
    id,
    // Update the 'title' of the task with the new 'title' parameter
    title,
  },
})
