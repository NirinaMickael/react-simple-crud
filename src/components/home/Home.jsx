import React from "react";
import Header from "../header/header";
import "./Home.css"
const Home = () =>{
    return(
        <div>
            <Header/>
            <div className="home">
                <div className="welcome FadeOut">
                    <h1 className="title"> WELCOME to <span>Fy</span>'tsiro</h1>
                    <p>Aperiam sed repellendus molestiae. Officiis voluptate possimus <br />
                     dolorem exercitationem autem. Tempora corrupti blanditiis labore sequi <br />
                      voluptate repellendus cumque perspiciatis ea doloremque natus!</p>
                </div> 
                <div className="image Animate">
                    <img src="undraw_hamburger_-8-ge6.svg" alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Home;