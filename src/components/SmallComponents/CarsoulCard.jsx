import React from 'react'

export default function CarsoulCard(props) {
    return (
        <>


            <div className="p-5 text-center CardTeamCarsoul">

                <div className="card text-center py-5 px-2">


                    <img className="card-img-top img-fluid rounded-circle" src={props.CardTeamCarsoulImg} alt="Client Images" />


                    <h4 className="mt-5">{props.CardTeamCarsoulTitle}</h4>
                    <p>{props.CardTeamCarsoulTitle2}</p>


                    <div className="card-body">

                        <p className="card-text">{props.CardTeamCarsoulPara}</p>

                    </div>
                </div>

            </div>


        </>
    )
}
