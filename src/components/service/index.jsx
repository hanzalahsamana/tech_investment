import React from 'react';
import serviceimg1 from '../../img/service-1.jpg';
import serviceimg2 from '../../img/service-2.jpg';
import serviceimg3 from '../../img/service-3.jpg';
import serviceimg4 from '../../img/service-4.jpg';
import serviceimg5 from '../../img/service-5.jpg';
import serviceimg6 from '../../img/service-6.jpg';
import '../../css/style.css';


const ServiceSection = () => {
  return (
    <div className="container-xxl py-5" id="service">
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg1} alt="" />
              </div>
              <h4 className="mb-3">Crude Oil</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Contact</span></a>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg2} alt="" />
              </div>
              <h4 className="mb-3">Naphta</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Contact</span></a>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg3} alt="" />
              </div>
              <h4 className="mb-3">Fuel Oils</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Contact</span></a>
            </div>
          </div>
          {/* Service 4 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg4} alt="" />
              </div>
              <h4 className="mb-3">Aviation Kerosene</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Contact</span></a>
            </div>
          </div>
          {/* Service 5 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg5} alt="" />
              </div>
              <h4 className="mb-3">LPG LNG</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Contact</span></a>
            </div>
          </div>
          {/* Service 6 */}
          <div className="col-md-6 col-lg-4 wow  fadeInUp" data-wow-delay="0.7s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serviceimg6} alt="" />
              </div>
              <h4 className="mb-3 ">Fertilizers And</h4>
              <a className="btn-slide mt-2" href="#service"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
