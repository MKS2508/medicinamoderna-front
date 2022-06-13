import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar";
import React from "react";
import 'antd/dist/antd.min.css';
import {Col, Row} from "antd";
import Products from "./pages/Products/Products"; // or 'antd/dist/antd.less'

function App() {
    return (
        <>
            <Router>
                <TopBar/>
                <SideBar/>

                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/CBD" element={<Products ProductsProps={{name: "CBD", id: 2}}/>}/>
                    <Route path="/PARAFERNALIA" element={<Home/>}/>
                    <Route path="/ILUMINACION" element={<Home/>}/>
                    <Route path="/CULTIVO" element={<Home/>}/>
                    <Route path="/MARCAS" element={<Home/>}/>
                    <Route path="/ROPA" element={<Home/>}/>
                    <Route path="/CONTACTO" element={<Home/>}/>
                    <Route path="/PRODUCTO/:ID" element={<Home/>}/>

                </Routes>


            </Router>


        </>
    );
}

export default App;
