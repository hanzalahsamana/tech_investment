import React from 'react';
import aboutImage from '../../img/about.jpg'; // Adjust the path based on your project structure
import { RiGlobalFill } from "react-icons/ri";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import './style.css' ;
import { FaTruckFast } from "react-icons/fa6";
import '../../css/style.css';

const AboutSection = () => {
  return (
    <div className="container-fluid overflow-hidden  px-lg-0" id="about">
      <div className="container about  px-lg-0">
        <div className="row g-5 mx-lg-0">
          <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute img-fluid w-100 h-100" src={aboutImage} style={{ objectFit: 'cover' }} alt="" />
            </div>
          </div>
          <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
            <h1 className="mb-5">Fuel energy transport and logistics</h1>
            <p className="mb-2">
              As a leader in the field of international trade, Energy sector, Oil & Gas, and Agriculture, we provide our business partners with a full-fledged investment options.
              The firm’s mission is to build world-class distribution and consultancy for leading manufacturers in selected industries.
              The combination of our expertise and our presence in markets regionally and globally makes us an effective channel that identifies and executes the knowledge of trade marketing, export management, and consultancy for our clients.
            </p>
            <p className="mb-5">
              Our multi-lingual investment, sales, marketing, and management consultancy professionals are spread across locations in the Middle East, Africa, America, and the Gulf regions.
              Account managers are assigned to one of our stand-alone business portfolios including but not limited to oil and gas, renewable energy, retail, and hospitality.
            </p>
            <div className="row g-4 mb-5">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                {/* <FontAwesomeIcon icon={faGlobe} className="fa-3x text-primary mb-3" /> */}
                <RiGlobalFill className='icon'/>
                <h5>Global Coverage</h5>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                {/* <FontAwesomeIcon icon={faShippingFast} className="fa-3x text-primary mb-3" /> */}
                <FaTruckFast className='icon' />
                <h5>On Time Delivery</h5>
              </div>
            </div>
            <a href="#" className="btn 'btn-theme-color' py-3 px-5" id='btn-theme-color'>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
