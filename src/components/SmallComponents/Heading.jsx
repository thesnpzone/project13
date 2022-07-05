import React from 'react'

function Heading(props) {
    return (
        <>

            <div className="col-lg-12 text-center pt-5 mb-3">

                <p>{props.smallHeading}</p>

                <h1 className="size ">{props.mainHeading}</h1>

                <p>{props.smallpara}</p>

            </div>


        </>
    )
}

export default Heading
