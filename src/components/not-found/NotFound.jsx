import React ,{Component} from "react";
import "./NotFound.css"
import Header from "../header/header"
const NotFound = ()=>{
    return(
        <div className="errorContainer">
            <Header/>
            <h2>Error : 404</h2>
            <h1>PAGE NOT FOUND</h1>
        </div>
    )
}
export default NotFound;