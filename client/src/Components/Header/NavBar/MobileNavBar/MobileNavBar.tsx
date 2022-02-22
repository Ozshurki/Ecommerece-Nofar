import React, {useState} from "react";
import NavLinks from "../NavLinks/NavLinks";
import "./MobileNavBar.css";
import classNames from "classnames";

interface Props {
    closeMobileMenu: () => void;
}

const MobileNavBar: React.FC<Props> = (props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    setTimeout(() => {
        setIsOpen(true);
    }, 0);

    return (
        <nav className={classNames('mobile-navbar', isOpen && 'test')}>
            <NavLinks isMobile={true}
                      closeMobileMenu={props.closeMobileMenu}/>
        </nav>
    );
};

export default MobileNavBar;