import React from 'react'

import { Link } from 'react-router-dom'

import img1 from '../../images/icon.png'

export default function Navbar(props) {
    return (
        <>


            <nav className={'navbar navbar-expand-md   text-center bg-inverse  scrolling-navbar '} style={{ padding: "0px", backgroundColor: "#0b0c10" }} >

                <div className="container-fluid" style={{ paddingLeft: "0px" }} >


                    <Link to="/" className="navbar-brand trapezoid">
                        <h1 className="h1small" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>{props.snp}</h1>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><img src={img1} alt="logo2" style={{ width: "40px" }} /></button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">

                            <li className="nav-item ">

                                <Link className="nav-link" to="/">
                                    Home
                                </Link>

                            </li>

                            <li className="nav-item">

                                <Link className="nav-link" to="/about" >About</Link>

                            </li>

                            <li className="nav-item">

                                <Link className="nav-link" to="/service">Services</Link>

                            </li>

                            <li className="nav-item">

                                <Link className="nav-link" to="/pricing">Pricing</Link>

                            </li>

                            <li className="nav-item">

                                <Link className="nav-link" to="/contact">Contact</Link>

                            </li>




                        </ul>

                    </div>

                </div>

            </nav>

        </>
    )
}
