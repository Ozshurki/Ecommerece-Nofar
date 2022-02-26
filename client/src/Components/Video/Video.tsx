import React from "react";
import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import './Video.css';

interface Props {
    urlVideo: string;
    width: string;
    height: string;
}


const playerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {duration: 1.5}
    }
};

const Video: React.FC<Props> = (props) => {

    return (
        <motion.div className="video-container"
                    variants={playerVariants}
                    initial="hidden"
                    animate="visible">
            <ReactPlayer
                className="video"
                width={props.width}
                height={props.height}
                playing={false}
                url={props.urlVideo}/>
        </motion.div>
    );
};

export default Video;


