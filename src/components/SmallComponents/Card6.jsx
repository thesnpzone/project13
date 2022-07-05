import React from 'react'

export default function Card6(props) {
    return (
        <>


            <div className="card card_bg mt-3 pt-5 pb-5 text-center">
                <div className="card-body">
                    <p className="card-title">{props.plan}</p>
                    <h1 className="card-title size">{props.price}</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's  sed aperiam voluptatibus explicabo debitis dicta repellendus autem. Aliquid at deleniti nihil fuga dolorem deserunt perspiciatis commodi.</p>

                    <button type="button" className="btn draw-border my-4">Get Started</button>


                </div>
            </div>


        </>
    )
}
