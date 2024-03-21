import React from 'react'
import './Header.css'
import logo from '../images/Yara_logo.svg.png'
 
function Header(){
    return (
        <header>
            <ul>
                <li><img class = 'logo'src={logo} alt="logo" /></li>
                <li><p> sales Enablement</p></li>
            </ul>
            <ul>
                <li> <a href="#">about </a> </li>
                <li><a href="">bell</a></li>
                <li><a href="">account</a></li>
            </ul>
        </header>
    )
}
export default Header;