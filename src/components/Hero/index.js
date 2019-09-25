import React from "react";

import { TweenMax, TimelineMax } from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";

import "./styles.css";

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.controller = new ScrollMagic.Controller();
    }

    // componentDidMount() {
    //     new ScrollMagic.Scene({
    //         triggerElement: '.hero',
    //         triggerHook: 0,
    //         duration: 0,
    //         offset: (window.innerHeight / 4)
    //     })
    //         .setClassToggle(".hero", "active")
    //         .reverse(false)
    //         .addTo(this.controller);
    // }

    render() {
        return (
            <div className="hero">
                <div className="title">
                    <h1>MK</h1>
                    <div className="rectangle"></div>    
                </div>
            </div>
        )
    }
}

export default Hero;