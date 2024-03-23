import React from 'react'
import './Header.css'
import logo from '../images/Yara_logo.svg.png'
 
function Header(){
    return (
        <div className="container">
            <div class ='header'>
                <ul>
                    <li><img class = 'logo'src={logo} alt="logo" /></li>
                    <li><p> sales Enabler</p></li>
                </ul>
                <ul>
                    <li> <a href="#">about </a> </li>
                    <li><a href="">bell</a></li>
                    <li><a href="">account</a></li>
                </ul>
            </div>
            <div className="sidenav">
                <ul>
                    <li><a href= "#"> Inventory</a></li>
                    <li><a href= "#"> Sales History</a></li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;