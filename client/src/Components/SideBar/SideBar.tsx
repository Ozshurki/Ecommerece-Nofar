import React, {useState} from "react";
import {BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import "./SideBar.css";

interface Props {
    handleProductClick: (cur: string) => void;
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

const arrowDown = <BiDownArrowAlt color="black" size="1.5rem"/>;
const arrowUp = <BiUpArrowAlt color="black" size="1.5rem"/>;


const SideBar: React.FC<Props> = ({handleProductClick}) => {

    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

    const clickHandler = (productType:string) => {
        handleProductClick(productType);
        setIsDropdownActive(!isDropdownActive);
    }

    return (
        <motion.div className="sidebar">
            <Link to='/' className="home-link">Back to home page</Link>
            <div className="dropdown">
                <div className="dropdown-btn"
                     onClick={() => setIsDropdownActive(!isDropdownActive)}>Choose product
                    <span>
                        {isDropdownActive ? arrowUp : arrowDown}
                    </span>
                </div>
                {isDropdownActive &&
                <motion.div className="dropdown-content"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible">
                    <div className="dropdown-item paints-option"
                         onClick={() => clickHandler("paints")}>Paints
                    </div>
                    <div className="dropdown-item option bags-option"
                         onClick={() => clickHandler("bags")}>Bags
                    </div>
                    <div className="dropdown-item option courses-option"
                         onClick={() => clickHandler("courses")}>Courses
                    </div>
                </motion.div>}
            </div>
        </motion.div>
    );
};

export default SideBar;