import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../images/ns-arcus.png";
import axios from "axios";
import jsonData from "../Data/Services.json";

export const Header = () => {
  const [header, setNavbar] = useState(false);
  const [menus, setActive] = useState("false");
  const [pagedata, setPagedata] = useState([]);
  const [productSubMenuVisible, setProductSubMenuVisible] = useState(false);
  const [serviceSubMenuVisible, setServiceSubMenuVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    Aos.init({ duration: 2000 });
    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://nsarcus.com/api/products.php"
        );
        if (mounted) {
          console.log("data", response.data);
          setPagedata(response.data);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();

    return () => {
      console.log("unmount");
      mounted = false;
    };
  }, []);

  console.log(pagedata);

  if (pagedata.length === 0) {
    return null;
  }

  const handleToggle = () => {
    setActive(!menus);
  };

  // Get the hamburger element using querySelector
  const hamburgerElement = document.querySelector(".hemburgur");

  // Check if the element exists and hide it
  if (hamburgerElement) {
    hamburgerElement.style.display =
      serviceSubMenuVisible || productSubMenuVisible ? " none" : "block";
  }
  const handleLinkClick = (event) => {
    event.preventDefault();
    // Add your desired action here
    console.log("Link clicked, but no redirection occurred.");
  };

  return (
    <header>
      <div className={header ? "header fixed" : "header"}>
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <div
                className="logo"
                data-aos="fade"
                data-aos-offset="200"
                data-aos-duration="600"
                data-aos-once="true"
                data-aos-easing="ease-in-sine"
              >
                <NavLink to="/">
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-9 a-center d-flex align-items-center justify-content-end">
              <div className="navbar p-0">
                <div className={menus ? "menus" : "menus active"}>
                  <ul className="d-flex align-items-center toplinks">
                    <li className="desktop-show">
                      <NavLink to="/" exact>
                        Home
                      </NavLink>{" "}
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/about-nsarcus">About Us</NavLink>
                      <div className="submenu">
                        <div className="container">
                          <div className="submenuchild">
                            <div className="smenu">
                              <ul>
                                <li>
                                  <a href="https://www.nsarcus.com/about-nsarcus#overview">
                                    Company Overview
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.nsarcus.com/about-nsarcus#ethos">
                                    Ethos
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.nsarcus.com/about-nsarcus#nsadvantage">
                                    NS Advantage
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.nsarcus.com/about-nsarcus#plants">
                                    Plants & Offices
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.nsarcus.com/about-nsarcus#leadership">
                                    Leadership
                                  </a>
                                </li>
                                <li>
                                  <a>Infrastructure</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="desktop-show">
                      <NavLink
                        to="/Products"
                        onClick={handleLinkClick}
                        disabled={true}
                      >
                        Products
                      </NavLink>
                      <div className="submenu">
                        <div className="container">
                          <div className="submenuchild">
                            <div className="smenu">
                              <ul>
                                {pagedata.productsdata.map(
                                  (category, index) => (
                                    <li key={index}>
                                      <a
                                        href={`/products/${category[0].catslug}`}
                                      >
                                        {category[0].catslug}
                                      </a>
                                    </li>
                                  )
                                )}

                                <li>
                                  <a href="/concrete/premixx">Premixx </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/real-estate">Real Estate</NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink
                        to="/services"
                        onClick={handleLinkClick}
                        disabled={true}
                      >
                        Services
                      </NavLink>
                      <div className="submenu">
                        <div className="container">
                          <div className="submenuchild">
                            <div className="smenu">
                              <ul>
                                {Object.keys(jsonData).map((key) => (
                                  <li key={key}>
                                    <a href={`/services/${jsonData[key].slug}`}>
                                      {jsonData[key].title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/clients">Clients</NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleToggle}
                        className={menus ? "hemburgur" : "hemburgur active"}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                  </ul>
                  <div className="menuslide">
                    <div className="container">
                      <div className="togmenu">
                        <ul>
                          <li className="mobile-show">
                            <NavLink to="/" exact>
                              Home
                            </NavLink>{" "}
                          </li>
                          <li className="mobile-show">
                            <NavLink to="/about-nsarcus">About us</NavLink>
                          </li>

                          <li className="mobile-show">
                            <a
                              onClick={() => {
                                setProductSubMenuVisible(true);
                                setServiceSubMenuVisible(false); // Close the service sub-menu
                              }}
                            >
                              Products
                            </a>
                            <div
                              className={`sub_m_menu ${
                                productSubMenuVisible ? "visible" : ""
                              }`}
                            >
                              <div
                                className="sub_m_menu_close"
                                onClick={() =>
                                  setProductSubMenuVisible(
                                    !productSubMenuVisible
                                  )
                                }
                              >
                                &#9587;
                              </div>
                              <div className="smenu">
                                <ul>
                                  {pagedata.productsdata.map(
                                    (category, index) => (
                                      <li key={index}>
                                        <a
                                          href={`/products/${category[0].catslug}`}
                                        >
                                          {category[0].catslug}
                                        </a>
                                      </li>
                                    )
                                  )}

                                  <li>
                                    <NavLink to="/concrete/premixx">
                                      Premixx{" "}
                                    </NavLink>{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          {/* <li className='mobile-show'><NavLink to='/ns-realty'>Ns Realty</NavLink></li> */}
                          <li className="mobile-show">
                            <NavLink to="/real-estate">Real Estate</NavLink>
                          </li>

                          <li className="mobile-show">
                            <a
                              onClick={() => {
                                setServiceSubMenuVisible(true);
                                setProductSubMenuVisible(false); // Close the product sub-menu
                              }}
                            >
                              Services
                            </a>
                            <div
                              className={`sub_m_menu ${
                                serviceSubMenuVisible ? "visible" : ""
                              }`}
                            >
                              <div
                                className="sub_m_menu_close"
                                onClick={() =>
                                  setServiceSubMenuVisible(
                                    !serviceSubMenuVisible
                                  )
                                }
                              >
                                &#9587;
                              </div>
                              <div className="smenu">
                                <ul>
                                  {Object.keys(jsonData).map((key) => (
                                    <li key={key}>
                                      <a
                                        href={`/services/${jsonData[key].slug}`}
                                      >
                                        {jsonData[key].title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="mobile-show">
                            <NavLink to="/clients">Clients</NavLink>
                          </li>
                          {/* <li className="mobile-show">
                            <NavLink to="/premixx">Premixx</NavLink>
                          </li> */}
                          <li>
                            <NavLink to="/career">Career</NavLink>
                          </li>
                          <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact-us">Contact us</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
