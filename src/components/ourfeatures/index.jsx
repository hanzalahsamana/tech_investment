import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
import './style.css';
import featureimg from '../../img/feature.jpg';
import '../../css/style.css';


const FeaturesSection = () => {
  return (
    <div className="container-fluid overflow-hidden px-lg-0">
      <div className="container feature  px-lg-0">
        <div className="row g-5 mx-lg-0">
          {/* Feature Text Column */}
          <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
            <h1 className="mb-5">Why Choose Us</h1>

            {/* Feature 1 */}
            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
            <FaShoppingBag className='icon'/>
              <div className="ms-4">
                <h5>Large Coverage Area</h5>
                <p className="mb-0">We currently operate successfully in the Gulf, East Africa, South East Asia,
                  and China. With successful operating models, our availability, and a proven track record
                  in the market we are determined to extend our domain of activities further across the
                  globe.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
            <FaHandshake  className='icon-handshake'/>
              <div className="ms-4">
                <h5>Commited As Promised</h5>
                <p className="mb-0">In line with ALSHAMA GLOBAL’s mission, we continuously strive to commit to
                  the promises we have made to our clients and suppliers. We have already built a strong
                  reputation for reliability through our drive to make a noticeable difference in the
                  trading environment to meet the ever-changing market needs.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
            <IoWalletSharp className='icon'/>
              <div className="ms-4">
                <h5>Diversity Of Solutions</h5>
                <p className="mb-0">To support our long-term goal to become one of the largest oil and gas
                  companies in the market, we store, blend, and deliver oil products as part of our core
                  activities.</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
            <div className="position-relative h-100">
              <img className="position-absolute img-fluid w-100 h-100" src={featureimg}
                style={{objectFit: 'cover'}} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
