import React from "react";
import Lottief1 from "./Lotties1";
import Lottief2 from "./Lotties2";
import './LottieController.css'

const LottieController = (props) => {
    return(
        <div className="lottie-container">
            <Lottief1 />
            <Lottief2 />
        </div>
    );
}

export default LottieController;