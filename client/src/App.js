import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


export default function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
  )
}
