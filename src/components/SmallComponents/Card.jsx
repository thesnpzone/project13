import React from 'react'

function Cards(props) {
    return (
        <>

            <div className="card card_bg mt-5 text-center">

                <div className="card-block">

                    <img src={props.img} className="img-fluid p-2" alt="" />

                    <h4 className="card-title">{props.card_title}</h4>

                    <p className="card-text">{props.card_dis}</p>

                    

                </div>

            </div>


        </>
    )
}

export default Cards
