import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ItemDetailPage from './pages/ItemDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/category/:categoryId" element={<Homepage/>} />
          <Route path="/item/:itemId" element={<ItemDetailPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
