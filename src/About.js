import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/about-banner.jpg";
import About01 from "./images/abt01.jpg";
import About02 from "./images/abt02.jpg";
import Vision from "./images/vision.png";
import Mission from "./images/mission.png";
import Values from "./images/value.png";
import Credential01 from "./images/icon01.jpg";
import Credential02 from "./images/icon02.jpg";
import Credential03 from "./images/icon03.jpg";
import Credential04 from "./images/icon04.jpg";
import Credential05 from "./images/icon05.jpg";
import Slider from "react-slick";
import { Plants } from "./Plants";

export const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    arrows: false,
    Default: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <div className="homcolrt">
            <img src={Banner} />
          </div>
          <div className="homcolft position-absolute text-left">
            <h2
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="500"
            >
              <span>
                The future is <strong>concrete.</strong>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section id="overview" className="pb-0">
        <div className="aboutusinner">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div
                  class="title"
                  data-aos="fade-left"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <h2>About Us</h2>
                </div>
              </div>
              <div className="row col-12 align-items-center">
                <div
                  className="col-md-6 col-xs-12"
                  data-aos="flip-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="aboutimg">
                    <img src={About01} />
                  </div>
                </div>
                <div
                  className="col-md-6 col-xs-12"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="aboutuscont">
                    <h2>
                      <span>Concrete mix of quality and service.</span>
                      <span> The NS way. </span>
                    </h2>
                    <p>
                      Preparation, competence and reliability, accompanied by
                      strict application of quality standards, have
                      distinguished the NS Arcus way of doing business over the
                      years. It has enabled the company to acquire a solid
                      reputation on the market while continuing to grow right
                      from its inception.
                    </p>
                    <p>
                      NS Arcus, headquartered in Gurgaon, is engaged in building
                      and construction materials for the last 5 decades.
                      Established in 1972, NS Arcus has an extensive production
                      and distribution network across Delhi NCR. The Group has a
                      vast experience in the fields of mining, stone crushing,
                      cement, ready-mix concrete, concrete blocks, pavers and
                      transportation.
                    </p>
                    <p>
                      We offer a comprehensive range of standard, premium,
                      high-performance and decorative concrete along with bricks
                      and high-quality aggregates.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutusinner">
          <div className="container">
            <div
              className="row col-12 align-items-center flex-row-reverse"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="500"
            >
              <div className="col-md-6 col-xs-12">
                <div className="aboutimg">
                  <img src={About02} />
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="aboutuscont">
                  <div className="nsgroup">
                    <div class="title">
                      <h2>NS Arcus Companies</h2>
                    </div>
                    <ul>
                      <li>NS Concretes Pvt Ltd</li>
                      <li>NS Readymix Pvt Ltd </li>
                      <li>NS Concrete Sol. Pvt Ltd </li>
                      <li>NS Buildtech Pvt Ltd </li>
                      <li>National Stone Crushing Co. </li>
                      <li>Sohna Aggregate Solutions </li>
                      <li>Jai Hind Enterprises </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ethos">
        <div className="culture">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div class="title">
                  <h2>CORPORATE ETHOS</h2>
                </div>
                <div className="culturestn text-center">
                  <h2
                    data-aos="flip-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Our culture and guiding beliefs
                  </h2>
                  <div className="cultureconts">
                    <div
                      className="culturebox"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <img src={Vision} />
                      <p>
                        To be the best at what we do and be a committed
                        organization, by providing sustained perfect
                        satisfaction. We believe in enhancing current services
                        to influence growth and development.
                      </p>
                    </div>
                    <div
                      className="culturebox"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="800"
                    >
                      <img src={Mission} />
                      <p>
                        Devoted to providing distinguished quality products and
                        services: We strive to combine strategic marketing with
                        quality products and services for our clients.
                      </p>
                    </div>
                    <div
                      className="culturebox"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <img src={Values} />
                      <p>
                        Committed to accomplishing client satisfaction by giving
                        the right product, at the right price and right time
                        Strength lies in evaluating and implementing new
                        strategies in response to changing market conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nsadvantage" className="pb-0">
        <div className="aboutusinner">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div class="title">
                  <h2
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    WHY NS ARCUS?
                  </h2>
                </div>
              </div>
              <div
                className="row col-12 align-items-center"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="500"
              >
                <div className="col-md-6 col-xs-12">
                  <div className="aboutimg">
                    <img src={About01} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="aboutuscont text-center">
                    <h2>Credentials to rely upon.</h2>
                    <ul className="credentialcont">
                      <li>
                        <span>
                          <img src={Credential01} />
                        </span>
                        <p>Over 5 decades of experience</p>
                      </li>
                      <li>
                        <span>
                          <img src={Credential02} />
                        </span>
                        <p>
                          Largest fleet of company-owned transit mixers in
                          Delhi-NCR
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src={Credential03} />
                        </span>
                        <p>Strategically located plants across Delhi-NCR</p>
                      </li>
                      <li>
                        <span>
                          <img src={Credential04} />
                        </span>
                        <p>Technologically driven solutions</p>
                      </li>
                      <li>
                        <span>
                          <img src={Credential05} />
                        </span>
                        <p>Process-driven quality assurance</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="plants" className="pt-0">
        <Plants />
      </section>
      <section id="leadership">
        <div className="management">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="title">
                  <h2
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    MANAGEMENT
                  </h2>
                </div>
                <div className="team text-center">
                  <h2
                    data-aos="flip-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Team with a Vision
                  </h2>
                  <div className="teamslider">
                    <Slider {...settings}>
                      <div>
                        <div className="teambox">
                          <h3>Mr. Ajit Arora</h3>
                          <p>
                            Ajit Arora completed his graduation in Science and
                            Law from Delhi University and has hands-on
                            experience of more than 40 years in the industry. He
                            believes in forming authentic and long-lasting
                            relationships between NS Arcus and its extended
                            family, and its customers. When not working, you
                            will find him reading books and learning new stuff.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="teambox">
                          <h3>Mr. Surjit Arora</h3>
                          <p>
                            Surjit Arora has more than 30 years of experience
                            working in the industry with a degree of master's in
                            Business Administration from the University of Pune.
                            He believes in the notion of “we’re all in this
                            together”, delivering industry-wide services and
                            great communication leads to a great community.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="teambox">
                          <h3>Mr. Anoop Arora</h3>
                          <p>
                            Anoop Arora is the Director of Operations at NS
                            Arcus, with a degree in Mechanical Engineering and a
                            master&#39;s degree in Business Administration. He
                            holds multiple leadership roles in product and
                            strategy. His experience of more than a decade
                            enables him to develop and deliver exceptional
                            service and experiences for both employees and
                            customers.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="teambox">
                          <h3>Mr. Prashant Mehta</h3>
                          <p>
                            Prashant Mehta, a Business Administration graduate
                            with over 6 years of hands-on marketing experience,
                            thrives in a fast-paced and collaborative work
                            environment to set goals and generate productive
                            outcomes. When he isn't working, you'll find him
                            travelling or listening to classics.
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
