import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Slider from "react-slick";
import { Link } from "react-scroll";
import Banner01 from "./images/banner-01.jpg";
import Banner02 from "./images/banner-03.jpg";
import Banner04 from "./images/banner-02.png";
import Aboutimg from "./images/Aboutimg.jpg";
import Conimg01 from "./images/Conimg01.jpg";
import Conimg2 from "./images/Conimg02.jpg";
import Conimg03 from "./images/Conimg03.jpg";
import Credential01 from "./images/icon01.jpg";
import Credential02 from "./images/icon02.jpg";
import Credential03 from "./images/icon03.jpg";
import Credential04 from "./images/icon04.jpg";
import Credential05 from "./images/icon05.jpg";
import Truck from "./images/truck.png";
import Anandhome from "./images/anand-niketan-home.jpg";
import Balloon from "./images/balloons.gif";
import Cake from "./images/cake.gif";
import { Numbers } from "./Number";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import {Index as From} from "./components/From"

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Home = () => {
  const [pagedata, setPagedata] = useState([]);
  const [isChildHovered, setIsChildHovered] = useState(false); // Initial state

  const handleChildHoverChange = (isHovered) => {
    setIsChildHovered(isHovered);
  };
  console.log( "hover is from parent ",isChildHovered)


  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get("https://nsarcus.com/api/homes.php");
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);
  const [box, setActive] = useState("false");

  const [birthdaypopup, setbirthdaypopup] = useState("false");

  const handleToggle = () => {
    setActive(!box);
  };
  // Call the birthday section
  useEffect(() => {
    const interval = setInterval(() => {
      setbirthdaypopup(!birthdaypopup);
      clearInterval(interval);
    }, 3000);
  }, []);
  console.log(pagedata);
  if (pagedata.length === 0) {
    console.log("no data");
    return null;
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: false,
    autoplaySpeed: 8000,
    pauseOnHover: isChildHovered,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  var settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: false,
    autoplay: false,
    speed: 600,
    arrows: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  var settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    speed: 600,
    arrows: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  var settings4 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    speed: 600,
    arrows: false,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
      
      <Helmet>
        <title>
          NS Arcus - Building Construction Materials Supplier in Gurugram,
          Manesar, Faridabad, Dwarka Expressway, Greater Noida, Jammu, Amaravati
          and Vrindavan | India
        </title>
        <meta
          name="description"
          content="Buy Building Construction Materials with Best in Class Service in Gurugram, Manesar, Faridabad, Dwarka Expressway, Greater Noida, Jammu, Amaravati and Vrindavan, India | NS Arcus"
        />
        <link rel="canonical" href="https://www.nsarcus.com" />
      </Helmet>
      <Header />
      <div
        className="jslider Home_banner_bulletains"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        data-aos-duration="500"
      >
        <div className="row">
          <Slider {...settings}>
            <div>
              <div className="homeslider slide03">
                <NavLink to="/real-estate">
                  <span className="naviagtor_line"></span>
                </NavLink>
                <div className="homcolrt">
                  <img src={Banner04} />
                </div>
                <div className="homcolft position-absolute">
                  <h2
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <span>
                      HAPPINESS <strong>IMMERSED</strong>
                    </span>
                    <span>
                      in<strong> NATURE </strong>
                    </span>
                  </h2>
                </div>
               <From onHover={handleChildHoverChange}/>
              </div>
            </div>
            <div>
              <div className="homeslider slide01">
                <div className="homcolrt">
                  <img src={Banner01} />
                </div>
                <div className="homcolft position-absolute">
                  <h2
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <span>
                      Pouring <strong>strength</strong>
                    </span>
                    <span>
                      into your<strong> home </strong>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="homeslider slide02">
                <div className="homcolrt">
                  <img src={Banner02} />
                </div>
                <div className="homcolft position-absolute">
                  <h2
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <span>
                      ABSOLUTE <strong>CONCRETE</strong>
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </Slider>
          <Link to="downarrow" smooth={true} duration={500}>
            <div className="webarrow" id="downarrow"></div>
          </Link>
        </div>
      </div>
      <section id="aboutus" className="p-0">
        <div
          className="aboutus"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="aboutstn mb-0">
                  <div className="aboutcont">
                    <div className="title">
                      <h3>Overview</h3>
                    </div>
                    <div className="aboutconsts">
                      <div className="aboutslider mobile-show">
                        <img src={Aboutimg} />
                      </div>
                      <h1>
                        NS Arcus leading ready mix concrete manufacturer in
                        India
                      </h1>

                      <p>
                        Preparation, competence, and reliability; accompanied by
                        strict application of quality standards have
                        distinguished the NS Arcus way of doing business in
                        building construction material over the years. It has
                        enabled the company to acquire a solid reputation on the
                        construction material supply market while continuing to
                        grow right from its inception.
                      </p>
                      <p>
                        <em>
                          NS Arcus, headquartered in Gurgaon, has been engaged
                          in building and construction materials for the last 5
                          decades. Established in 1972, NS Arcus has an
                          extensive production and distribution network across
                          Delhi NCR, Jammu, Amaravati and Vrindavan.
                        </em>
                      </p>
                      <NavLink to="/about-nsarcus" className="btn10">
                        <span>Read More</span>
                        <div class="transition"></div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="aboutslider desktop-show">
                    <img src={Aboutimg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="news">
          <div
            className="newslider"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="500"
          >
            <div className="powerplant">
              <div className="newsliderh">
                <Slider {...settings2}>
                  <div>
                    <div className="concert">
                      <div className="Concreteimg">
                        <img src={Conimg01} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="concert">
                      <div className="Concreteimg">
                        <img src={Conimg2} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="concert">
                      <div className="Concreteimg">
                        <img src={Conimg03} />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="newslidecont">
                <div className="conceretcont">
                  <h2>Concrete</h2>
                  <p>
                    Something substantial, solid and permanent. Most of us spend
                    our lives on and around concrete, on sidewalks and roads,
                    and inside buildings and structures that are all constructed
                    with excellent materials. Without concrete, there would not
                    be a developed world.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="newslider"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="500"
          >
            <div className="powerplant">
              <div className="newsliderh">
                <Slider {...settings2}>
                  <div>
                    <div className="concert">
                      <div className="Concreteimg">
                        <img src={Anandhome} />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="newslidecont">
                <div className="conceretcont">
                  <h2>Real Estate</h2>
                  <p>
                    NS Arcus, with over five decades of experience in ready mix
                    concrete and a solid reputation for providing concrete
                    solutions to the leading real estate projects in India, has
                    recently forayed into real estate development. The Group,
                    owing to its strong association with the real estate sector,
                    has garnered deep knowledge and expertise on how it works
                    and plans to carry it forward with zeal and passion. NS
                    Arcus, with over five decades of experience in ready mix
                    concrete and a solid reputation for providing concrete
                    solutions to the leading real estate projects in India, has
                    recently forayed into real estate development. The Group,
                    owing to its strong association with the real estate sector,
                    has garnered deep knowledge and expertise on how it works
                    and plans to carry it forward with zeal and passion.
                  </p>
                  <p>
                    This journey has begun with the successful launch of Anand
                    Niketan, a plotted township located on Sector 2, Sohna Road.
                    It brings to you modern amenities and infrastructure, and
                    the flexibility to build your dream home. Offering a
                    peaceful lifestyle surrounded by natural beauty, Anand
                    Niketan is a perfect blend of serenity and urban convenience
                    amid the foothills of the Aravallis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="credentials">
        <div className="credentials">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="condentialscont">
                  <h2
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Credentials to rely upon.
                  </h2>
                  <ul>
                    <li
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <span>
                        <img src={Credential01} />
                      </span>
                      <p>Over 5 decades of experience</p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-offset="120"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <span>
                        <img src={Credential02} />
                      </span>
                      <p>
                        Largest fleet of company-owned transit mixers in
                        Delhi-NCR
                      </p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-offset="140"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <span>
                        <img src={Credential03} />
                      </span>
                      <p>Strategically located plants across Delhi-NCR</p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-offset="160"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <span>
                        <img src={Credential04} />
                      </span>
                      <p>Technologically driven solutions</p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-offset="180"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
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
      </section>
      {pagedata.products ? (
        <section id="products">
          <div className="products">
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
                    <h3>Product Range</h3>
                  </div>
                  <div
                    className="productslider"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <Slider {...settings3}>
                      {/* Loop Start */}
                      {pagedata.products.map((proDetails) => {
                        return (
                          <div>
                            <div className="Concreteimg">
                              <NavLink to={`/products/${proDetails.slug}`}>
                                <img src={proDetails.img} />
                                <div className="prolayer">
                                  <h4>{proDetails.name}</h4>
                                </div>
                              </NavLink>{" "}
                            </div>
                          </div>
                        );
                      })}
                      {/* Loop End */}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <section id="numbers" className="p-0 homemanage">
        <div className="numbers">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <Numbers />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="dreamquote">
        <div className="dreamquote pb-0">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="dreamquotestn">
                  <h3
                    data-aos="flip-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    dreams come true when desire transforms into concrete
                    actions
                  </h3>
                  <div className="col-12 row">
                    <div className="col-md-6 col-xs-12">
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
                      className="col-md-6 col-xs-12"
                      data-aos="fade-right"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <img src={Truck} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video */}
      {/* <div className='videobirthday'>
                    <video
  src={Birthdayvideo}
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop  className='desktop-show'> </video>
  <video
  src={MBirthdayvideo}
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop  className='mobile-show'> </video>
 </div> */}
      {/* Video */}
      {pagedata.birthdays ? (
        <section
          id="birthday"
          className={birthdaypopup ? "slideEffect active" : "slideEffect"}
        >
          <div className="birthday">
            <div
              onClick={() => setbirthdaypopup(!birthdaypopup)}
              className="cross"
            >
              X
            </div>
            <div className="balloon">
              <img src={Balloon} alt="Birthday Balloon" />
            </div>
            <div className="birthdaybox">
              <div className="birthdaycontent">
                {/* Loop Start */}
                <Slider {...settings4}>
                  {pagedata.birthdays.map((birthdayData) => (
                    <div className="birthdaytitle">
                      <p
                        dangerouslySetInnerHTML={createMarkup(
                          birthdayData.descp
                        )}
                      ></p>
                      <h4>
                        {birthdayData.name}{" "}
                        <span>{birthdayData.designation}</span>
                      </h4>
                    </div>
                  ))}
                </Slider>
                {/* Loop End */}
              </div>
            </div>
            <div className="cake">
              <img src={Cake} alt="Birthday Cake" />
            </div>
          </div>
        </section>
      ) : null}
      <Footer />
    </>
  );
};
export default Home;
