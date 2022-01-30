import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import './lottier.css';

const Lottief1 = (props) => {
    
    const container = useRef(null)

    useEffect((props) => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottiefiles/food-carousel.json')
        })
    }, [])
    
    return (
        <div className="lf1" ref={container}></div>
    );
} 

export default Lottief1;