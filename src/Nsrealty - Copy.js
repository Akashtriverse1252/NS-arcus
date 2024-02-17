import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/ns-realty.jpg'
import About01 from './images/about-realty.jpg'
import Slider from "react-slick";
import Gallery01 from './images/realty-gallery.jpg'
// import Gallery02 from './images/realestate02.png'
// import Gallery03 from './images/realestate03.png'
// import Gallery04 from './images/realestate04.png'
// import Gallery05 from './images/realestate05.png'
// import Gallery06 from './images/realestate06.png'
// import Gallery07 from './images/realestate07.png'
// import Gallery08 from './images/realestate08.png'

export const Nsrealty = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        speed: 600,
        arrows: true,
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
  return (
    <>
    <Header />
    <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute text-left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Build a home you always  <em>dreamt of</em></h2>
        </div>
        </div>
      </div>
        </section>  
        <section id='aboutusinnner'>
            <div className='aboutusinner realty'>
              <div className='container'>
                <div className='row'>
                  <div className='web-container'>
                  <div class="title"><h2>ABOUT NS Real Estate</h2></div>
                  </div>
                  <div className='row col-12 align-items-center'>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutimg'>
                      <img src={About01} />
                      </div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutuscont'>
                          <h2>A Concrete Name Trusted Over 50 Years</h2>
                          <p>With over 5 decades of experience in construction material and being a reputed name for offering concrete solutions to leading developers of India, NS Arcus now begins its journey in real estate development.</p>
                          <p>Headquartered in Gurgaon, NS Arcus is engaged in building and construction materials. Established in 1972, NS Arcus has a vast experience in mining, stone crushing, cement, ready mix concrete, concrete blocks, pavers and transportation. The group has concrete footprints in Gurugram, Manesar, Faridabad, Dwarka Expressway, Greater Noida, Jammu, Amaravati and Vrindavan.</p>
                          <p>With a relentless focus on product quality, superior customer service and sound financial standing, NS Arcus is the name to be trusted to build your dream home.</p>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </section>  
        <section id='nsgallery'>
            <div className='nsgallery'>
                <div className='container'>
                    <div className='row'>
                        <div className='web-container'>
                        <div class="title"><h2>NS projects</h2></div>
                        <div className='nscontainer'>
                        <Slider {...settings}>   
                            <div>
                            <div className='nsreality'>
                                    <img src={Gallery01} />
                                    <div className='nsrelcont'>
                                        <span><strong>Anand Niketan</strong>Sector 2, sohna</span><span><p>Premium Plotted Development</p></span>
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
    <Footer />
    </>
  )
}
