
import './App.scss';
import {Routes,Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './Container/home';
import Skills from './Container/skills';
import About from './Container/about';
import Projects from './Container/projects';
import Contact from './Container/contact';
import Navbar from './Components/navbar';
import particles from './helper/utils.js/particles';

function App() {
   const location=useLocation();
  const hundleInit=async(main)=>{
    await loadFull(main)
  }

  const renderparticleJsInHomePage=location.pathname === "/"
  return (

    <div className="App">
      {
        renderparticleJsInHomePage && <Particles id="tsparticles" options={particles} init={hundleInit}/> 

      }
      
      <Navbar/>
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>

      
    </div>
  );
}

export default App;
