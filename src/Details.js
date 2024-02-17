import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useHistory, Link, NavLink } from "react-router-dom";

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Details = ({ match }) => {
  const slug = match.params.slug1;
  const slug2 = match.params.slug2 != "" ? match.params.slug2 : "";
  const [pagedata, setPagedata] = useState([]);

  let history = useHistory();

  const [data, setData] = useState([]);
  useEffect(() => {
    let mounted = true;

    Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get(
        `https://nsarcus.com/api/product-details.php?url=${slug}&url2=${slug2}`
      );

      if (response.data.length == 0) {
        console.log("redirect");
        history.push("/404");
        return false;
      }

      if (mounted) {
        setPagedata(response.data);
        setData(response.data.products.accordions);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);
  if (pagedata.length == 0) {
    console.log("no data");
    return null;
  }

  return (
    <>
      <Header />
      {/* <section id='banner' className='p-0'>
        <div className='banner'>
        <div className='homcolrt'>
        <img src={pagedata.products.bg_img} />
        <NavLink to='/concrete' className="btn10">
     <span>Back</span>
  <div class="transition"></div>
</NavLink>
        </div>
        <div className='homcolft position-absolute text-left'>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" dangerouslySetInnerHTML={createMarkup(pagedata.products.btitle)}></h2>
        </div>
      </div>
        </section> */}
      <section id="nsarcus">
        <div className="nsarcus">
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
                    {pagedata.products.catname}
                  </h2>
                </div>
                <div className="nsarcusstn">
                  <div
                    className="nsarcusbox"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <h1>{pagedata.products.title}</h1>
                  </div>
                  <div className="nsarcusbox">
                    <h2
                      data-aos="flip-down"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      {pagedata.products.heading}
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                      dangerouslySetInnerHTML={createMarkup(
                        pagedata.products.descp
                      )}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {pagedata.products.icons ? (
        <section id="aboutusinnner" className="p-0 nsarcusdetail">
          {pagedata.products.icons.map((proData) => {
            return (
              <div className="aboutusinner">
                <div className="container">
                  <div className="web-container">
                    <div className="row">
                      <div
                        className="row col-12 align-items-center m-0"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <div className="col-md-6 col-xs-12">
                          <div className="aboutimg">
                            <img src={proData.icon_img} />
                          </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                          <div className="aboutuscont">
                            <div className="nsgroup">
                              <h2>{proData.icon_title}</h2>
                              <ul>
                                {proData.description.map((proDesc) => {
                                  return (
                                    // Check if proDesc is truthy before rendering the <li> element
                                    proDesc ? (
                                      <li
                                        dangerouslySetInnerHTML={createMarkup(
                                          proDesc
                                        )}
                                      ></li>
                                    ) : null
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      ) : null}
      <Footer />
    </>
  );
};
