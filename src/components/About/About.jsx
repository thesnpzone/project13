import React from 'react'
import Cards from '../SmallComponents/Card'


// images import 

import icon1 from "../../images/icon/i1.png"
import icon2 from "../../images/icon/i2.png"
import icon3 from "../../images/icon/i3.png"
import icon4 from "../../images/icon/i4.png"





function AboutUs() {
    return (
        <>

            <section className="section2 ">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-lg-6 ab_bg"> </div>


                        <div className="col-lg-6 mt-5 pt-5 text-light mb-3">

                            <p>Welcome to DreamBuild</p>

                            <h1 className="size">Quality and Affordable Constructor</h1>

                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                            <h2>We Can Help You</h2>

                            <div className="row">

                                <div className="col-lg-6">
                                    
                                    <Cards img={icon1} card_title='Construction' card_dis='Far far away, behind the word mountains.' />
                                    
                                </div>

                                <div className="col-lg-6">
                                    
                                    <Cards img={icon2} card_title='Architecture' card_dis='Far far away, behind the word mountains.' />

                                </div>

                                <div className="col-lg-6">
                                    
                                    <Cards img={icon3} card_title='Consulting' card_dis='Far far away, behind the word mountains.' />

                                </div>

                                <div className="col-lg-6">
                                    
                                    <Cards img={icon4} card_title='Mechanical' card_dis='Far far away, behind the word mountains.' />

                                </div>



                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default AboutUs
