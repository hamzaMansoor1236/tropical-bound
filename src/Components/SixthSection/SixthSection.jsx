import React from 'react'
import './SixthSection.css'
import Carousel from "react-multi-carousel";
import sixOne from '../../assets/sixOne.png'
import sixTwo from '../../assets/sixTwo.png'
import sixThree from '../../assets/sixThree.png'
import sixFour from '../../assets/sixFour.png'
import sixFive from '../../assets/sixFive.png'
import sixSix from '../../assets/sixSix.png'
import sixSeven from '../../assets/sixSeven.png'
import sixEight from '../../assets/sixEight.png'

const responsive = {
    highDefinition: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1441 },
        items: 8
    },
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1440, min: 1025 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 1024, min: 769 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 768, min: 426 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 2
    }
};

function SixthSection() {
    return (
        <div className='container d-block justify-content-center mt-5'>
            <div className='d-flex text-sixth-section text-center justify-content-center pt-5'>
                <h1 className='heading-third-section text-start '>Featured Destinations In Hawaii</h1>
            </div>
            <div className='status-images mt-4'>
                <Carousel responsive={responsive} removeArrowOnDeviceType={'mobile tablet desktop superLargeDesktop highDefinition'} >
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixOne}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>West Maui</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixTwo}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>South Maui</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixThree}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>Kauai</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixFour}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>Big Island</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixFive}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>Oahu</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixSix}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>Molokai</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixSeven}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>Wailea</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-2'>
                        <img className='img-fluid rounded  cursor-pointer object-fit-contain' draggable="false" src={sixEight}></img>
                        <p className='d-flex justify-content-center text-below-image mt-2 '>West Maui</p>
                    </div>
                    

                </Carousel>;
            </div>
        </div>
    )
}

export default SixthSection;