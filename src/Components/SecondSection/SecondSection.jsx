import './SecondSection.css'

import bg from "../../assets/secondOne.png"

function SecondSection() {
  return (
    <div className="container mt-5  ">
      <div className="d-flex px-3 py-5 justify-items-between flex-column" >
        <img className='img-fluid' src={bg}></img>

        <div className='container col-12 d-flex flex-row position-absolute    '>

          <div className=" col-5 d-flex flex-column  ">
            <p className="word-search text-white mb-0 "> Search</p>
            <p className="word-hawaii text-white mb-0 ">Hawaii’s</p>
            <p className="word-best-rentals text-white mb-0">Best Rentals</p>
            <p className="paragraph-visit text-white mt-3">Visit Accessible Areas of Hawaii <br></br>
              With Aloha and Compassion</p>
            <button type="button" className="btn btn-custom-styling-read-more rounded-pill mt-3 px-5 py-2" > Read More</button>
          </div>

          <div className=" col-5 ">  
           
           <div className='rounded-pill px-3'>
           <div className="input-group">
           <div className="input-group-addon">
             @
           </div>
           <input className="form-control" id="email" name="email" type="text"/>
         </div>
          </div>
          
           
          </div>

        </div>



      </div>
    </div>
  );
}

export default SecondSection;
