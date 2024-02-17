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

export const Products = () => {
  const [pagedata, setPagedata] = useState([]);
  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    const url = window.location.pathname;
    const segments = url.split("/");
    const lastSegment = segments[segments.length - 1];

    if (lastSegment) {
      setKeyword(lastSegment);
      // console.log('Last Segment:', lastSegment);
    }
  }, []);

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
  const slugToIndexMap = {
    "ready-to-use-concrete": 0,
    "concrete-blocks": 1,
    aggregates: 2,
    "stone-mining-crushing": 3,
  };

  let dataindex =
    slugToIndexMap[keyword] !== undefined ? slugToIndexMap[keyword] : undefined;

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
                Recipe For <strong>Eternity.</strong>
              </span>
            </h2>
          </div>
        </div>
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
                  <div className="proserv">
                    {dataindex == 0 ? (
                      <div className="row col-12">
                        <h2>Your needs are varied. Our range is wide.</h2>
                        {pagedata.productsdata[dataindex].map(
                          (pdata, index) => (
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
                                    "/products/" +
                                    pdata.catslug +
                                    "/" +
                                    pdata.slug
                                  }
                                >
                                  <img src={pdata.image} alt={pdata.title} />
                                  <div className="prolayer">
                                    <h4>{pdata.title}</h4>
                                  </div>
                                </NavLink>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <>
                        {pagedata.productsdata[dataindex].map((pdataArray) => (
                          <div
                            className="row col-12"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            <div className="col-md-6 col-xs-12">
                              <img
                                src={pdataArray.image}
                                alt={pdataArray.title}
                              />
                            </div>
                            <div className="col-md-6 col-xs-12">
                              <div className="prodetails">
                                <h2>{pdataArray.title}</h2>
                                <p
                                  dangerouslySetInnerHTML={createMarkup(
                                    pdataArray.descp
                                  )}
                                ></p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
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
