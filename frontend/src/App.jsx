

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Resume from './components/Resume'
function App() {
  
 
  return(
   
  
    <div  className='overflow-x-hidden'>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
    <Route path ='/resume' element={<Resume/>}>
  </Route>
</Routes>
</BrowserRouter>

  {/* <Home/>
<About/>
<Skill/> */}
    </div>
  )
}

export default App
