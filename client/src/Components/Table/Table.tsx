import React from "react";
import {Link} from "react-router-dom";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import "./Table.css";


interface Props {
    data: ProductInt[];
    product: string;
    columns: string[];
}

const Table: React.FC<Props> = (props) => {
    return (
        <table className="flex-table">
            <thead>
            <tr>
                {props.columns.map(col => <th>{col}</th>)}
            </tr>
            </thead>
            <tbody>
            {props.data.map(row =>
                <Link to={`/admin/products/${props.product}/edit/${row.id}`}>
                    <tr className="table-row">
                        <td className="table-price">{row.price}</td>
                        <td className="table-description">{row.description}</td>
                        <td className="table-title">{row.title}</td>
                        <td className="table-id">{row.id}</td>
                    </tr>
                </Link>
            )}
            </tbody>
        </table>
    );
};


export default Table;