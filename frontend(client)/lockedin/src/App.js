import './App.css'
import './style.css'
import {Routes,Route} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {BASE_URL} from './globals'

import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      
  
     <main>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     </main>
    </div>
  );
}

export default App;
