import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import logo from './../../svg/icons_void-logo.svg'; 
import circle from './../../svg/icons_circle.svg'; 
import square from './../../svg/icons_square.svg'; 
import triangle from './../../svg/icons_triangle.svg'; 

import './Header.css';
class Header extends Component {
    render() {
        return (
            <header>
            <Link className="" to="/" >
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <nav>
                <Link className="customers" to="/Customers" >
                    <img src={circle} className="icon" />Customers
                </Link>
                <Link className="invoices" to="/CustomerSearch" >
                    <img src={square} className="icon" />Invoices
                </Link>
            </nav>
            <settings>
                <Link className="" to="/EditCustomer" ><img src={triangle} className="icon" />Settings</Link>
            </settings>

            </header>



        );
    }
}

export default Header;