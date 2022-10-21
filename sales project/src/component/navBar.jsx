import React from 'react';
import {Link} from 'react-router-dom';

const MainNav = () =>(
    <ul className="nav bg-dark">
        <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Expenses</Link>
        </li>
        <li className="nav-item">
            <Link to="/list" className="nav-link">List</Link>
        </li>
        <li className="nav-item">
            <Link to="/addnew" className="nav-link">Add New</Link>
        </li>
    </ul>
)

export default MainNav;