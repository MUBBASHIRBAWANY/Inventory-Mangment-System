import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'  
import Products from './Pages/Products/Products'
import routes from './utils/routes.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map((item)=>{
            return <Route key={item.path} path={item.path} element={item.component} />
          })
        }
      </Routes>
    </div>
  )
}

export default App
