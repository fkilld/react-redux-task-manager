// Import action type constants from 'taskActions' file
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/taskActions'

// Define the initial state of the reducer with an empty 'tasks' array
const initialState = {
  tasks: [],
}

// Define the 'taskReducer' function, which takes 'state' and 'action' as parameters
const taskReducer = (state = initialState, action) => {
  // Use a 'switch' statement to handle different action types
  switch (action.type) {
    // If the action type is 'ADD_TASK'
    case ADD_TASK:
      // Return a new state object with the new task added to the 'tasks' array
      return {
        tasks: [...state.tasks, action.payload],
      }
    // If the action type is 'DELETE_TASK'
    case DELETE_TASK:
      // Return a new state object with the specified task removed from the 'tasks' array
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    // If the action type is 'UPDATE_TASK'
    case UPDATE_TASK:
      // Return a new state object with the specified task updated in the 'tasks' array
      return {
        tasks: state.tasks.map((task) =>
          // Check if the current task's 'id' matches the 'id' in the action payload
          task.id === action.payload.id
            ? // If it matches, replace it with the updated task from the action payload
              action.payload
            : // If not, keep the current task as is
              task
        ),
      }
    // If the action type doesn't match any case, return the current state unchanged
    default:
      return state
  }
}

// Export the 'taskReducer' as the default export of this module
export default taskReducer
