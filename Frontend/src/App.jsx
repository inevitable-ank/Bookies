import React from 'react'
import Home from './Home/Home'
import { Navigate, Route ,Routes } from 'react-router-dom'
// import Courses from './courses/Courses'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'


function App() {
  const [authUser, setAuthUser]=useAuth();
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element = {<Home /> }/>
        <Route path="/course" element = {authUser ? <Courses /> : <Navigate to="/signup" /> }/>
        <Route path="/signup" element = {<Signup /> }/>
        <Route path="/about" element = {<AboutUs />}/>
        <Route path="/contact" element = {<ContactUs />} />
      </Routes>
      <Toaster />  
    </div>
    </>
  )
}

export default App