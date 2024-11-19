// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';
import carouselImage1 from '../../img/carousel-1.jpg';
import carouselImage2 from '../../img/carousel-2.jpg';
import '../../css/style.css';

const Carousel = () => {
  return (
    <div className="container-fluid p-0 pb-5" id='header-container'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="owl-carousel-item position-relative" id='carousel-wrap'>
              <img className="img-fluid" src={carouselImage1} alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center " style={{ background: 'rgba(6, 3, 21, .5)' }}>
                <div className="container">
                  <div className="row justify-content-start p-3">
                    <div className="col-11 col-lg-8">
                      <h1 className="text-white text-uppercase mb-3 animated slideInDown">Premium Choice of</h1>
                      <h1 className="display-3 text-white animated slideInDown mb-4"> Energy Sector</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2" id='slide-bar-text'>Integrated network of subsidiaries And asscociated persons in the international waters</p>
                      <a href="#about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" id='btn-theme-color'>Read More</a>
                      <a href="#about" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="owl-corousel-item position-relative">
              <img className="img-fluid" src={carouselImage2} alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, .5)' }}>
                <div className="container">
                  <div className="row justify-content-start p-3">
                    <div className="col-10 col-lg-8">
                      <h2 className="text-white text-uppercase mb-3 animated slideInDown" >One stop solution</h2>
                      <h2 className="text-white text-uppercase mb-3 animated slideInDown">To all shopping needs</h2>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2" id='slide-bar-text'>Integrated network of subsidiaries And asscociated persons in the international waters</p>
                      <a href="#about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" id='btn-theme-color'>Read More</a>
                      <a href="#about" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight" >Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
