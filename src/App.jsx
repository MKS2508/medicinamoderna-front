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
                    <Route path="/PARAFERNALIA" element={<Products ProductsProps={{name: "CBD", id: 3}}/>}/>
                    <Route path="/ILUMINACION" element={<Products ProductsProps={{name: "ILUMINACION", id: 4}}/>}/>
                    <Route path="/CULTIVO" element={<Products ProductsProps={{name: "CULTIVO", id: 5}}/>}/>
                    <Route path="/MARCAS" element={<Products ProductsProps={{name: "MARCAS", id: 6}}/>}/>
                    <Route path="/ROPA" element={<Products ProductsProps={{name: "ROPA", id: 7}}/>}/>
                    <Route path="/CONTACTO" element={<Products ProductsProps={{name: "CBD", id: 8}}/>}/>
                    <Route path="/PRODUCTO/:ID" element={<Home/>}/>

                </Routes>


            </Router>


        </>
    );
}

export default App;
