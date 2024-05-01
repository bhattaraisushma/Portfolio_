

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Resume from './components/Resume'
function App() {
  
 
  return(
   
  
    <div  className='overflow-x-hidden bg-bgimg'>
      <div className='h-full bg-black bg-opacity-[80%]'>
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
    </div>
  )
}

export default App
