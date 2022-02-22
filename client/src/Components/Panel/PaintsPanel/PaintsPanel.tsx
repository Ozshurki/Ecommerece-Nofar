import React, {useEffect, useState} from "react";
import "./PaintsPanel.css";
import Table from "../../Table/Table";
import {myProducts as data} from "../../../Pages/Paints/Paints";
import {Link} from "react-router-dom";
import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import axios from "axios";


const COLUMNS = ["מחיר", "תיאור", "כותרת", "מספר סידורי"];

const PaintsPanel: React.FC = () => {

    const [data, setData] = useState<ProductInt[]>([]);

    const getPaints = async () =>{
        try{
            const response = await axios.get("http://localhost:5000/api/products/paints");
            const paints = response.data["paints"];
            setData(paints);
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getPaints();
    })

    return (
        <>
            <div className="add-product-wrapper">
                <Link to={`/admin/products/paints/add-product`} className="add-product">הוסף תיק</Link>
            </div>
            <Table data={data}
                   product="paints"
                   columns={COLUMNS}/>
        </>
    );
};

export default PaintsPanel;