// src/App.js

import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h1>Task Manager</h1>
    <TaskForm />
    <TaskList />
  </div>
)

export default App
