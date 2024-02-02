import './EleventhSection.css'
import greenLeaf from '../../assets/leafGreen.png'

import leafImage from '../../assets/leaf.png'
function EleventhSection() {
    return (
        <div className='container bg-white rounded-custom  d-flex flex-column flex-lg-row mt-5  py-3 py-md-5    justify-content-evenly   justify-content-md-evenly width-90 position-relative mb-5'>
            <img className='img-fluid leaf-img-adjustment-fifth-section' draggable="false" src={leafImage}></img>

            <div className='text col-lg-5 text-capitalize '>

                <p className="my-0 heading-text-fifth-section ps-md-4 ps-lg-0">Get the hot destinations
                    right into your inbox</p>

            </div>

            <div className='stats pt-3 pt-md-4 pt-lg-0 col-lg-5 d-flex justify-content-evenly align-items-center  '>
                <div class="input-group rounded-pill custom-border-eleventh-section">
                    <input type="text" class="form-control rounded-pill border-0" name="email" placeholder="Enter your email" style={{border:"none"}} />
                    <span class="input-group-btn " >
                        <button class="btn btn-default btn-eleventh-section  rounded-pill fw-bold px-3 px-md-5 py-md-2 fs-5 " type="button">subscribe</button>
                    </span>
                </div>
            </div>
            <img className='img-fluid leaf-img-adjustment-fifth-section' draggable="false" src={leafImage}></img>

        </div>
    );
}

export default EleventhSection;