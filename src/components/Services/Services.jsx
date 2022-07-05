import React from 'react'

import Heading from '../SmallComponents/Heading'
import Card2 from '../SmallComponents/Card2'
import Card3 from '../SmallComponents/Card3'


// images import 

import sericon1 from '../../images/icon/i1.png'
import sericon2 from '../../images/icon/i2.png'
import sericon3 from '../../images/icon/i3.png'



export default function Services() {
    return (
        
        <>

            <section className="section4">

                <div className="container">

                    <div className="row mb-5">


                        <Heading smallHeading="What We Do" mainHeading="Services" />


                        <div className="col-lg-6 ser_bg mt-5"> </div>


                        <div className="col-lg-6 text-light ">

                            <Card2 img={sericon1} card_title='Construction Services' card_dis='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind' />

                            <Card3 img={sericon2} card_title='Construction Services' card_dis='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind' />
                            
                            <Card2 img={sericon3} card_title='Architecture Services' card_dis='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind' />




                        </div>


                    </div>

                </div>



            </section>



        </>
    )
}
