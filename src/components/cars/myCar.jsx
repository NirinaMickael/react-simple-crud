import React,{Component} from "react";
import Car from "./car";
import './cars.css';
import Header from "../header/header";
import getList from "./listCar";
class Cars extends Component{
    state={
         cars : getList(),
         compteur : 0
       }
    handleClick = ()=>{
        let cars = this.state.cars;
        let car = { 
            id : cars[cars.length-1].id,
            brand:"4x4",
            color:"red"
        }
        let newCars = cars.slice();
        newCars.push(car);
        this.setState({cars:newCars})
    }
    render(){
        return(
            <div>
                <Header/>
                <button onClick={this.handleClick}>Add</button>
               <div className="carsContainer" >
                    {this.state.cars.map(car => <Car color={car.brand} brand={car.color} />) }
               </div>  
            </div>
            
        );
    }
}
export default Cars;