import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
        <Menu/>
        <div className='max-w-4xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contatos' element={<Contato/>}/>
          </Routes>
        </div>
      </div>    
    </Router>
  )
}

export default App
