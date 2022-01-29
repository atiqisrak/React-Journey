import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Lottief2 = (props) => {
    
    const container = useRef(null)

    useEffect((props) => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottiefiles/foodies.json')
        })
    }, [])
    
    return (
        <div className="lottie-container">
            <div className="lf-container">
                <div className="lf2" ref={container}></div>
            </div>
        </div>
    );
} 

export default Lottief2;