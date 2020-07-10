import React from 'react';
import './navbar.scss';
import {
    Link,
  } from "react-router-dom";
import image from '../../assets/logo/asset-1.svg';
import chevron from '../../assets/icons/chevron-down.svg';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container1">
        <img className="navbar__logo" src={image} alt=""/>
        </div>
        <div className="navbar__container3">
            <h1 className="navbar__slogan">Watch Together</h1>
            <img className="navbar__chevron" src={chevron} alt=""/>
        </div>
        <div className="navbar__container2">
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/about">About</Link>
        </div>
        </div>
    )
}
