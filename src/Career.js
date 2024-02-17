import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/career.jpg";
import { Accordion, AccordionItem } from "react-light-accordion";

export const Career = () => {
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
                {" "}
                With Us You <br />
                <strong>Build Concrete.</strong>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section id="career">
        <div className="career">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="title centerheading">
                    <div className="centerit">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h2
                        data-aos="fade-down"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Career
                      </h2>
                    </div>
                  </div>
                  <div className="desp">
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Here at NS Arcus, human resource is considered to be a
                      valuable asset and the foundation in the growth & success
                      of company. We employ people with dedication, commitment
                      and intense passion towards work and career whether person
                      is experienced or fresh. The zeal of going ahead is the
                      key to success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="currentopening">
        <div className="career">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="nriaccordian m-0 p-0">
                    <div className="title centerheading">
                      <div className="centerit">
                        <span className="colorborder">
                          <em></em>
                        </span>
                        <h2
                          data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          Current Opening
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div
                        className="currentopening"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <Accordion atomic={true}>
                          <AccordionItem title="Civil Engineer">
                            <div className="nricont">
                              <ul>
                                <li>
                                  <i className="fa fa-suitcase"></i>
                                  <span>
                                    An Experience of 4 to 6 years in claims
                                    management and insurance renewal process
                                    with understanding of Insurance policies
                                    terminology. The candidate must have ability
                                    to understand the requirement of
                                    organisation and suggest suitable policies
                                    in discussion with the insurance brokers and
                                    insurance companies along with strong
                                    negotiation skills.
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  <span>Hyderabad</span>
                                </li>
                              </ul>
                              <p>
                                Please send your updated resume, mentioning your
                                current CTC, expected salary and notice period
                                to{" "}
                                <a href="mailto:hr@nsarcus.com">
                                  hr@nsarcus.com
                                </a>
                              </p>
                            </div>
                          </AccordionItem>
                          <AccordionItem title="General Supervisor">
                            <div className="nricont">
                              <ul>
                                <li>
                                  <i className="fa fa-suitcase"></i>
                                  <span>
                                    An Experience of 4 to 6 years in claims
                                    management and insurance renewal process
                                    with understanding of Insurance policies
                                    terminology. The candidate must have ability
                                    to understand the requirement of
                                    organisation and suggest suitable policies
                                    in discussion with the insurance brokers and
                                    insurance companies along with strong
                                    negotiation skills.
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  <span>Hyderabad</span>
                                </li>
                              </ul>
                              <p>
                                Please send your updated resume, mentioning your
                                current CTC, expected salary and notice period
                                to{" "}
                                <a href="mailto:hr@nsarcus.com">
                                  hr@nsarcus.com
                                </a>
                              </p>
                            </div>
                          </AccordionItem>
                          <AccordionItem title="Technical Manager – Business Development (Female Candidate)">
                            <div className="nricont">
                              <ul>
                                <li>
                                  <i className="fa fa-suitcase"></i>
                                  <span>
                                    An Experience of 4 to 6 years in claims
                                    management and insurance renewal process
                                    with understanding of Insurance policies
                                    terminology. The candidate must have ability
                                    to understand the requirement of
                                    organisation and suggest suitable policies
                                    in discussion with the insurance brokers and
                                    insurance companies along with strong
                                    negotiation skills.
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  <span>Hyderabad</span>
                                </li>
                              </ul>
                              <p>
                                Please send your updated resume, mentioning your
                                current CTC, expected salary and notice period
                                to{" "}
                                <a href="mailto:hr@nsarcus.com">
                                  hr@nsarcus.com
                                </a>
                              </p>
                            </div>
                          </AccordionItem>
                          <AccordionItem title="Sr. Accountant">
                            <div className="nricont">
                              <ul>
                                <li>
                                  <i className="fa fa-suitcase"></i>
                                  <span>
                                    An Experience of 4 to 6 years in claims
                                    management and insurance renewal process
                                    with understanding of Insurance policies
                                    terminology. The candidate must have ability
                                    to understand the requirement of
                                    organisation and suggest suitable policies
                                    in discussion with the insurance brokers and
                                    insurance companies along with strong
                                    negotiation skills.
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  <span>Hyderabad</span>
                                </li>
                              </ul>
                              <p>
                                Please send your updated resume, mentioning your
                                current CTC, expected salary and notice period
                                to{" "}
                                <a href="mailto:hr@nsarcus.com">
                                  hr@nsarcus.com
                                </a>
                              </p>
                            </div>
                          </AccordionItem>
                          <AccordionItem title="Civil Engineer">
                            <div className="nricont">
                              <ul>
                                <li>
                                  <i className="fa fa-suitcase"></i>
                                  <span>
                                    An Experience of 4 to 6 years in claims
                                    management and insurance renewal process
                                    with understanding of Insurance policies
                                    terminology. The candidate must have ability
                                    to understand the requirement of
                                    organisation and suggest suitable policies
                                    in discussion with the insurance brokers and
                                    insurance companies along with strong
                                    negotiation skills.
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  <span>Hyderabad</span>
                                </li>
                              </ul>
                              <p>
                                Please send your updated resume, mentioning your
                                current CTC, expected salary and notice period
                                to{" "}
                                <a href="mailto:hr@nsarcus.com">
                                  hr@nsarcus.com
                                </a>
                              </p>
                            </div>
                          </AccordionItem>
                        </Accordion>
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
