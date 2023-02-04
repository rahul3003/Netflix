import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './componets/PageNotFound'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Movies from './pages/Movies'
import Player from './pages/Player'
import SignUp from './pages/SignUp'   
import TvShows from './pages/TvShows'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='home' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/play' element={<Player/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvShows' element={<TvShows/>}/>
          <Route path='' element={<SignUp/>}/>
          <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
