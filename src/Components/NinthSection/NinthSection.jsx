import React from 'react'
import './NinthSection.css'


import ninthOne from '../../assets/ninthOne.png'
import ninthTwo from '../../assets/ninthTwo.png'
import ninthThree from '../../assets/ninthThree.png'

function NinthSection() {
    return (
        <div className='container d-block justify-content-center mt-5 mb-5 pt-3'>
            <div className=' text-sixth-section text-center justify-content-center'>
                <h1 className='heading-third-section text-center '>Why Choose Us</h1>
                <p className='text-para-eighth-section'>Serving our loyal clients for over 30+ years! We provide -"Vacation rentals for every budget"</p>
            </div>


            <div className="row d-flex justify-content-center justify-content-lg-around card-deck">
                <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="box  ">
                        <div className="icon">
                            <div className='image d-flex p-3 bg-white'>
                                <img src={ninthOne}></img>
                            </div>
                            <div className="info bg-white rounded-custom">
                                <h2 className="title fw-bold mt-5 ">Wide Range Of Properties</h2>
                                <p className='text-small-ninth-section'>
                                    Find your perfect Tropical Bound rental with Us.
                                </p>

                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="box">
                        <div className="icon">
                            <div className='image d-flex p-3 bg-white'>
                                <img className='' src={ninthTwo}></img>
                            </div>
                            <div className="info bg-white rounded-custom">
                                <h2 className="title fw-bold mt-5">Hawaii's Best Rentals</h2>
                                <p className='text-small-ninth-section'>
                                    People love to book with us online, We provide full service at every step.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>

                <div className=" col-xs-12 col-sm-6 col-lg-4">
                    <div className="box">
                        <div className="icon">
                            <div className='image d-flex bg-white'>
                                <img className='padding-20px' src={ninthThree}></img>
                            </div>
                            <div className="info bg-white rounded-custom">
                                <h2 className="title fw-bold mt-5 ">Best Prices</h2>
                                <p className='text-small-ninth-section'>
                                    Our prices are cheaper than at the booking offices right on site, we have many happy clients.
                                </p>

                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NinthSection;