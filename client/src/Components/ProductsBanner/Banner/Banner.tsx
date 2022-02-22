import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {BsArrowRightCircle} from 'react-icons/bs';
import './Banner.css';

interface Props {
    url: string;
    productName: string;
    imgURL: string;
}

const Banner: React.FC<Props> = (props) => {

    const [color, setColor] = useState<string>("brown");
    const [isHover, setIsHover] = useState<boolean>(false);

    /** Component Functions **/
    const onMouseOut = () => setColor("brown");
    const onMouseOver = () => setColor("purple");
    const toggleHover = () => setIsHover(!isHover);


    return (
        <Link to={props.url}>
            <div className="banner-container"
                 onMouseEnter={toggleHover}
                 onMouseLeave={toggleHover}>

                <img className={"banner-img"}
                     src={props.imgURL} alt=""/>
                <div className="banner-content">
                    <h3>{props.productName}</h3>
                    <BsArrowRightCircle onMouseOver={onMouseOver}
                                        onMouseOut={onMouseOut}
                                        color={color}
                                        size="2rem"
                                        className="banner-icon"/>
                </div>
            </div>
        </Link>
    );
};

export default Banner;