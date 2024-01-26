import './FourthSection.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'

// import leafImage from '../../assets/leaf-section-four.png'


const responsive = {
    highDefinition: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1441 },
        items: 6
    },
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1440, min: 1025 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1024, min: 769 },
        items: 4
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
function FourthSection() {
    return (
        <div className='container fourth-section mt-3 ' >
            <div className='col-12  d-flex justify-content-start justify-content-sm-center pt-4 pt-sm-5' >
                <h1 className={'heading-third-section m-0'}>Trending Destinations</h1>
            </div>
            <div className="mt-4 mt-md-5" >
                <Carousel responsive={responsive}>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false"  src={one} ></img> <p className='d-flex justify-content-center text-below-image mt-2 '>South Maui</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={two} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>West Muai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={three} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Kauai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={four} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Big Island</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={five} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Oahu</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={six} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Molokai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={five} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Oahu</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={one} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>South Maui</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={two} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>West Muai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={three} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Kauai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={four} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Big Island</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={five} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Oahu</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={six} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Molokai</p></div>
                    <div className='d-flex flex-column justify-content-center text-center px-2 px-md-0'><img className='img-fluid rounded img-height-fourth-section cursor-pointer object-fit-contain' draggable="false" src={five} ></img> <p className='d-flex justify-content-center text-below-image mt-2'>Oahu</p></div>
                    

                </Carousel>;
                
            </div>
        </div>
    )
}

export default FourthSection