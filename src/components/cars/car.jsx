import React from "react";
import './cars.css';
function addStyle(e)  {
    console.log(e.target.nodeName);
   if(e.target.nodeName =="DIV"){
    e.target.classList.toggle('color');
   }
}
 let Car = (props)=>{
    return ( 
            <div className="cars animate" onClick={addStyle} >
                <h5> Marque : {props.brand}</h5>
                <h5> Couleur : {props.color}</h5>
            </div>
        );
}
export default Car;