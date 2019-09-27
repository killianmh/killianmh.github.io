import React from "react";

import "./styles.css";

class Hero extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="hero">
                <div className="title">
                    <h1>MK</h1>
                    <div className="rectangle">
                        <div className="cascade">
                            <div className="cascade-part"></div>
                            <div className="cascade-part"></div>
                            <div className="cascade-part"></div>
                            <div className="cascade-part"></div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Hero;