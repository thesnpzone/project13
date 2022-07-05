import React from 'react'

import PagesHeading from '../SmallComponents/PagesHeading'

import AboutUs from '../About/About'

import Appointment from '../Appointment/Appointment'

import Team from '../Team/Team'

export default function Page2() {
    return (
        <>


            <PagesHeading ASP="ABOUT US" />

            <AboutUs />
            <Appointment />
            <Team />

        </>
    )
}
