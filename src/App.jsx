import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { lazy, Suspense } from 'react'

const NotFoundPage = lazy (() => import ("./pages/NotFoundPage"))
const ItemDetailPage = lazy (() => import ("./pages/ItemDetailPage"))

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/category/:categoryName" element={<Homepage/>} />
            <Route path="/item/:itemId" element={<ItemDetailPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router>
    </Suspense>
    </>
  )
}

export default App
