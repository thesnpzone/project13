import React from 'react'

import Card4 from '../SmallComponents/Card4'

import Heading from '../SmallComponents/Heading'

// images imports 

import teamimg1 from '../../images/webimg/6.png'
import teamimg2 from '../../images/webimg/7.png'
import teamimg3 from '../../images/webimg/8.png'




function Team() {
    return (
        <>



            <section className="section5 mb-5 ">

                <div className="container">

                    <div className="row text-center">

                        <Heading smallHeading="Team & Staff" mainHeading="Qualified Engineers" smallpara="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis est hic, cupiditate deserunt ea ipsum delectus fuga placeat enim cum harum doloremque nemo repellendus, quasi ut dolore sit laborum." />

                        <Card4 title="Ben 10" imgteam={teamimg1} />
                        <Card4 title="Gwen" imgteam={teamimg2} />
                        <Card4 title="Kevin 11" imgteam={teamimg3} />


                    </div>

                </div>

            </section>


        </>
    )
}

export default Team
