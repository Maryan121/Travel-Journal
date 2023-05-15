import React from "react";
import Hero from "./hero";
import Template from "./template";
import data from "../data"
import "../App.css"


function Container(){
    let items = data.map((item)=>{
        return (
            <Template 
            key={item.id}
                {...item}
            />
        )
    })
    return(
        <div className="container">
            {items}
        </div>
    );
}

export default Container;