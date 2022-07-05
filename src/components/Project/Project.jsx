import React from 'react'

import Heading from '../SmallComponents/Heading'

import Card5 from '../SmallComponents/Card5'


// images imports 

import projectimg1 from '../../images/webimg/9.png'
import projectimg2 from '../../images/webimg/10.png'
import projectimg3 from '../../images/webimg/11.png'
import projectimg4 from '../../images/webimg/12.png'
import projectimg5 from '../../images/webimg/13.png'
import projectimg6 from '../../images/webimg/14.png'





export default function Project() {
    return (
        <>


            <div className="container-fluid">

                <div className="row">

                    <Heading smallHeading="Portfolio" mainHeading="Projects" smallpara=" 
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis est hic, cupiditate deserunt ea ipsum delectus fuga placeat enim cum harum doloremque nemo repellendus, quasi ut dolore sit laborum."/>


                    <Card5 projectImg={projectimg1} projectTitle="High Tower Works" projectSubtitle="BUILDING" />

                    <Card5 projectImg={projectimg2} projectTitle="High Tower Works" projectSubtitle="BUILDING" />

                    <Card5 projectImg={projectimg3} projectTitle="High Tower Works" projectSubtitle="BUILDING" />

                    <Card5 projectImg={projectimg4} projectTitle="High Tower Works" projectSubtitle="BUILDING" />

                    <Card5 projectImg={projectimg5} projectTitle="High Tower Works" projectSubtitle="BUILDING" />

                    <Card5 projectImg={projectimg6} projectTitle="High Tower Works" projectSubtitle="BUILDING" />


                </div>

            </div>



        </>
    )
}
