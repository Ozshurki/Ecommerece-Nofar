import React, {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';


import Home from "../../Pages/Home/Home";
import Bags from "../../Pages/Bags/Bags";
import Courses from "../../Pages/Courses/Courses";
import Paints from "../../Pages/Paints/Paints";
import Product from "../../Pages/Product/Product";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../../Pages/Cart/Cart";
import "./MainSite.css";

const MainSite: React.FC = () => {

    return (
        <>
            <Header/>
            <div className="site-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products/paints" element={<Paints/>}/>
                    <Route path="/products/bags" element={<Bags/>}/>
                    <Route path="/products/courses" element={<Courses/>}/>
                    <Route path="/products/:category/:id" element={<Product productName="Product"/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
};

export default MainSite;