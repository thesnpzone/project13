import React from 'react'

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import CarsoulCard from '../SmallComponents/CarsoulCard'

import Heading from '../SmallComponents/Heading'


// images import 


import carimages1 from '../../images/webimg/1.png'
import carimages2 from '../../images/webimg/2.png'
import carimages3 from '../../images/webimg/3.png'



export default function Carsoul() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 465 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>


            <div className="container">

                <Heading

                    smallHeading="Testimonial"
                    mainHeading="Happy Clients"
                    smallpara="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis est hic, cupiditate deserunt ea ipsum delectus fuga placeat enim cum harum doloremque nemo repellendus, quasi ut dolore sit laborum."
                />

            </div>

            <div className=" container">


                <Carousel
                    responsive={responsive}
                    draggable={true}
                    showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    pauseOnHover={true}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}

                >


                    <CarsoulCard
                        CardTeamCarsoulImg={carimages1}
                        CardTeamCarsoulTitle="Doraemon"
                        CardTeamCarsoulTitle2="MARKETING MANAGER"
                        CardTeamCarsoulPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis ducimus suscipit distinctio a assumenda nam natus, quaerat, perferendis praesentium debitis repudiandae earum. Cupiditate ullam neque ut non quo consequuntur!"

                    />


                    <CarsoulCard
                        CardTeamCarsoulImg={carimages2}
                        CardTeamCarsoulTitle="Nobita"
                        CardTeamCarsoulTitle2="MARKETING MANAGER"
                        CardTeamCarsoulPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis ducimus suscipit distinctio a assumenda nam natus, quaerat, perferendis praesentium debitis repudiandae earum. Cupiditate ullam neque ut non quo consequuntur!"

                    />


                    <CarsoulCard
                        CardTeamCarsoulImg={carimages3}
                        CardTeamCarsoulTitle="Gian"
                        CardTeamCarsoulTitle2="MARKETING MANAGER"
                        CardTeamCarsoulPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis ducimus suscipit distinctio a assumenda nam natus, quaerat, perferendis praesentium debitis repudiandae earum. Cupiditate ullam neque ut non quo consequuntur!"

                    />




                </Carousel>



            </div>



        </>
    )
}
