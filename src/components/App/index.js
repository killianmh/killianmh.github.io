import React from "react";

import { TweenMax, TimelineMax} from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";


import "./styles.css"

import Header from "../Header";
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import Footer from "../Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: '.hero',
            triggerHook: 0,
            duration: "50%",
            offset: 0	
        })
        .setPin(".hero")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '.hero',
            triggerHook: 0,
            duration: 0,
            offset: (window.innerHeight / 4)	
        })
        .setClassToggle(".hero", "active")
        .addTo(this.controller);
    }

    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Projects />
                <Skills />
                <Footer />
            </div>
        )
    }
}

export default App;