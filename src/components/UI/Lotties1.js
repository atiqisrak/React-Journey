import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import './lottier.css';

const Lottief1 = (props) => {
    
    const container = useRef(null)

    // var div1 = document.querySelector("#");

    
var anim1 = {
    container: document.querySelector("#abc"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../../assets/lottiefiles/food-carousel.json')
};
var anim2 = {
    container: document.querySelector("#xyz"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../../assets/lottiefiles/foodies.json')
};
var anim3 = {
    container: document.querySelector("#gtr"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../../assets/lottiefiles/food-carousel.json')
};



useEffect((props) => {
    Lottie.loadAnimation(anim1)
}, []);

useEffect((props) => {
    Lottie.loadAnimation(anim2)
}, []);

useEffect((props) => {
    Lottie.loadAnimation(anim3)
}, []);

return (
    <div>
        <div className="lf1" id="abc"></div>
        <div className="lf2" id="xyz"></div>
        <div className="lf2" id="gtr"></div>
    </div>
);
}

export default Lottief1;