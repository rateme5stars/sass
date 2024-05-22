import React from "react";
import './Header.css'
import logo from '../img/logo-white.png'

export default function Header() {
    return (
        <header className="header">
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">OUTDOORS</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated">Discover out tours</a>
            </div>

        </header>
    );
}