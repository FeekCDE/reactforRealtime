import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './Chat'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/chat" Component={Chat}/>
    </Routes>
    </>
  )
}

export default App