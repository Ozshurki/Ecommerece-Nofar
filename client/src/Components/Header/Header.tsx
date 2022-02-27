import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, RootStateOrAny} from "react-redux";
import {CgMenu} from "react-icons/cg";
import {GrFormClose} from "react-icons/gr";
import {BsCart3} from "react-icons/bs";

import Navigation from "./NavBar/Navigation/Navigation";
import MobileNavBar from "./NavBar/MobileNavBar/MobileNavBar";
import './Header.css';


const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);
    const cartQuantity:number = useSelector((state:RootStateOrAny )=> state.cart.totalQuantity);

    const toggleOpen = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const hamburgerMenu = <CgMenu color="black"
                                  size="2rem"
                                  onClick={toggleOpen}/>;
    const closeMenu = <GrFormClose color="black"
                                   size="2rem"
                                   onClick={toggleOpen}/>;

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://flone-react.pages.dev/assets/img/logo/logo.png" alt=""/>
                </Link>
            </div>
            <div className="navbar">
                <Navigation/>
                {open && <MobileNavBar closeMobileMenu={closeMobileMenu}/>}
            </div>
            <Link to="/cart" className="cart">
                <BsCart3 className="cart-icon"
                               color="black"
                               size="1.5rem"/>
                <span className="cart-badge">{cartQuantity}</span>
            </Link>
            <div className="menu-icon">
                {open ? closeMenu : hamburgerMenu}
            </div>
        </div>
    );
};

export default Header;