import React from 'react'
import Homepage from './components/Homepage'
import HeroesPage from './components/HeroesPage'
import MoviesPage from './components/MoviesPage'
import SeriesPage from './components/SeriesPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/heroes' element={<HeroesPage/>}/>
    <Route path='/movies' element={<MoviesPage/>}/>
    <Route path='/series' element={<SeriesPage/>}/>
    </Routes>
    </BrowserRouter>
    

    
  )
}

export default App