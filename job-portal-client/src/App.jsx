
import { Outlet, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main/index.jsx'
import Login from './components/Login'
import Signup from "./components/Signup";



function App() {

  return (
    <>
    <Navbar/>
<Outlet/>
      <Routes>
        {user && <Route path="/" exact element={<Main/>} />}
        <Route path="/signup" exact element={<Signup/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/" exact element={<Navigate replace to="/login"/>} />
      </Routes>
    </>
  )
}

export default App
