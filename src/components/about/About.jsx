import React ,{Component} from "react";
import MyCar from "../cars/myCar";
import Header from "../header/header";
const About = ()=>{
    return (
        <div>
            <Header/>
            <p>A propos de votre CV</p>
            <h6>Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit.
                Quas reprehenderit minima assumenda,
                optio, consequatur repellendus culpa vero
                cum aut illo eaque ex nihil
                 minus blanditiis molestiae. Vitae cum accusamus sequi.
            </h6>
            <div  className='App'>
                <MyCar/>
            </div> 
        </div>
    );
}
export default About;