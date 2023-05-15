import React from "react";
import{FaPath} from "react-icons/fa"
import "../App.css"

function Template(props){
    return(
        <div className="template">
            <img src={`images/${props.img}`}/>
            <div className="textSide">
                <span className="a"><img src={`images/${props.path}`} className="path"/> {props.country} <a href="#">view on google map</a></span>
                <h1 className="title">{props.title}</h1>
                <span className="date">{props.start}</span> - 
                <span className="date"> {props.end}</span>
                <p className="para">{props.description}</p>
            </div>
        </div>
    )
}

export default Template;