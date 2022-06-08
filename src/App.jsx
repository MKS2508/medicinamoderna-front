import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar";
import React from "react";

function App() {
  return (
<>
  <Router>
    <TopBar/>
    <SideBar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>


</>
  );
}

export default App;
