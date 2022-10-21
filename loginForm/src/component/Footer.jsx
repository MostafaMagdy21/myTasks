import React from 'react';
import {Link}  from 'react-router-dom';

export const Footer = () =>(
    <React.Fragment>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-list d-flex col-8">
                        <ul>
                            <h3>COMPANY</h3>
                            <li><Link to="#">Profile</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="#">Contact</Link></li>
                            <li><Link to="#">Address</Link></li>
                        </ul>
                        <ul>
                            <h3>COMMUNITY</h3>
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Twitter</Link></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Linkedin</Link></li>
                        </ul>
                        <ul>
                            <h3>LEGAL</h3>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li><Link to="#">Cookie</Link></li>
                        </ul>
                    </div>
                
                    <div className="copyright col-4">
                        <h6>Copyright © 2021, Template Mostafa</h6>
                    </div>
                </div>
            </div>
        </div>

        
    </React.Fragment>
)

export default Footer ;