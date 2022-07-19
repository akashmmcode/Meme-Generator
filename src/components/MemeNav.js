import React from "react";
import face from "../images/Troll Face.png"
import "../Meme.css"

function MemeNav() {
    return (
        <nav>
            <div className="row">
                <div className="column1">
                    <img src={face} alt="frfgre" />
                </div>
                <div className="column2">
                    <h3>AkashMemeGenerator</h3>
                </div>
                <div className="column3">
                    <p >Course-Project 3</p>
                </div>
            </div>
        </nav>
    )
}

export default MemeNav