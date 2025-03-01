import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Allprofiles from './pages/Allprofiles'
import MyProfile from './pages/MyProfile'
import Indprofile from './pages/Indprofile'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/register' exact Component={Register}/>
        <Route path='/allprofiles' exact Component={Allprofiles}/>
        <Route path='/myprofile' exact Component={MyProfile}/>
        <Route path='/indprofile/:fullname/:email/:skill/:id' exact Component={Indprofile}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
