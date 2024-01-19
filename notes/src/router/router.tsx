import React from 'react'
import {  Route, Routes } from "react-router-dom"
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Profile from '../pages/Profile/Profile'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>} />
            
        </Routes>
    )
}

export default AppRouter;