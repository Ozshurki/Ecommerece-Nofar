import React, {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";

import "./Slider.css";

interface Props {
    images: string[];
    setImage: (img: string) => void;
}

const Slider: React.FC<Props> = ({images, setImage}) => {

    const [sliderWidth, setSliderWith] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (sliderRef.current === null) return;


        console.log(sliderRef)
        console.log(`ScrollWidth is: ${sliderRef.current.scrollWidth}`)


         const width = sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
         setSliderWith(width);
    }, []);

    return (
        <motion.div ref={sliderRef} className="slider">
            <motion.div className="inner-slider"
                        drag="x"
                        dragConstraints={{right: 0, left: -sliderWidth}}>
                {images.map((image: string) => {
                    return (
                        <motion.div className="slider-item"
                                    key={image}
                                    onClick={() => setImage(image)}>
                            <img src={image} alt="sliderItem"/>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default Slider;