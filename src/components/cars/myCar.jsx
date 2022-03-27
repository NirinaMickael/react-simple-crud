import React,{Component} from "react";
import Car from "./car";
import './cars.css';
const cars = [
    {
        brand : "Peugot",
        color : "black"
    },
    {
        brand : "Ford",
        color : "yellow"
    },
    {
        brand : "Toyota",
        color : "green"
    }
]
class MyCar extends Component{
    render(){
        return(
            cars.map(ele =>{
            return <Car color={ele.brand} brand={ele.color} />
            }) 
        );
    }
}
export default MyCar;