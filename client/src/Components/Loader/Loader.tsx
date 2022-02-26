import React from "react";
import {motion} from "framer-motion";

import "./Loader.css";

const loaderVariants = {
    animationOne: {
        x: [-30, 30],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 2
            },
            y: {
                repeat: Infinity,
                duration: 1,
                ease: 'easeOut'
            }
        }
    }
};

const Loader: React.FC = () => {
    return (
        <motion.div className="loader"
                    variants={loaderVariants}
                    animate="animationOne"
        >
        </motion.div>);
};

export default Loader;