import React from "react";
import "./FooterSection.css";
import consumerProtectionImage from "../../assets/Footer.png";
import visaImage from "../../assets/Footer2.png";
import huaweiImage from "../../assets/Footer3.png";
import escapiaImage from "../../assets/Footer5.png";

function FooterSection() {
  return (
    <main className="">
      <div className="d-flex flex-column flex-md-row black-section rounded-custom-footer py-3 ">
        <div className="container d-flex flex-column flex-md-row  justify-content-between">
          <div className="d-flex  col-md-6  pb-3 ">
            <p className=" mb-0 mt-0 heading-text-footer-section">
              <span className="text-decoration-underline text-decor">Get </span>
              Connected With Us
            </p>
          </div>

          <div className="d-flex icons-section   col-md-6 align-items-center justify-content-end">
            <div className="d-flex col-12 col-lg-9 col-xl-9 border border-2 border-success rounded-pill px-2 justify-content-between   ">
              <i class="bi bi-facebook fa-2x"></i>
              <i class="bi bi-instagram fa-2x"> </i>
              <i class="bi bi-twitter-x fa-2x"></i>
              <i class="bi bi-google fa-2x"></i>
              <i class="bi bi-youtube fa-2x"></i>
              <i class="bi bi-linkedin fa-2x"></i>
              <i class="bi bi-pinterest fa-2x"></i>
              <i class="bi bi-wordpress fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="container ">
          <div class="row justify-content-center justify-content-lg-between pt-5">
            <div class="col-6 col-lg-3 col-sm-4">
              <div class="single-box d-flex flex-column ">
                <h2 className="">
                  <span style={{ borderBottom: "2px solid red" }}>
                    Contact Us
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="#">
                      <i class="bi bi-telephone-fill "></i>{" "}
                      <span className="text-footer-section">
                        1-604-466-0309
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-telephone-fill"></i>{" "}
                      <span className="text-footer-section">
                        1-866-456-6284
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-envelope-fill"></i>{" "}
                      <span className="text-footer-section">
                        info@tropicalbound.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="single-box">
                <h2 className="">
                  <span style={{ borderBottom: "2px solid red" }}>
                    Useful Links
                  </span>
                </h2>

                <ul>
                  <li>
                    <a href="#">
                      <span className="text-footer-section">Activities</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-footer-section">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-footer-section">
                        Happy Customers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-footer-section">
                        Tropical Links
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-footer-section">
                        Privacy Policy
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="single-box ">
                <h2 className="">
                  <span style={{ borderBottom: "2px solid red" }}>
                    Security Standards
                  </span>
                </h2>

                <ul>
                  <li>
                    <img
                      className="img-fluid"
                      src={consumerProtectionImage}
                    ></img>
                  </li>
                  <li>
                    <img className="img-fluid" src={visaImage}></img>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="single-box ">
                <h2 className="">
                  <span style={{ borderBottom: "2px solid red" }}>
                    We are Authorized
                  </span>
                </h2>
                <ul>
                  <li>
                    <img className="img-fluid" src={huaweiImage}></img>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3 ">
              <div class="single-box custom-styling-at-mobile">
                <h2 className="">
                  <span style={{ borderBottom: "2px solid red" }}>
                    We are Authorized
                  </span>
                </h2>

                <ul>
                  <li>
                    <img className="img-fluid" src={escapiaImage}></img>
                  </li>
                </ul>
              </div>
            </div>

            <hr style={{ color: "red", opacity: "100%" }}></hr>
            <div className="footer-bottom d-flex flex-column flex-lg-row justify-content-center justify-content-md-between mb-3 ">
              <div className=" copyright-section text-center text-lg-start">
                Copyright © 2001–2023 Tropicalbound.com™. All rights reserved.
              </div>
              <div className=" made-with-love-section text-center text-lg-end">
                Made With ❤️ By Binarybrix.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default FooterSection;
