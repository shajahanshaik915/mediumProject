import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Pubilsh } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' Component={Signup}></Route>
          <Route path='/signin' Component={Signin}></Route>
          <Route path='/blog/:id' Component={Blog}></Route>
          <Route path='/blogs' Component={Blogs}></Route>
          <Route path='/publish' Component={Pubilsh}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
