import React, {useEffect} from "react";

import "./SortProducts.css";

interface Props{
    sortHandler: (sortMethod: string) => void;
}

const SortProducts:React.FC<Props> = ({sortHandler}) => {

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            const method = event.target.value;
            sortHandler(method);
    }



    return(
        <div className="products-sort-container">
            <select onChange={onSelectChange} id="sort-products">
                <option value="">---סוג מיון---</option>
                <option value="low-to-high">מהזול ליקר</option>
                <option value="high-to-low">מהיקר לזול</option>
            </select>
            <label htmlFor="sort-products">: מיין מחיר לפי</label>
        </div>
    )
}

export default SortProducts;