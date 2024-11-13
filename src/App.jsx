import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Info from './components/Info'
import Content from './components/Content'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/info"
          element={
            <Info />
          }
        />
        <Route
          path="/content"
          element={
            <Content />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
