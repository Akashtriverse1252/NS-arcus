import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/product-service.png'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Img01 from './images/product-service01.jpg'
import Img02 from './images/product-service02.jpg'
import Img03 from './images/product-service03.jpg'
import Img04 from './images/product-service04.jpg'
import Img05 from './images/product-service05.jpg'
import Img06 from './images/red-bricks.jpg'
import Img07 from './images/product-service007.jpg'
import Img08 from './images/product-service008.jpg'
import Img09 from './images/concerete-block.jpg'
import Img1 from './images/product-service06.jpg'
import Img2 from './images/product-service07.jpg'
import Img3 from './images/product-service08.jpg'
import Img4 from './images/product-service09.jpg'
import Img5 from './images/product-service10.jpg'
import { NavLink } from 'react-router-dom';

export const Products = () => {
  return (
    <>
        <Header />
        <section id='banner' className='p-0'>
        <div className='banner'>
        <div className='homcolrt'>
        <img src={Banner} />
        </div>
        <div className='homcolft position-absolute text-left'>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Build <em>strong.</em></h2>
        </div>
      </div>
        </section>
        <section id='product-service'>
            <div className='product-service'>
                <div className='container'>
                    <div className='row'>
                        <div className='web-container'>
                            <div className='title'>
                                <h2>Our Products</h2>
                            </div>
                          <div className='proserstn'>
                            <h2>Your needs are varied. Our range is wide.</h2>
                            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>ready to use concrete</Tab>
                    <Tab>Concrete Blocks</Tab>
                    <Tab>Aggregates</Tab>
                    <Tab>Stone Mining & Crushing</Tab>
                  </TabList>
                  <TabPanel>
                    <div className='proserv'>
                      <div className='row col-12'>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <NavLink to='/concrete/ns-arcus-quick'>                        
                          <img src={Img01} />
                          <div className='prolayer'>
                              <h4>NS Arcus Quick</h4>
                          </div>
                          </NavLink>                           
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                          <div className='prodser'>
                          <img src={Img02} />
                          <div className='prolayer'>
                              <h4>NS ARCUS LITE</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img03} />
                          <div className='prolayer'>
                              <h4>NS ARCUS IMPRESSION</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img04} />
                          <div className='prolayer'>
                              <h4>NS ARCUS FIBRE</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img05} />
                          <div className='prolayer'>
                              <h4>NS ARCUS POROUS</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img1} />
                          <div className='prolayer'>
                              <h4>NS ARCUS CLIMATIC</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img2} />
                          <div className='prolayer'>
                              <h4>NS ARCUS FLUID</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img3} />
                          <div className='prolayer'>
                              <h4>ECO CONCRETE or GREEN CONCRETE</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img4} />
                          <div className='prolayer'>
                              <h4>NS ARCUS DURO</h4>
                          </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-xs-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='prodser'>
                          <img src={Img5} />
                          <div className='prolayer'>
                              <h4>NS ARCUS WATERPROOF</h4>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                   
                    <TabPanel>
                  <div className='proserv'>
                      <div className='row col-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='col-md-6 col-xs-12'>
                          <img src={Img09} />
                        </div>
                        <div className='col-md-6 col-xs-12'>
                          <div className='prodetails'>
                          <h2>Concrete Blocks</h2>
                          <p>Concrete blocks are made from Portland cement and aggregates. Generally sand and fine gravel are used for high-density blocks and light weight material as an aggregate for lower density blocks. Concrete blocks are produced with hollow centers to reduce weight or improve insulation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                  <TabPanel>
                  <div className='proserv'>
                      <div className='row col-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='col-md-6 col-xs-12'>
                          <img src={Img07} />
                        </div>
                        <div className='col-md-6 col-xs-12'>
                          <div className='prodetails'>
                          <h2>Aggregates</h2>
                          <ul>
                            <li><strong>M Sand/ Manufactured sand</strong>With the advancement in stone crushing technologies, it’s now possible to manufacture sand as per the gradations required.</li>
                            <li><strong>20 MM Aggregate</strong>20 mm downgraded stone aggregate is produced by state- of-the- art crushers. It complies with I.S and B.S standards and can be used in upto M-200 grade concrete.</li>
                            <li><strong>10 MM Aggregate</strong>10 mm downgraded stone aggregate is produced by state- of-the- art crushers. It complies with I.S and B.S standards and can be used in upto M-200 grade concrete.</li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                    <TabPanel>
                  <div className='proserv'>
                      <div className='row col-12' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <div className='col-md-6 col-xs-12'>
                          <img src={Img08} />
                        </div>
                        <div className='col-md-6 col-xs-12'>
                          <div className='prodetails'>
                          <h2>Stone Mining & Crushing</h2>
                          <ul>
                            <li><strong>Stone Mining</strong>The stone mining comprises firms that develop mine sites; mine and quarry dimension stone, quarry crushed and broken stone such as granite and limestone or beneficiate stone by crushing, grinding, washing, screening, pulverizing and sizing.</li>
                            <li><strong>Stone Crushing</strong>Crusher is an indispensable machine in the stone crushing line. With expertise and experience we offer developed services and essential resources.</li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                    </Tabs>
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
