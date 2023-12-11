import React from 'react';
import Navbar from '../src/components/navbar/index.js';
import Header from '../src/components/header/index.jsx';
import Aboutus from '../src/components/Aboutus/index.jsx';
import Servuce from '../src/components/service/index.jsx';
import Ourfeatures from '../src/components/ourfeatures/index.jsx';
import Ourteam from '../src/components/ourteam';
import Contact from '../src/components/Contact';
import Footer from '../src/components/footer';
import { Helmet } from 'react-helmet';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/bootstrap.min.css';
import './css/bootstrap.css';
import './css/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const HeadSection = () => {
  return (
<div>
<Navbar />
<Header/>
<Aboutus/>
<Servuce/>
<Ourfeatures/>
<Ourteam/>
<Contact/>
<Footer/>
</div>

  );
};

export default HeadSection;
