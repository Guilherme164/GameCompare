import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    render() {
        return (

            <div class="topnav" id="myTopnav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a href="#home" class="active">Home</a>
                <a href="#news">M</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}
export default NavBar;