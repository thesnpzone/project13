import React from 'react'


import Heading from '../SmallComponents/Heading'

export default function FAQ() {
    return (
        <>


            <section className="section9 mt-5">

                <div className="container-fluid text-center">


                    <div className="row">


                        <div className="col-lg-12 text-left contact_bg2    py-5">

                            <Heading smallHeading="Frequently Ask Question" mainHeading="You Want To Ask Something From Us?" smallpara="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quae ex rem quo officiis reprehenderit exercitationem sapiente quisquam consequatur laboriosam?" />



                            <div className="accordion container" id="accordionExample275">

                                <div className="card card_bg z-depth-0 bordered">

                                    <div className="card-header" id="headingOne2">

                                        <h5 className="mb-0">

                                            <div className="courser" type="button" data-toggle="collapse" data-target="#collapseOne2"
                                                aria-expanded="true" aria-controls="collapseOne2">

                                                Collapsible Group Item #1

                                            </div>

                                        </h5>

                                    </div>

                                    <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2"
                                        data-parent="#accordionExample275">

                                        <div className="card-body">

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cum voluptatem ea magni accusantium voluptatibus cupiditate, nobis neque! Vero libero voluptatum accusamus culpa dignissimos ducimus explicabo amet enim eum nesciunt corporis repellat accusantium nisi, voluptas quam impedit rerum similique rem, nostrum minima! Harum amet consequatur consectetur accusantium vel ipsa in?</p>
                                        </div>

                                    </div>


                                </div>


                                <div className="card card_bg card_bg z-depth-0 bordered">

                                    <div className="card-header" id="headingTwo2">

                                        <h5 className="mb-0">

                                            <div className="courser collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">


                                                Collapsible Group Item #2
                                            </div>

                                        </h5>

                                    </div>

                                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2"
                                        data-parent="#accordionExample275">

                                        <div className="card-body">

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cum voluptatem ea magni accusantium voluptatibus cupiditate, nobis neque! Vero libero voluptatum accusamus culpa dignissimos ducimus explicabo amet enim eum nesciunt corporis repellat accusantium nisi, voluptas quam impedit rerum similique rem, nostrum minima! Harum amet consequatur consectetur accusantium vel ipsa in?</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="card card_bg z-depth-0 bordered">

                                    <div className="card-header" id="headingThree2">

                                        <h5 className="mb-0">

                                            <div className="courser collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">


                                                Collapsible Group Item #3
                                            </div>


                                        </h5>

                                    </div>

                                    <div id="collapseThree2" className="collapse" aria-labelledby="headingThree2"
                                        data-parent="#accordionExample275">

                                        <div className="card-body">

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cum voluptatem ea magni accusantium voluptatibus cupiditate, nobis neque! Vero libero voluptatum accusamus culpa dignissimos ducimus explicabo amet enim eum nesciunt corporis repellat accusantium nisi, voluptas quam impedit rerum similique rem, nostrum minima! Harum amet consequatur consectetur accusantium vel ipsa in?</p>

                                        </div>

                                    </div>

                                </div>

                            </div>



                        </div>



                    </div>



                </div>

            </section>



        </>
    )
}
