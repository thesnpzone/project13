
import React from "react";
import { NavLink } from "react-router-dom";





const Intro = () => {



    return (
        <>


            <section className="section1 d-flex align-items-center">



                <div className="container">


                    <div className="row">

                        <div className="col-lg-12 text-center mtop-5 color ">


                            <h1 className="headText">Drean Build</h1>


                            <p><u>SINCE</u> <u>1982</u></p>
                            <h1 className=" size " >
                                🤗WE WILL BE HAPPY🤗<br />🤗TO TAKE CARE OF YOUR WORK🤗
                            </h1>



                            <NavLink to="/contact">

                            <button type="button" className="btn draw-border mx-5 my-5">Contact Us</button>

                            </NavLink>









                        </div>




                    </div>


                </div>


            </section>

        </>
    )
}

export default Intro
