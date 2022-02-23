import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import "./Table.css";
import axios from "axios";


interface Props {
    data: ProductInt[];
    product: string;
    columns: string[];
}

const Table: React.FC<Props> = (props) => {

    const deleteHandler = async (id: string) => {

        try{
            await axios.delete(`http://localhost:5000/api/admin/products/${id}`);
        }catch (err){
            console.log(err);
        }
    };

    return (
        <table className="flex-table">
            <thead>
            <tr>
                {props.columns.map(col => <th>{col}</th>)}
            </tr>
            </thead>
            <tbody>
            {props.data.map(row =>
                <div className="row-container">

                    <Link to={`/admin/products/${props.product}/edit/${row.id}`} className="row-link">
                        <tr className="table-row">
                            <td className="table-price">{row.price}</td>
                            <td className="table-description">{row.description}</td>
                            <td className="table-title">{row.title}</td>
                            <td className="table-id">{row.id}</td>
                        </tr>
                    </Link>
                    <AiOutlineCloseCircle className="delete-record"
                                          onClick={() => deleteHandler(row.id)}
                                          color="black"
                                          size="1.2rem"/>
                </div>
            )}
            </tbody>
        </table>
    );
};


export default Table;