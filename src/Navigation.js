import React, { Suspense } from 'react'
import { Router, Routes } from 'react-router-dom'
import Login from './components/login'

const Navigation = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Navigation
