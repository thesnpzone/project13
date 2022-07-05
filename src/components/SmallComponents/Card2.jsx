import React from 'react'
import { NavLink } from 'react-router-dom'



const Card2 = (props) => {
    return (
        <>

            <div className="card card_bg mt-5 text-center">

                <div className="card-block">

                    <img src={props.img} className="img-fluid p-2" alt="" />

                    <h4 className="card-title">{props.card_title}</h4>

                    <p className="card-text">{props.card_dis}</p>


                    <NavLink to="/service">


                        <button type="button" className="btn draw-border my-5">Learn More</button>


                    </NavLink>





                </div>

            </div>

        </>
    )
}

export default Card2
