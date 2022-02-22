import React, {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Bags from "../../Pages/Bags/Bags";
import Courses from "../../Pages/Courses/Courses";
import Paints from "../../Pages/Paints/Paints";
import Product from "../../Pages/Product/Product";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const MainSite: React.FC = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/products/:category/:id" element={<Product productName="מוצר"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/paints" element={<Paints productName={"paints"}/>}/>
                <Route path="/products/bags" element={<Bags productName={"bags"}/>}/>
                <Route path="/products/courses" element={<Courses/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default MainSite;