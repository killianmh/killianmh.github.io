import React from "react";

import "./normalize.css"
import "./styles.css"

import Header from "../Header";
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import Footer from "../Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <Hero />
                <Skills />
                <Projects />
                <Footer />
            </div>
        )
    }
}

export default App;