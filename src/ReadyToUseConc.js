import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/product-service.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const ReadyToUseConc = () => {
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;
    Aos.init({ duration: 2000 });
    const loadData = async () => {
      const response = await axios.get("https://nsarcus.com/api/products.php");
      if (mounted) {
        console.log("data");
        setPagedata(response.data);
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

  return (
    <>
      <Header />
      <section id="banner" className="p-0">
        {/* Banner section content */}
      </section>
      <section id="product-service">
        <div className="product-service">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="title">
                  <h2>Our Products</h2>
                </div>
                <div className="proserstn">
                  <h2>READY TO USE CONCRETE</h2>
                  <div className="proserv">
                    <div className="row col-12">
                      {pagedata.productsdata[0].map((pdata, index) => (
                        <div
                          className="col-md-4 col-xs-12"
                          key={index}
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <div className="prodser">
                            <NavLink
                              to={
                                "/concrete/" + pdata.catslug + "/" + pdata.slug
                              }
                            >
                              <img src={pdata.image} alt={pdata.title} />
                              <div className="prolayer">
                                <h4>{pdata.title}</h4>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      ))}
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
  );
};
