import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/gallery-banner.jpg'
import Slider from "react-slick";
import INITIATIVES02 from './images/gallery-02.jpg'
import INITIATIVES03 from './images/gallery-03.jpg'
import INITIATIVES04 from './images/gallery-04.jpg'
import INITIATIVES05 from './images/gallery-05.jpg'
import INITIATIVES06 from './images/gallery-06.jpg'
import INITIATIVES07 from './images/gallery-07.jpg'
import INITIATIVES08 from './images/gallery-08.jpg'
import INITIATIVES09 from './images/gallery-09.jpg'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const ESG = () => {
    var settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        arrows: true,
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
        <div className='homcolrt'>
        <img src={Banner} />
        </div>
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span>Capturing Moments. <br/><strong>Building Memories.</strong></span></h2>          
        </div>
        </div>
      </div>
    </section>
    <section id='esg'>
<div className='infrastructure'>
    <div className='infragallery pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='web-container'>
          <div className='title'>
                   <h2>Gallery</h2>
                  </div>
                  <div className='col-12 text-center'>
                  <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>Festivities</Tab>
                    <Tab>Plants</Tab>
                    {/* <Tab>Technology</Tab> */}
                  </TabList>
                  <TabPanel>
                  <div className='gallery'>
          <Slider {...settings2}>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES04} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES05} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES06} />
        </div>
      </div>
    </Slider>
          </div>         
                    </TabPanel>
                    <TabPanel>
                    <div className='gallery'>
          <Slider {...settings2}>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES07} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES08} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES09} />
        </div>
      </div>
    </Slider>
          </div>    
                    </TabPanel>
                    <TabPanel>
                    <div className='gallery'>
          <Slider {...settings2}>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES07} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES08} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES09} />
        </div>
      </div>
    </Slider>
          </div>    
                    </TabPanel>
                    </Tabs> 
                    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
        <Footer/>
    </>
  )
}
