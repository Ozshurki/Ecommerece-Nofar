import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import "./Navigation.css"


const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <NavLinks isMobile={false} closeMobileMenu={() => {}}/>
        </nav>
    );
};

export default Navigation;