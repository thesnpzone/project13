import React from 'react'

function Card4(props) {
    return (
        <>





            <div className="col-md-4 col-sm-6">
                <div className="box1">
                    <img src={props.imgteam} alt="" className="img-thumbn" />
                    <h3 className="title">{props.title}<br /><p>SENIOR ENGINEER</p></h3>
                    <ul className="icon">
                        <li><i className="fab fa-instagram fa-2x"></i></li>
                        <li><i className="fab fa-facebook fa-2x"></i></li>
                        <li><i className="fab fa-twitter fa-2x"></i></li>
                        <li><i className="fab fa-google fa-2x"></i></li>

                    </ul>
                </div>
            </div>





        </>
    )
}

export default Card4
