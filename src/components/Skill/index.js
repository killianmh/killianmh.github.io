import React from "react";
import "./styles.css"

const Skill = (props) => (
    <div className={`skill ${props.className}`}>
        <div className="inner">
            <div className="title">
                {props.skill}
            </div>
        </div>
    </div>
)

export default Skill;