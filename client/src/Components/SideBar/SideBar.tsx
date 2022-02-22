import React, {useState} from "react";
import "./SideBar.css";
import {AiOutlineClose} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";
import {motion, AnimatePresence} from "framer-motion";
import classNames from "classnames";

interface Props {
    handleProductClick: (cur: string) => void;
}

const sideBarVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {duration: 1.3}
    },
    exit: {
        x: "-100vw",
        transition: {ease: "easeInOut"}
    }
};
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


const SideBar: React.FC<Props> = (props) => {

    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

    const paintClickHandler = (): void => props.handleProductClick("paints");
    const bagsClickHandler = (): void => props.handleProductClick("bags");
    const coursesClickHandler = (): void => props.handleProductClick("courses");
    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);


    return (
        <motion.div className="sidebar">
            <div className="dropdown">
                <div className="dropdown-btn"
                     onClick={toggleDropdown}>אנא בחר מוצר
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
                         onClick={paintClickHandler}>ציורים
                    </div>
                    <div className="dropdown-item option bags-option"
                         onClick={bagsClickHandler}>תיקים
                    </div>
                    <div className="dropdown-item option courses-option"
                         onClick={coursesClickHandler}>קורסים
                    </div>
                </motion.div>}
            </div>
        </motion.div>
    );
};

export default SideBar;