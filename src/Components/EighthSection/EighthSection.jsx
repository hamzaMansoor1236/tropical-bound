import React from 'react'
import './EighthSection.css'
import eighthOne from '../../assets/eighthOne.png'
import eighthTwo from '../../assets/eighthTwo.png'
import eighthThree from '../../assets/eighthThree.png'
import eighthFour from '../../assets/eighthFour.png'
import eighthFive from '../../assets/eighthFive.png'


function EighthSection() {
    return (
        <div className='container d-block justify-content-center mt-5 mb-5 pt-3'>
            <div className=' text-sixth-section text-center justify-content-center'>
                <h1 className='heading-third-section text-center '>West Maui</h1>
                <p className='text-para-eighth-section'>Find properties in West Maui we have more than 643 vacation rentals.</p>
            </div>


            <div className='images-eighth-section d-flex flex-column flex-md-row  flex-wrap gap-4 justify-content-center mt-4' >

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-eighth-section ' style={{ backgroundImage: `url(${eighthOne})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1    fw-bold mx-auto ' >Lahaina</p>
            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-eighth-section height-image-eighth-section' style={{ backgroundImage: `url(${eighthTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>

                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kaanapali</p>
            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-eighth-section' style={{ backgroundImage: `url(${eighthThree})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kahana</p>

            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-eighth-section' style={{ backgroundImage: `url(${eighthFour})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Napili</p>

            </div>
            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-eighth-section' style={{ backgroundImage: `url(${eighthFive})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kapalua</p>

            </div>

        </div>

        </div>
    )
}

export default EighthSection;