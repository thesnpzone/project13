import React from 'react'

import Heading from '../SmallComponents/Heading'

export default function Contact() {
    return (
        <>


            <section className="section9 mt-5">

                <div className="container text-center">


                    <div className="row">

                        <div className="col-lg-12 text-left">

                            <h3>Contact Information:</h3>

                            <div className="row pt-4">

                                <div className="col-lg-3 col-md-4">
                                    <p> <b> <h5>ADDRESS:</h5></b> 198 West 21th Street, Suite 721 Maharashtra India </p>
                                </div>


                                <div className="col-lg-3 col-md-4">
                                    <p> <b> <h5>Phone:</h5></b> +91 9512357891 </p>
                                </div>




                                <div className="col-lg-3 col-md-4">
                                    <p> <b> <h5>EMAIL :</h5></b>snpzone06@gmail.com</p>
                                </div>




                                <div className="col-lg-3 col-md-4">
                                    <p> <b> <h5>Website :</h5></b>snpzone.github.io</p>
                                </div>




                            </div>

                        </div>

                        <div className="col-lg-6 mb-5 py-5">

                            <iframe title="myLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703867.071679905!2d64.40183608457193!3d20.04915895569306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1632943241735!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>

                        </div>


                        <div className="col-lg-6 contact_bg1 mb-5 py-5">

                            <Heading smallHeading="DROP A MESSAGE" mainHeading="Request A Quote" />


                            <form >

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">

                                        <div className="form-group text-left">
                                            <label >Name</label>
                                            <input className="form-control" placeholder="Enter name" />
                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6">

                                        <div className="form-group text-left">
                                            <label >Email</label>
                                            <input className="form-control" placeholder="Enter email" />
                                        </div>

                                    </div>

                                </div>

                                <div className="form-group text-left">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button className="btn draw-border my-5">Submit</button>

                            </form>

                        </div>



                    </div>



                </div>

            </section>

        </>
    )
}
