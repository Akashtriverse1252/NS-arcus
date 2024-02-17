import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Realtyheader from "./components/Realtyheader";
import img01 from "./images/icon01.png";
import img02 from "./images/icon02.png";
import img03 from "./images/icon03.png";
import img04 from "./images/icon04.png";
import Plotcreactive from "./images/plotcreative.jpg";
import Logo from "./images/anand-niketan.png";
import Amenities01 from "./images/amenities01.jpg";
import Amenities02 from "./images/amenities02.jpg";
import Amenities03 from "./images/amenities03.jpg";
import Amenities04 from "./images/amenities04.jpg";
import Sportimg from "./images/Sportimg.jpg";
import Sport01 from "./images/img01.jpg";
import Sport02 from "./images/img02.jpg";
import Sport03 from "./images/img03.jpg";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Locationmap from "./images/locationmap.jpg";
import Locationmappop from "./images/locationmap-big.jpg";
import Locationimg from "./images/Locationimg.jpg";
import Nsgroup from "./images/nsgroup.jpg";
import Nslogo from "./images/ns-arcus.png";
import { Footer } from "./components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import A10 from "./images/Previously-Approved-Layout-of-9.9583-Acres.pdf";
import A12 from "./images/New-Proposed-Layout-(Approved-in-Principle)-11.8783-Acres.pdf";
import { Helmet } from "react-helmet";
import axios from "axios";
import {Index as Form} from "./components/From"
export const Nsrealty = () => {
  const [isChildHovered, setIsChildHovered] = useState(false); // Initial state
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const [showDiv, setShowDiv] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber =
        "Invalid mobile number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.emailAddress.trim() === "") {
      newErrors.emailAddress = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      console.log("Form data:", formData);

      fetch("https://nsarcus.com/api/submit_form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);

          console.log("Server response:", data);
          if (data.success) {
            setShowThankYou(true);
          }
        })
        .catch((error) => {
          setIsSubmitting(false);

          console.error("Error:", error);
        });
    }
  };

  setTimeout(() => {
    setShowThankYou(false);
  }, 5000);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.querySelector(".anandniketanbanner");

      if (bannerElement) {
        const contentHeight = bannerElement.clientHeight;
        const scrollPosition = window.scrollY + 500;

        if (scrollPosition > contentHeight) {
          setShowDiv(true);
        } else {
          setShowDiv(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     
      <Helmet>
        <title>
          Buy Best Residential Plots in Gurugram, Manesar, Faridabad, Dwarka
          Expressway, Greater Noida, Jammu, Amaravati and Vrindavan | NS Arcus
        </title>
        <meta
          name="description"
          content="	NS Arcus Offers Residential Plots for Sale With Top of the Line Facilities in Gurugram, Manesar, Faridabad, Dwarka Expressway, Greater Noida, Jammu, Amaravati and Vrindavan | Buy Premium Residential Plots | India"
        />
        <link rel="canonical" href="https://www.nsarcus.com/real-estate" />
      </Helmet>
      <Realtyheader />
      <section id="banner" className="p-0 banner_reality">
        <div className="anandniketanbanner">
          {/* <img src={Bannerimg} /> */}
          <div className="container">
            <div className="row">
              <div className="bannercont">
                <h2
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  HAPPINESS <br /> IMMERSED IN NATURE <br />{" "}
                </h2>
              </div>
              <Link
                to="aboutsrealestates"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                <div className="clicktodown"></div>
              </Link>
              <h4 className="hrera">Hrera No. GG/633/365/2022/108</h4>
            </div>
          </div>
        </div>
        <Form onHover={setIsChildHovered}/>
        {showDiv && (
          <>
            <div className="enquirebtn">
              <Link
                activeClass="active"
                to="requestacall"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>Enquire Now</span>
              </Link>
            </div>

            <div className="enquirebtn enquirebtn_1">
              <a
                href="https://neudoor.s3.ap-south-1.amazonaws.com/plotting/tour.html"
                target="_blank"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span>
                  <em>360&#176;</em> View
                </span>
              </a>
            </div>
          </>
        )}
      </section>
      <section id="requestacall" className="pb-0  mobile-show">
        <div
          className="requestacall"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <h2>Request A Call Back</h2>
                </div>
                <div className="formcont">
                  <form onSubmit={handleSubmit}>
                    <ul>
                      <li>
                        <input
                          type="text"
                          placeholder="Name*"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={
                            errors.name
                              ? "error-input"
                              : formData.name
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.name && (
                          <span className="error-message" flow="left">
                            {errors.name}
                          </span>
                        )}
                      </li>
                      <li>
                        <input
                          type="tel"
                          placeholder="Mobile*"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          className={
                            errors.mobileNumber
                              ? "error-input"
                              : formData.mobileNumber
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.mobileNumber && (
                          <span className="error-message" flow="left">
                            {errors.mobileNumber}
                          </span>
                        )}
                      </li>
                      <li>
                        <input
                          type="email"
                          placeholder="Email*"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          className={
                            errors.emailAddress
                              ? "error-input"
                              : formData.emailAddress
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.emailAddress && (
                          <span className="error-message" flow="left">
                            {errors.emailAddress}
                          </span>
                        )}
                      </li>
                      <li>
                        <button
                          className={`btn10 ${isSubmitting ? "disabled" : ""}`}
                          id="submitButton"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutsrealestates">
        <div className="aboutsrealestates">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="realestates text-center">
                  <div className="realtitle">
                    <h3
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Anand Niketan
                    </h3>
                    <h1
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      COME AND BUY RESIDENTIAL PLOTS YOU ALWAYS DREAMT OF
                    </h1>
                    <h3
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <em>Welcome to Anand Niketan</em>
                    </h3>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    RIGHT AT THE FOOTHILLS OF ARAVALIS, JUST OFF GURGAON SOHNA
                    ROAD - NH 248A LIES ANAND NIKETAN.THIS IS A PERFECT
                    OPPORTUNITY FOR YOU TO BUY RESIDENTIAL PLOTS AND BE CLOSE TO
                    EVERYTHING AND YET FAR AWAY FROM THE NOISE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="snapshot">
        <div className="snapshot">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="realtitle text-center">
                  <h3
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Snapshot
                  </h3>
                </div>
                <div
                  className="snapshotstn"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="snapshotbox">
                    <h4>12 ACRES</h4>
                    <p>of exclusive community living</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>GATED</h4>
                    <p>and secured complex</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>LOW-DENSITY</h4>
                    <p>plotted development complex</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>AMPLE GREEN</h4>
                    <p>and open spaces</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>WELL</h4>
                    <p>demarcated plots</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>CONVENIENT</h4>
                    <p>access from 60m wide road</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>BETTER</h4>
                    <p>air quality & less noise pollution</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>WELL PLANNED</h4>
                    <p>infrastructure, roads & pathways</p>
                  </div>
                  <div className="snapshotbox">
                    <h4>DAILY CONVENIENCE</h4>
                    <p>store within the complex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sepration">
        <div className="sepration">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="bannercont">
                  <h2
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    the ground work is in place for you to craft a home for
                    generations to come
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="security">
        <div className="security">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    SAFETY AND SECURITY <br />
                    FOR A LIFETIME
                  </h2>
                </div>
                <div
                  className="security-container"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="securityimg"></div>
                  <div className="securitycont">
                    <div className="securitydiv">
                      <ul>
                        <li>Gated complex</li>
                        <li>Regulated access at entrance</li>
                      </ul>
                    </div>
                    <div className="securitydiv">
                      <ul>
                        <li>CCTV and control room provision</li>
                        <li>
                          Well-lit common areas with provision for power back-up
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="plots">
        <div className="plots">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="realtitle">
                  <h3
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Plots
                  </h3>
                </div>
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    OWN YOUR PLOT. <br /> BUILD YOUR DREAM HOME.
                  </h2>
                </div>
                <div className="plotstn">
                  <div
                    className="plotbox"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <ul>
                      <li>
                        <span>
                          <img src={img01} alt="" />
                        </span>
                        <p>Well demarcated plots of size 135-165 sq.m.</p>
                      </li>
                      <li>
                        <span>
                          <img src={img02} alt="" />
                        </span>
                        <p>Choice of plots facing in your desired direction</p>
                      </li>
                      <li>
                        <span>
                          <img src={img03} alt="" />
                        </span>
                        <p>Most plots with gardens near by</p>
                      </li>
                      <li>
                        <span>
                          <img src={img04} alt="" />
                        </span>
                        <p>Tree lined streets & roads</p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="plotbox"
                    data-aos="fade-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <img src={Plotcreactive} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="amenities" className="pb-0">
        <div className="amenities">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="realtitle">
                  <h3
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Amenities
                  </h3>
                </div>
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Parks & Greens
                  </h2>
                </div>
                <div className="amenitiesrow">
                  <div
                    className="amenitiesstn"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="amenitiesimg">
                      <img src={Amenities01} />
                    </div>
                    <div className="amenitiescontent">
                      <img src={Logo} />
                    </div>
                  </div>
                  <div
                    className="amenitiesstn"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="amenitiesimg">
                      <img src={Amenities02} />
                    </div>
                    <div className="amenitiescontent">
                      <ul>
                        <li>Designer landscaping</li>
                        <li>Internal paved green avenues</li>
                        <li>Abundant floral beds shrubs and trees</li>
                        <li>Designer water features</li>
                        <li>
                          Seating areas spread throughout the complex for
                          relaxing
                        </li>
                        <li>Pathways for a perfect stroll</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="amenitiesstn"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="amenitiesimg">
                      <img src={Amenities03} />
                    </div>
                    <div className="amenitiescontent">
                      <img src={Amenities04} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sportzone">
        <div className="sportzone">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    SPORTS ZONE FOR A <br />
                    ACTIVE LIFESTYLE
                  </h2>
                </div>
                <div
                  className="sportzonerow"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="sportzoneimg">
                    <img src={Sportimg} />
                  </div>
                  <div className="sportzonecont">
                    <ul>
                      <li>Gazebo</li>
                      <li>Cricket net area</li>
                      <li>Half basketball court</li>
                      <li>Multiple kids play areas</li>
                      <li>Yoga & meditation zone</li>
                      <li>Outdoor gym</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="sportzonerow"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="sportbox">
                    <img src={Sport01} />
                  </div>
                  <div className="sportbox">
                    <img src={Sport02} />
                  </div>
                  <div className="sportbox">
                    <img src={Sport03} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="location">
        <div className="location">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="realtitle">
                  <h3
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Location
                  </h3>
                </div>
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    GOOD LOCATION ON IT’S WAY <br />
                    TO BECOMING A GREAT ONE
                  </h2>
                </div>
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <a
                    href={Locationmappop}
                    onClick={() => this.setState({ isOpen: true })}
                  >
                    <img src={Locationmap} />
                  </a>
                </LightGallery>
                <div className="locationinfo pb-0">
                  <div
                    className="locationcont"
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <ul>
                      <li>
                        <span>MINUTES AWAY</span>
                        <p>
                          from all the Delivered Social Infrastructure of
                          Gurgaon
                        </p>
                      </li>
                      <li>
                        <span>5 MINUTES</span>
                        <p>
                          from Educational Hub - GD Goenka & K.R. Manglam
                          University
                        </p>
                      </li>
                      <li>
                        <span>15 MINUTES</span>
                        <p>from KMP Expressway</p>
                      </li>
                      <li>
                        <span>15 MINUTES</span>
                        <p>from Vatika Chowk on Sohna Road</p>
                      </li>
                      <li>
                        <span>20 MINUTES</span>
                        <p>from Rajiv Chowk</p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="locationimg"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <img src={Locationimg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutnsgroup">
        <div className="aboutnsgroup">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <img
                    src={Nslogo}
                    data-aos="fade-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    A CONCRETE NAME TRUSTED
                    <br /> FOR OVER 50 YEARS
                  </h2>
                </div>
                <div
                  className="nsgroupstn"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="nsgroupimg">
                    <img src={Nsgroup} />
                  </div>
                  <div className="nsgroupcont">
                    <p>
                      From over 5 decades of experience in ready mix concrete
                      and being a reputed name for offering concrete solutions
                      to leading developers of India, NS Arcus now begins its
                      journey in real estate development.
                    </p>
                    <p>
                      NS Arcus, headquartered in Gurgaon, is engaged in building
                      and construction materials. Established in 1972, NS Arcus
                      has a vast experience in the fields of mining, stone
                      crushing, cement, ready mix concrete, concrete blocks,
                      pavers and transportation. The group has concrete
                      footprints in Gurugram, Manesar, Faridabad, Dwarka
                      Expressway, Greater Noida, Jammu, Amaravati and Vrindavan.
                    </p>
                    <p>
                      With relentless focus on product quality, superior
                      customer service and sound financial standing, NS Arcus is
                      the name to be trusted to build your dream home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="publicnotice">
        <div className="publicnotice">
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <h2>PUBLIC NOTICE</h2>
                </div>
                <div className="publicnoticebox">
                  <div className="publicnoticecnt">
                    <p>
                      The general public is hereby informed that M/S N.S.
                      Buildtech (p) ltd. was granted a License No. 103 of 2022
                      by DTCP Haryana for setting up a plotted residential
                      colony under DDJAY scheme on a land of 9.9583 acres in
                      sector 2 of Sohna district Gurugram NS. Buildtech (p) ltd
                      is granted another LOI for additional 1.92 acres, for
                      extension of the colony on 13/03/2023. The site layout
                      earlier approved is proposed to be revised at certain
                      points. As per rules laid down by the O/o DGTCP Haryana,
                      objection are invited from the allottees of the said
                      colony which can be filed at the office of STP Gurgaon
                      within 30 days from the date of publication of this
                      notice. A copy of the earlier approved layout plan &
                      revised layout plan (approved in-principle) is available
                      for perusal of all existing allottees at the site office
                      and hosted on company website (www.nsarcus.com). Date: -
                      16/03/23.
                    </p>
                  </div>
                  <div className="public_dl">
                    <p>
                      <a href={A10} target="_blank" rel="noreferrer">
                        Previously Approved Layout of 9.9583 Acres
                      </a>
                    </p>
                    <p>
                      <a href={A12} target="_blank" rel="noreferrer">
                        New Proposed Layout (Approved in Principle) 11.8783
                        Acres{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="requestacall" className="desktop-show">
        <div
          className="requestacall"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row">
              <div className="real-container">
                <div className="heading">
                  <h2>Request A Call Back</h2>
                </div>
                <div className="formcont">
                  <form onSubmit={handleSubmit}>
                    <ul>
                      <li>
                        <input
                          type="text"
                          placeholder="Name*"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={
                            errors.name
                              ? "error-input"
                              : formData.name
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.name && (
                          <span className="error-message" flow="left">
                            {errors.name}
                          </span>
                        )}
                      </li>
                      <li>
                        <input
                          type="tel"
                          placeholder="Mobile*"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          className={
                            errors.mobileNumber
                              ? "error-input"
                              : formData.mobileNumber
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.mobileNumber && (
                          <span className="error-message" flow="left">
                            {errors.mobileNumber}
                          </span>
                        )}
                      </li>
                      <li>
                        <input
                          type="email"
                          placeholder="Email*"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          className={
                            errors.emailAddress
                              ? "error-input"
                              : formData.emailAddress
                              ? "input-filled"
                              : ""
                          }
                        />
                        {errors.emailAddress && (
                          <span className="error-message" flow="left">
                            {errors.emailAddress}
                          </span>
                        )}
                      </li>
                      <li>
                        <button
                          className={`btn10 ${isSubmitting ? "disabled" : ""}`}
                          id="submitButton"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </li>
                    </ul>
                  </form>
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
