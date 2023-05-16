
import { useState } from 'react';
import './App.css';

import reels from './assets/Data';
import Main from './Pages/Main';
import {Routes,Route} from "react-router-dom"
import Profile from './Pages/Profile';
function App() {
  const [minidata,setMinidata]=useState(reels)
  return (
    <div className="App">
    
     {/* <Navigation reels={minidata}/> */}
     <Routes>
     <Route path='/' element={<Main/>}/>
      <Route path='/Profile' element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
