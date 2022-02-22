import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import ManagementPanel from "../../Pages/ManagementPanel/ManagementPanel";
import EditProduct from "../../Pages/EditProduct/EditProduct";
import AddProduct from "../../Pages/AddProduct/AddProduct";


const AdminRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="" element={<ManagementPanel/>}/>
            <Route path="/products/paints/edit/:id" element={<EditProduct productType="paint"/>}/>
            <Route path="/products/bags/edit/:id" element={<EditProduct productType="bag"/>}/>
            <Route path="/products/courses/edit/:id" element={<EditProduct productType="course"/>}/>
            <Route path="/products/paints/add-product" element={<AddProduct productType="paint"/>}/>
            <Route path="/products/bags/add-product" element={<AddProduct productType="bag"/>}/>
            <Route path="/products/courses/add-product" element={<AddProduct productType="course"/>}/>
        </Routes>
    );
};

export default AdminRoutes;