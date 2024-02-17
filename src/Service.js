import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/Plants.jpg";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom"; // Assuming you're using react-router
import jsonData from "./Data/Services.json";
import Img01 from "./images/Logistics.jpg";
import Img02 from "./images/Operations-Management.jpg";
import Img03 from "./images/Euopment-on-hire.jpg";
import Img04 from "./images/Plant-Set-up.jpg";
import Img05 from "./images/Arcus-Tech.jpg";

export const Service = () => {
  const { slug } = useParams();
  const serviceData = jsonData[slug];

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  const { title, image, description } = serviceData;
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
                Serving You.{" "}
                <strong>
                  <br />
                  Serving The Nation.
                </strong>
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
                  <h2>Our Service</h2>
                </div>
                <div className="proserstn">
                  <div className="desp">
                    <p>
                      We, at NS Arcus, offer our customers a wide range of
                      services apart from providing construction materials. Our
                      services aim to address the needs and concerns of our
                      customers and assist them at every step of the
                      construction cycle.
                    </p>
                  </div>
                  <div className="proserv">
                    <div
                      className="row col-12"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="col-md-6 col-xs-12">
                        <img src={image} />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="prodetails">
                          <h2>{title}</h2>
                          <p>{description}</p>
                        </div>
                      </div>
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
