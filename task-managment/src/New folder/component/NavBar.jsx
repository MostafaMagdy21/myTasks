import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () =>{
    return(
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="/tasks">tasks</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;