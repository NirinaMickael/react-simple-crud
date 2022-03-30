import React,{Component} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
class Header extends Component{
    state = {

    };
    render(){
        return(
            <header>
                <nav>
                    <ul> 
                        <NavLink to="/">
                            <li><a>Home</a></li>
                        </NavLink>
                        <NavLink to="/about">
                        <li><a>About</a></li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li><a>Contact</a></li>
                        </NavLink>
                        <NavLink to="/user">
                            <li><a>User</a></li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;