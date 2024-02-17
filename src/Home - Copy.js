import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import { Link } from 'react-scroll'
import Banner01 from './images/banner01.jpg'
import Banner02 from './images/banner02.jpg'
import Banner04 from './images/vidya-niketan-banner-home.jpg'
import Aboutimg from './images/Aboutimg.jpg'
import Conimg01 from './images/Conimg01.jpg'
import Conimg2 from './images/Conimg02.jpg'
import Conimg03 from './images/Conimg03.jpg'
import Credential01 from './images/icon01.jpg'
import Credential02 from './images/icon02.jpg'
import Credential03 from './images/icon03.jpg'
import Credential04 from './images/icon04.jpg'
import Credential05 from './images/icon05.jpg'
import Product01 from './images/product01.jpg'
import Product02 from './images/product02.jpg'
import Product03 from './images/product03.jpg'
import Product04 from './images/product04.jpg'
import Product05 from './images/product05.jpg'
import Product06 from './images/product06.jpg'
import Truck from './images/truck.png'
import { Numbers } from './Number';
import { NavLink } from 'react-router-dom';

export const Home = () => {
   var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    arrows: false,
    Default: true,
    autoplaySpeed:8000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
var settings3 = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  fade:false,
  autoplay: false,
  speed: 600,
  arrows: true,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
var settings2 = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  fade:true,
  autoplay: true,
  speed: 600,
  arrows: false,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
  return (
    <>
     <Header />
     <div className='jslider' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
        <div className='row'>          
    <Slider {...settings}>
   
      <div>
      <div className='homeslider slide01'>
        <div className='homcolrt'>
        <img src={Banner01} />
        </div>
        <div className='homcolft position-absolute'>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">What’s nice about concrete, is that it looks <em>unfinished.</em></h2>
        </div>
      </div>
      </div>
      <div>
      <div className='homeslider slide02'>
        <div className='homcolrt'>
          <img src={Banner04} />
        </div>
        <div className='homcolft position-absolute'>
          <h2>Happiness immersed in <em>nature</em></h2>
        </div>
      </div>
      </div>
      <div>
      <div className='homeslider slide02'>
        <div className='homcolrt'>
          <img src={Banner02} />
        </div>
        <div className='homcolft position-absolute'>
          <h2>Absolute <em>concrete</em></h2>
        </div>
      </div>
      </div>
      {/* <div>
      <div className='homeslider slide03'>
        <div className='homcolrt'>
        <img src={Banner03} />
        </div>
        <div className='homcolft position-absolute'>
          <span className='colorborder'><em></em></span>
          <h2>Dream, create, design, and  <em>build  </em></h2>
        </div>
      </div>
      </div> */}
    </Slider>
    <Link to="downarrow" smooth={true} duration={500}>
    <div className='webarrow' id='downarrow'>     
    </div>
    </Link>
    </div>
    </div>  
       <section id='aboutus' className='p-0'>
        <div className='aboutus' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                <div className='aboutstn mb-0'>
                  <div className='aboutcont'>
                    <div className='title'>
                      <h2>Overview</h2>
                    </div>                   
                    <div className='aboutconsts'>
                    <h1><span>A concrete mix of quality and service.</span><span>The NS way.</span></h1>
                    <div className='aboutslider mobile-show'>
                      <img src={Aboutimg} />
                  </div>
                    <p>Preparation, competence, and reliability; accompanied by strict application of quality standards have distinguished the NS Arcus way of doing business over the years. It has enabled the company to acquire a solid reputation on the market while continuing to grow right from its inception.</p><p><em>NS Arcus, headquartered in Gurgaon, has been engaged in building and construction materials for the last 5 decades. Established in 1972, NS Arcus has an extensive production and distribution network across Delhi NCR, Jammu,Amaravati and Vrindavan.</em></p>
         <NavLink to='/about-nsarcus' className="btn10">
     <span>Read More</span>
  <div class="transition"></div>
</NavLink>
                    </div>
                  </div>
                  <div className='aboutslider desktop-show'>
                      <img src={Aboutimg} />
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section id='news'>
        <div className='news'>
              <div className='newslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
              <div className='powerplant'>
                    <Slider {...settings2}>
                      <div>
                        <div className='concert'>
                        <div className='Concreteimg'>
                          <img src={Conimg01} />
                                                  </div>
                                                  
                    <div className='conceretcont'>
                      <h3>Concrete</h3>
                      <p>Something substantial, solid and permanent. Most of us spend our lives on and around concrete, on sidewalks and roads, and inside buildings and structures that are all constructed with excellent materials. Without concrete, there would not be a developed world.</p>
                    </div>
                    </div>
                      </div>
                      <div>
                      <div className='concert'>
                        <div className='Concreteimg'>
                          <img src={Conimg2} />
                                                  </div>
                                                  
                    <div className='conceretcont'>
                      <h3>Concrete</h3>
                      <p>Something substantial, solid and permanent. Most of us spend our lives on and around concrete, on sidewalks and roads, and inside buildings and structures that are all constructed with excellent materials. Without concrete, there would not be a developed world.</p>
                    </div>
                    </div>
                      </div>
                      <div>
                      <div className='concert'>
                        <div className='Concreteimg'>
                          <img src={Conimg03} />
                                                  </div>
                                                  
                    <div className='conceretcont'>
                      <h3>Concrete</h3>
                      <p>Something substantial, solid and permanent. Most of us spend our lives on and around concrete, on sidewalks and roads, and inside buildings and structures that are all constructed with excellent materials. Without concrete, there would not be a developed world. </p>
                    </div>
                    </div>
                      </div>
                    </Slider>
                    </div>
              </div>
        </div>
       </section>
       <section id='credentials'>
          <div className='credentials'>
              <div className='container'>
              <div className='row'>
                <div className='web-container'>
                      <div className='condentialscont'>
                          <h2 data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Credentials to rely upon.</h2>
                          <ul>
                            <li data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span><img src={Credential01} /></span><p>Over 5 decades of experience</p></li>
                            <li data-aos="fade-up" data-aos-offset="120" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span><img src={Credential02} /></span><p>Largest fleet of company-owned transit mixers in Delhi-NCR</p></li>
                            <li data-aos="fade-up" data-aos-offset="140" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span><img src={Credential03} /></span><p>Strategically located plants across Delhi-NCR</p></li>
                            <li data-aos="fade-up" data-aos-offset="160" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span><img src={Credential04} /></span><p>Technologically driven solutions</p></li>
                            <li data-aos="fade-up" data-aos-offset="180" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span><img src={Credential05} /></span><p>Process-driven quality assurance</p></li>
                          </ul>
                      </div>
                </div>
              </div>
            </div>
          </div>
       </section>
       <section id='products'>
          <div className='products'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                <div class="title" data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><h2>Product Range</h2></div>
                <div className='productslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                <Slider {...settings3}>
                      <div>
                        <div className='Concreteimg'>
                        <NavLink to='/concrete/ns-arcus-quick'>
                          <img src={Product03} />
                          <div className='prolayer'>
                              <h4>Ready-to-use Concrete</h4>
                          </div>
                          </NavLink>                   </div>
                      </div>
                      <div>
                        <div className='Concreteimg'>
                          <img src={Product01} />
                          <div className='prolayer'>
                              <h4>Concrete Blocks</h4>
                          </div>
                                                  </div>
                      </div>
                      <div>
                        <div className='Concreteimg'>
                          <img src={Product04} />
                          <div className='prolayer'>
                              <h4>Aggregates</h4>
                          </div>
                                                  </div>
                      </div>
                      <div>
                        <div className='Concreteimg'>
                          <img src={Product05} />
                          <div className='prolayer'>
                              <h4>Stone Mining & Crushing</h4>
                          </div>
                                                  </div>
                      </div>
                    </Slider>
                    </div>
                </div>
              </div>
            </div>
          </div>
       </section>
       <section id='numbers' className='p-0 homemanage'>
        <div className='numbers'>
          <div className='container'>
              <div className='row'>
                <div className='web-container'>
                 
<Numbers />
                </div>
              </div>
          </div>
        </div>
       </section>
       <section id='dreamquote'>
          <div className='dreamquote pb-0'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                    <div className='dreamquotestn'>
                        <h3 data-aos="flip-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">dreams come true when desire transforms into concrete actions</h3>
                        <div className='col-12 row'>
                          <div className='col-md-6 col-xs-12'>
                            <div className='quotecont'>
                              <h4 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">AT THE CORE OF A GREAT CITY.</h4>
                              <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="800"><strong>CALL 0124 – 2213366, 77, 88</strong> FOR ANY SALES AND CUSTOMER SUPPORT ENQUIRIES</p>
                              <NavLink className="btn-4" to='/' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="900"><span>ORDER CUSTOM CONCRETE</span></NavLink>
                            </div>
                          </div>
                          <div className='col-md-6 col-xs-12' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                            <img src={Truck} />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
       </section>
     <Footer />
    </>
  )
}
export default Home;