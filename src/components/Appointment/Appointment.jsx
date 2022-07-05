import React from 'react'
import { NavLink } from 'react-router-dom'




function Appointment() {
    return (
        <>



            <section className="section3">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 my-5">

                            <p>YOU MAY CONTACT US FOR CONSTRUCTION & RENOVATION WORK</p>

                            <h3>We Are Great Construction Company</h3>

                        </div>


                        <div className="col-lg-6 text-center">



                            <NavLink to="/contact">

                            <button type="button" className="btn draw-border  my-5">Make An Appointment</button>

                            </NavLink>







                        </div>


                    </div>

                </div>

            </section>




        </>
    )
}

export default Appointment
