import React from 'react'


import AboutUs from '../About/About'

import Intro from "../Intro/Intro"

import Appointment from '../Appointment/Appointment'

import Services from '../Services/Services'

import Team from '../Team/Team'

import Project from '../Project/Project'

import Price from '../Price/Price'

import Carsoul from '../Carsoul/Carsoul'

import FAQ from '../Faq/FAQ'



// css links 

import "css"

import "../../css/aboutus.css"
import "../../css/App.css"
import "../../css/contact.css"
import "../../css/footer.css"
import "../../css/home.css"
import "../../css/Project.css"
import "../../css/service.css"
import "../../css/team.css"



function Main() {
    return (
        <>


            <Intro />
            <AboutUs/>
            <Appointment/>
            <Services/>
            <Team/>
            <Project/>
            <Price/>
            <Carsoul/>
            <FAQ/>


        </>
    )
}

export default Main
