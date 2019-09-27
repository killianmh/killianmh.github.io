import React from "react";

import Skill from "../Skill";
import "./styles.css"

const Skills = () => (
    <div className="skills">
        <Skill skill="react" className="react"/>
        <Skill skill="responsive design" className="responsive"/>
        <Skill skill="CSS3" className="css"/>
        <Skill skill="JavaScript" className="js"/>
    </div>
)

export default Skills;