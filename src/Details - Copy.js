import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/detail-banner.jpg'
import About01 from './images/Advantages.jpg'
import About02   from './images/Recommondation.jpg'
import About03  from './images/Application.jpg'

export const Details = () => {
  return (
    <>
        <Header />
        <section id='banner' className='p-0'>
        <div className='banner'>
        <div className='homcolrt'>
        <img src={Banner} />
        </div>
        <div className='homcolft position-absolute text-left'>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">For a Stronger  <em>Foundation.</em></h2>
        </div>
      </div>
        </section>
        <section id='nsarcus'>
            <div className='nsarcus'>
                <div className='container'>
                    <div className='row'>                        
                  <div className='web-container'>
                  <div class="title"><h2 data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">ready to use concrete</h2></div>
                        <div className='nsarcusstn'>
                            <div className='nsarcusbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                                <h1>NS ARCUS <br /> QUICK</h1>
                            </div>
                            <div className='nsarcusbox'>
                                <h2 data-aos="flip-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">High Early Strength Concrete Range</h2>
                                <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">In an ever-demanding and extremely competitive environment with tight deadlines, speed and efficiency are critical. The quick setting times of our NS ARCUS QUICK range enable users to dramatically increase the productivity of the construction process. This customized made-to-order range of concrete can achieve early strength along with all other flow characteristics.</p>
                            </div>
                        </div>                        
                  </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='aboutusinnner' className='p-0 nsarcusdetail'>
            <div className='aboutusinner'>
              <div className='container'>
                <div className='web-container'>
                <div className='row'>
                  <div className='row col-12 align-items-center m-0' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutimg'>
                      <img src={About01} />
                      </div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutuscont'>
                        <div className='nsgroup'>
                          <h2>Advantages</h2>
                          <ul>
                            <li>Reduces construction time and increases productivity</li>
                            <li>Reduces cost of labour and rental construction equipment</li>
                            <li>Ensures production deadlines can be met with confidence</li>
                            <li>Achieves high early strength and high ultimate strength giving a very durable concrete</li>
                            <li>Can be made to meet any flow requirements</li>
                            </ul>
                            </div>
                      </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='aboutusinner' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
              <div className='container'>
                <div className='web-container'>
                  <div className='row col-12 align-items-center m-0'>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutimg'>
                      <img src={About02} />
                      </div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutuscont'>
                        <div className='nsgroup'>
                        <h2>Recommenditions</h2>
                        <ul>
                            <li>Use Concrete within the stipulated timeline mentioned</li>
                            <li>Do not add anything to the concrete without our QC Engineer's guidance</li>
                            <li>Always use trained/recommended applicators</li>
                            <li>Cement and cementitious material are hazardous. If ingested or inhaled, wash hands and face thoroughly and see a physician in case of eye contact</li>
                            </ul>
                         </div>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
            </div>
            <div className='aboutusinner' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
              <div className='container'>
                <div className='web-container'>
                  <div className='row col-12 align-items-center flex-row-reverse m-0'>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutimg'>
                      <img src={About03} />
                      </div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                      <div className='aboutuscont'>
                        <div className='nsgroup'>
                        <h2>Applications</h2>
                        <ul>
                            <li>In buildings: columns, walls, beams, slabs, panels</li>
                            <li>In civil engineering: high walls, tunnels, roads, airport hard standings</li>
                            <li>In precast facilities: beams, panels, specific elements, hollow concrete</li>
                            <li>Ideal for areas where early trafficking is a critical construction issue such as yards, car parks, access roads and floor areas</li>
                            <li>Water control structures where long-term diversion of water is impractical</li>
                            <li>Dams, spillways, underground tunnels</li>
                            </ul>
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
