import './FifthSection.css'
import greenLeaf from '../../assets/leafGreen.png'

import leafImage from '../../assets/leaf.png'
function FifthSection() {
    return (
        <div className='container bg-white rounded-custom  d-flex flex-column flex-lg-row mt-5  py-3 py-md-5    justify-content-evenly   justify-content-md-evenly width-90 position-relative'>
        <img className='img-fluid leaf-img-adjustment-fifth-section' draggable="false" src={leafImage}></img>

        <div className='text   col-lg-5 text-capitalize '>

                <p className="my-0 heading-text-fifth-section ps-md-4 ps-lg-0">We make vacations and getaways better</p>
            
                </div>

            <div className='stats pt-3 pt-md-4 pt-lg-0  col-lg-5 d-flex justify-content-evenly align-items-center  '>
                <div className="stat-one-fifth-section col-4 col-md-4 text width-max-content text-center ">
                    <p className="my-0 text-pink text-pink-fifth-section">2k +</p>
                    <p className="small-text-stats-fifth-section my-0 text-capitalize">positive reviews</p>
                </div>
                <div className="stat-two-fifth-section col-4 col-md-4 text width-max-content text-center" >
                    <p className="my-0 text-pink text-pink-fifth-section">100k +</p>
                    <p className="small-text-stats-fifth-section my-0 text-capitalize">yearly bookings</p>
                </div>
                <div className="stat-three-fifth-section col-4 col-md-4 text text-center">
                <p className="my-0 text-pink text-pink-fifth-section">99%</p>
                <p className="small-text-stats-fifth-section my-0 text-capitalize">positive reviews</p>
                </div>

            </div>
                   <img className='img-fluid leaf-img-adjustment-fifth-section' draggable="false" src={leafImage}></img>

            </div>
    );
}



export default FifthSection