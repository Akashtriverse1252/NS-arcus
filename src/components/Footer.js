import React from 'react'
import Locationicon from '../images/location.png'
import Callicon from '../images/call.png'
import Helpicon from '../images/support.png'
export const Footer = () => {
  return (
    <>
     
     <footer className='p-0'>
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                <div className='title'>
                  <h2 data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Contact Us</h2>
                </div>
                <div className='contactstrp'>
                  <div className='row'>
                    <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='contactbox'>
                        <img src={Locationicon} />
                        <h4>NS Arcus</h4>
                        <p>122, 1st Floor, Universal Trade Tower<br/> Sector 49 Gurgaon, Sohna Road <br/>122018, Haryana, India </p>
                      </div>
                    </div>
                    <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='contactbox'>
                        <img src={Callicon} />
                        <h4>Call</h4>
                        <p><a href='tel:0124-2213366'>0124-2213366</a>, <a href='tel:0124-2213377'>0124-2213377</a><br/> <a href='tel:0124-2213388'>0124-2213388</a></p>
                      </div>
                    </div>
                    <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='contactbox'>
                        <img src={Helpicon} />
                        <h4>Helpline</h4>
                        <p><a href='tel:+918130495533'>+91 8130495533</a>, <a href='tel:+918130495555'>8130495555</a>, <a href='tel:9718922222'>9718922222</a>, <a href='tel:9718955555'>9718955555</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <p>&copy; 2023 ns arcus | all rights reserved. </p>
            </div>
            <div className='col-md-6 col-xs-12 text-right d-flex justify-content-end'>
              <p><a href='https://triverseadvertising.com/' target='_blank'>design:triverse</a></p>
            </div>
          </div>          
          </div>
            </div>
          </div>
        </div>
       </footer>
    </>
  )
}
