import React from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Single from './pages/Single';
import Maps from './pages/Map';
import Contactus from './pages/Contactus';
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path={`/:route_path`} Component={Find} />
        <Route path={`/:category/:id`}  Component={Single}/>
        <Route path='/map' Component={Maps} />
        <Route path='/contactUs' Component={Contactus} />
      </Routes>
    </div>
  )
}

export default App

