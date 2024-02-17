import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import premixx_banner from "./images/new bg img.webp";
import premixx_banner_m from "./images/new bg img-m.webp";
import product from "./images/premixx30.webp";
import product02 from "./images/premixx40.webp";
import { NavLink } from "react-router-dom";
import premixx_icon from "./images/permix_logo.png";
import premixx_icon2 from "./images/premixx_icon2.webp";
import premixx_icon3 from "./images/premixx_icon3.webp";
import premixx_icon4 from "./images/premixx_icon4.webp";
import premixx_icon5 from "./images/premixx_icon5.webp";
import premixx_icon6 from "./images/premixx_icon6.webp";
import Truck from "./images/truck.png";
import Slider from "react-slick";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import axios from "axios";
const API_URL = "https://nsarcus.com/api/json_api.php";

export const Premixx = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 700,
    autoplaySpeed: 8000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProductsData(response.data);
        // setTimeout(() => {

        //   setLoading(false);
        // }, 20000);
        setLoading(false);
        console.log("API data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="center">
        <div class="google-loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Network Error.</p>;
  }

  console.log("Product data:", ProductsData);

  return (
    <>
      <Header />
      <main>
        <section id="premixx_banner_section">
          <div className="premixx_banner_section">
            <div className="banner_left_scn">
              <h1>
                <div className="prd_logo">
                  <img src={premixx_icon} alt="" />
                </div>
                High strength dry concrete
              </h1>
              <div className="premixx_banner_img">
                <img
                  src={premixx_banner}
                  className="banner_show_desktop"
                  alt=""
                />
                <img
                  src={premixx_banner_m}
                  className="banner_show_mobile"
                  alt=""
                />
              </div>
            </div>
            <div className="banner_rgt_scn">
              <div className="premixx_product_slider">
                <Slider {...settings}>
                  {ProductsData.products
                    .slice()
                    .reverse()
                    .map((product) => (
                      <>
                        <div>
                          <div className="_premixx_product_img">
                            <img
                              src={product.image}
                              alt={product.name}
                              data-aos="zoom-in"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            />
                          </div>
                        </div>
                      </>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section id="premixx_tab_list">
          <div className="premixx_tab_list">
            <Tabs
              defaultIndex={0}
              onSelect={(index) =>
                console.log("Selected Product:", ProductsData.products[index])
              }
            >
              <TabList
                data-type="premixx_tabs"
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="500"
              >
                {ProductsData.products.map((product, productIndex) => (
                  <Tab key={productIndex}>{product.name}</Tab>
                ))}
              </TabList>
              {ProductsData.products.map((product, productIndex) => (
                <>
                  <TabPanel key={productIndex}>
                    <div className="premixx_introductoin">
                      <div className="container">
                        <div className="row">
                          <div className="web-container">
                            <div
                              className="premix_intro_data"
                              data-aos="fade-up"
                              data-aos-offset="0"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              <div className="premix_intro_left">
                                <div className="preimixx_intro_product">
                                  <img src={product.image} alt={product.name} />
                                </div>
                              </div>
                              <div className="premix_intro_rgt">
                                <p>{product.description}</p>
                                <ul
                                  data-aos="fade-up"
                                  data-aos-offset="100"
                                  data-aos-easing="ease-in-sine"
                                  data-aos-once="true"
                                  data-aos-duration="500"
                                >
                                  {product.features.map(
                                    (data_features, featureIndex) => (
                                      <li>
                                        <div className="premixx_feature">
                                          <img src={data_features.icon} />
                                          <h3>{data_features.title}</h3>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="premixx_features_list">
                      <div className="container">
                        <div className="row">
                          <div className="web-container">
                            <div className="premixx_features">
                              <h3>{product.uses.title}</h3>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                {product.uses.description}
                              </p>
                              <div
                                className="premixx_tab_list"
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                <Tabs
                                  defaultIndex={0}
                                  data-type="premixx_tabs_inner"
                                >
                                  <TabList>
                                    {product.uses.featureGroups.map(
                                      (featureGroup) => (
                                        <Tab key={featureGroup.id}>
                                          {featureGroup.title}
                                        </Tab>
                                      )
                                    )}
                                  </TabList>
                                  <div
                                    className="tab_cnt"
                                    data-aos="fade-up"
                                    data-aos-offset="100"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                  >
                                    {product.uses.featureGroups.map(
                                      (featureGroup) => (
                                        <TabPanel key={featureGroup.id}>
                                          <div className="premixx_tab_list__content">
                                            <ul>
                                              {featureGroup.features.map(
                                                (feature, featureIndex) => (
                                                  <li key={featureIndex}>
                                                    {feature}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </TabPanel>
                                      )
                                    )}
                                  </div>
                                </Tabs>
                                <Accordion allowZeroExpanded="true">
                                  {product.uses.featureGroups.map(
                                    (featureGroup) => (
                                      <AccordionItem key={featureGroup.id}>
                                        <AccordionItemHeading className="accordion__heading active">
                                          <AccordionItemButton>
                                            {featureGroup.title}
                                          </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordion__panel active">
                                          <div className="premixx_tab_list__content">
                                            <ul>
                                              {featureGroup.features.map(
                                                (feature, featureIndex) => (
                                                  <li key={featureIndex}>
                                                    {feature}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </AccordionItemPanel>
                                      </AccordionItem>
                                    )
                                  )}
                                </Accordion>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </>
              ))}
            </Tabs>
          </div>
        </section>
        <section id="dreamquote  " className="premix_qoutes">
          <div className="dreamquote  pb-0">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="dreamquotestn">
                    {/* <h3 data-aos="flip-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">dreams come true when desire transforms into concrete actions</h3> */}
                    <div className="col-12 row">
                      <div className="col-md-7 col-xs-12">
                        <div className="quotecont">
                          <h4
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            AT THE CORE OF A GREAT CITY.
                          </h4>
                          <p
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="800"
                          >
                            <strong>CALL 0124 – 2213366, 77, 88</strong> FOR ANY
                            SALES AND CUSTOMER SUPPORT ENQUIRIES
                          </p>
                          <NavLink
                            className="btn-4"
                            to="/"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="900"
                          >
                            <span>ORDER CUSTOM CONCRETE</span>
                          </NavLink>
                        </div>
                      </div>
                      <div
                        className="col-md-5 col-xs-12 banner_show_desktop"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        {ProductsData.products
                          // .slice()
                          // .reverse()
                          .map((product) => (
                            <>
                              <img
                                src={product.image}
                                className="product_IMAGE"
                              />
                              {/* <img src={Truck} /> */}
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <Slider {...settings}>
          <div>
            <img src={product} alt="" />
          </div>
          <div>
            <img src={product} alt="" />
          </div>
          <div>
            <img src={product} alt="" />
          </div>
        </Slider> */}
    </>
  );
};
