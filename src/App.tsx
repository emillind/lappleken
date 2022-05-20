import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Game from './pages/game'
import Notes from './pages/notes'
import Start from './pages/start'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/:id" element={<Game />}></Route>
          <Route path="/:id/notes" element={<Notes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
