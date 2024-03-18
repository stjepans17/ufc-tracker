import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src="UFC_Logo.svg" alt="ufclogo" />
            </a>
            <nav>
                <ul className="nav__links">
                    <li>
                        <a href="/flyweight">FLYWEIGHT</a>
                    </li>
                    <li>
                        <a href="/bantamweight">BANTAMWEIGHT</a>
                    </li>
                    <li>
                        <a href="/featherweight">FEATHERWEIGHT</a>
                    </li>
                    <li>
                        <a href="/lightweight">LIGHTWEIGHT</a>
                    </li>
                    <li>
                        <a href="/welterweight">WELTERWEIGHT</a>
                    </li>
                    <li>
                        <a href="/middleweight">MIDDLEWEIGHT</a>
                    </li>
                    <li>
                        <a href="/lightheavyweight">LIGHT HEAVYWEIGHT</a>
                    </li>
                    <li>
                        <a href="/heavyweight">HEAVYWEIGHT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
