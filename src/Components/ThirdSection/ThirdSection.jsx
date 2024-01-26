import './ThirdSection.css'
import beachImage from '../../assets/imageBeach.png'
import leafImage from '../../assets/leaf.png'
import background from '../../assets/rectangle.png'

import React from 'react'

export const ThirdComponent = (props) => {
    return (
        <div className='container  '>

            <div className='row d-flex flex-column-reverse flex-sm-row '  >
                <div className='col-12 col-sm-6 position-relative mt-4 mt-sm-5 '  >
                    <img className='img-fluid style-beach-image'  src={beachImage}></img>
                    <img className='img-fluid leaf-img-adjustment'  src={leafImage}></img>
                </div>

                <div  className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start pt-5 negative-margin' >
                    <h1 className='heading-third-section m-0'>Welcome to Tropical Bound</h1>
                    <p className='paragraph-third-section width-400' >We have beautiful vacation rentals all over Hawaii, from Kapalua to Wailea. Hawaii has been helping Visitors create amazing vacations for over 30 years and counting! Tropical Bound Condo Rentals with tropicalbound.com are easy to book.</p>
                    <button type="button" className="btn btn-custom-styling rounded-pill " > Discover More</button>
                </div>

            </div>
        </div>
    );
}

export default ThirdComponent;