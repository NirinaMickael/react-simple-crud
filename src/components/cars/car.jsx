import React from "react";
import './cars.css';
 let Car = (props)=>{
    return ( 
            <div className="cars  carsGrid animate">
                <h5> Marque : {props.brand}</h5>
                <h5> Couleur : {props.color}</h5>
                <button className="btn">Changer</button>
            </div>
        );
}
export default Car;