import React, {useEffect, useState} from "react";
import "./BagsPanel.css";
import {Link} from "react-router-dom";
import Table from "../../Table/Table";
import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import axios from "axios";

const COLUMNS = ["Price", "Description", "Title", "ID"];

const BagsPanel: React.FC = () => {

    const [data, setData] = useState<ProductInt[]>([]);

    const getBags = async () =>{
        try{
            const response = await axios.get("http://localhost:5000/api/products/bags");
            const bags = response.data["bags"];
            setData(bags);
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getBags();
    })


    return (
        <>
            <div className="add-product-wrapper">
                <Link to={`/admin/products/bags/add-product`}
                      className="add-product">Add bag</Link>
            </div>
            <Table data={data}
                   product="bags"
                   columns={COLUMNS}/>
        </>
    );
};

export default BagsPanel;