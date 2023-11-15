import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import Settings from "./components/pages/Settings";
import Profile from './components/pages/Profile';
import Signup from "./components/pages/Signup"
import Codeeditor from './components/pages/Codeeditor';
import Login from './components/pages/Login';
import About from './components/pages/About';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
    return (
        <Router>
       
       <Navbar />
         <Routes>
         <Route path='/' element={<Codeeditor/>}/>
           <Route path='/home' exact element={<Home/>} />
           <Route path='/login' exact element={<Login/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/settings' element={<Settings/>} />
           <Route path='/sign-up' element={<Signup/>} />
           <Route path='/about' element={<About/>} />
           
         </Routes>
         </Router>
        
    )
}

export default App
