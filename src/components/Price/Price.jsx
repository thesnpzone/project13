import React from 'react'

import Heading from '../SmallComponents/Heading'

import Card6 from '../SmallComponents/Card6'


export default function Price() {
    return (
        <>



            <div className="container-fluid">

                <div className="row">

                    <Heading smallHeading="Our Pricing" mainHeading="Pricing & Packages" smallpara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque libero sed enim ratione labore consequuntur minima voluptatibus odit quam. Laboriosam pariatur iure vero error!" />

                    <div className="col-lg-3  col-md-6">
                        <Card6 price="₹ 49K" plan="BASIC PLAN" />
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <Card6 price="₹ 79K" plan="BEGINNER PLAN" />
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <Card6 price="₹ 109K" plan="PREMIUM PLAN" />
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <Card6 price="₹ 149K" plan="ULTIMATE PLAN" />
                    </div>


                </div>


            </div>


        </>
    )
}
