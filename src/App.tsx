import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer.tsx'
import Navbar from './components/navBar/NavBar.tsx'
import React, {useState,useEffect } from 'react'
import axios from 'axios'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'


interface User{
  id: number;
  name: string;

}

function App() {
const [users, setUsers] = useState<User[]>([])

useEffect(() => {
axios.get<User[]>('https://db-blogpesoal-apki.onrender.com/swagger-ui/index.html#/').then(response => {
  setUsers(response.data)
}
).catch(error => {
  console.log(error)
}
)

}, [])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          

        </Routes>

      </div>
      <Footer/>
      </BrowserRouter>    
    </>
  )
}

export default App