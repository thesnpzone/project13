import React from 'react'

export default function Card5(props) {
    return (
        <>



            <div className="col-md-4 col-sm-6 p-0">
                <div className="box20">
                    <img src={props.projectImg} alt="" />
                    <div className="box-content">
                        <h1 className="title">{props.projectTitle}</h1>
                        <span className="post">{props.projectSubtitle}</span>
                    </div>

                </div>
            </div>



        </>
    )
}
