import React from 'react'
import './SeventhSection.css'
import sevenOne from '../../assets/sevenOne.png'
import sevenTwo from '../../assets/sevenTwo.png'
import sevenThree from '../../assets/sevenThree.png'
import sevenFour from '../../assets/sevenFour.png'
import sevenFive from '../../assets/sevenFive.png'



function SeventhSection() {
    return (
        <div className='container d-block justify-content-center mt-5 mb-5 pt-3'>
            <div className=' text-sixth-section text-center justify-content-center'>
                <h1 className='heading-third-section text-center '>West Maui</h1>
                <p className='text-para-seventh-section'>Find properties in West Maui we have more than 643 vacation rentals.</p>
            </div>


            <div className='images-seventh-section d-flex flex-column flex-md-row  flex-wrap gap-4 justify-content-center mt-4' >

                <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section ' style={{ backgroundImage: `url(${sevenOne})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                    <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                    <p className='align-self-center text-white fs-1    fw-bold mx-auto ' >Lahaina</p>
                </div>

                <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section height-image-seventh-section' style={{ backgroundImage: `url(${sevenTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                    <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>

                    <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kaanapali</p>
                </div>

                <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section' style={{ backgroundImage: `url(${sevenThree})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                    <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                    <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kahana</p>

                </div>

                <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section' style={{ backgroundImage: `url(${sevenFour})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                    <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                    <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Napili</p>

                </div>

                <div className='col-12 col-md-5 col-lg-3 rounded d-flex position-relative height-image-seventh-section' style={{ backgroundImage: `url(${sevenFive})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} >
                    <p className='rounded-pill px-3 bg-pink text-white position-absolute text-properties py-1' style={{ left: "15px", top: '20px' }}>20+ properties</p>
                    <p className='align-self-center text-white fs-1   fw-bold mx-auto ' >Kapalua</p>

                </div>

            </div>

        </div>
    )
}

export default SeventhSection;