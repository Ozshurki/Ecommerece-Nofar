import React, {useState} from "react";
import {BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";
import {motion} from "framer-motion";

import "./SortProducts.css";


interface Props{
    sortHandler: (sortMethod: string) => void;
}

const dropdownVariants = {
    hidden: {
        y: "-20px"
    },
    visible: {
        y: "0",
        transition: {duration: 0.5}
    }
};

const SortProducts:React.FC<Props> = ({sortHandler}) => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const arrowDown = <BiDownArrowAlt color="black" size="1.5rem"/>;
    const arrowUp = <BiUpArrowAlt color="black" size="1.5rem"/>;

    const clickHandler = (method:string) => {
        sortHandler(method);
        setShowDropDown(!showDropDown);
    }

    return(
        <div className="sort-dropdown">
            <div className="sort-dropdown-btn"
                 onClick={() => setShowDropDown(!showDropDown)}>Sort by:
                <span>
                        {showDropDown ? arrowUp : arrowDown}
                    </span>
            </div>
            {showDropDown &&
            <motion.div className="sort-dropdown-content"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible">
                <div className="sort-dropdown-item paints-option"
                     onClick={() => clickHandler("high-to-low")}>High to low
                </div>
                <div className="sort-dropdown-item option bags-option"
                     onClick={() => clickHandler("low-to-high")}>Low to high
                </div>
            </motion.div>}
        </div>


        // <div className="products-sort-container">
        //     <select onChange={onSelectChange} id="sort-products">
        //         <option value="">---סוג מיון---</option>
        //         <option value="low-to-high">מהזול ליקר</option>
        //         <option value="high-to-low">מהיקר לזול</option>
        //     </select>
        //     <label htmlFor="sort-products">: מיין מחיר לפי</label>
        // </div>
    )
}

export default SortProducts;