import React from 'react'
import './SeventhSection.css'
import seventhOne from '../../assets/seventhOne.png'
import seventhTwo from '../../assets/seventhTwo.png'
import seventhThree from '../../assets/seventhThree.png'
import seventhFour from '../../assets/seventhFour.png'






function SeventhSection() {
    return (
        <div className='container d-block justify-content-center mt-5 mb-5 pt-3'>
            <div className=' text-sixth-section text-center justify-content-center'>
                <h1 className='heading-third-section text-center '>South Maui</h1>
                <p className='text-para-seventh-section'>Find properties in West Maui we have more than 643 vacation rentals.</p>
            </div>


            <div className='images-seventh-section d-flex flex-column flex-md-row  flex-wrap gap-4 justify-content-center mt-4' >

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section ' style={{ backgroundImage: `url(${seventhOne})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1    fw-bold mx-auto ' >Kihie</p>
            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section height-image-seventh-section' style={{ backgroundImage: `url(${seventhTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>

                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Wailea</p>
            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section' style={{ backgroundImage: `url(${seventhThree})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Wailuku</p>

            </div>

            <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section' style={{ backgroundImage: `url(${seventhFour})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Maalaea</p>

            </div>

            



        </div>

        </div>
    )
}

export default SeventhSection;