import React from "react";

import "./SortProducts.css";

interface Props{
    sortHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortProducts:React.FC<Props> = ({sortHandler}) => {
    return(
        <div className="products-sort-container">
            <select onChange={sortHandler} id="sort-products">
                <option value="">---סוג מיון---</option>
                <option value="low-to-high">מהזול ליקר</option>
                <option value="high-to-low">מהיקר לזול</option>
            </select>
            <label htmlFor="sort-products">: מיין מחיר לפי</label>
        </div>
    )
}

export default SortProducts;