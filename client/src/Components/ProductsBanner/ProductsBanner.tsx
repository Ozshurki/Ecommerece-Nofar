import React, {useEffect} from 'react';
import Banner from "./Banner/Banner";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import './ProductsBanner.css';


const ProductsBanner: React.FC = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    const handleAnimation = async () => {
        if (inView)
            await animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            });
        else
            await animation.start({x: '-100vw'});
    };

    useEffect(() => {
        handleAnimation();
    }, [inView]);

    return (
        <div className="banners-container" ref={ref}>
            <motion.div className="banners-wrapper" animate={animation}>
                <Banner url="/products/paints"
                        productType="Paints"
                        imgURL="https://flone-react.pages.dev/assets/img/banner/banner-1.jpg"/>
                <Banner url="/products/bags"
                        productType="Bags"
                        imgURL="https://flone-react.pages.dev/assets/img/banner/banner-2.jpg"/>
                <Banner url="/products/courses"
                        productType="Courses"
                        imgURL="https://flone-react.pages.dev/assets/img/banner/banner-3.jpg"/>
            </motion.div>
        </div>
    );
};

export default ProductsBanner;