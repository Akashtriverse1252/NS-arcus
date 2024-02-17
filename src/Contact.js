import React, { useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import Header from './components/Header'
import Banner from './images/contact_us.jpg'
import { Footer } from './components/Footer'

export const Contact = () => {

   // Email Code Start
   const form = useRef();

  const sendEmail = (e) => {
    document.getElementById("submitButton").value = "Submitting...";
    document.getElementById("submitButton").disabled = true;
    e.preventDefault();

    emailjs.sendForm('service_xo7cfph', 'template_ejqbfag', form.current, '_hNFwKZ4uVU3zzMKg')
      .then((result) => {
          console.log(result.text);
          alert("message sent");
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
   // Email Code End

  const [grievanceform, setActive] = useState("false");
          
  const handleToggle = () => {
    setActive(!grievanceform);
  };
  return (
    <>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <div className='homcolrt'>
        <img src={Banner} />
        </div>
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span>We Are Here <strong>For You.</strong></span></h2>          
        </div>
        </div>
      </div>
        </section>
         <div className='contactfooter'>
          <Footer/>
          <div className='contactrow'>
            <div className='row'>     
            <div className='container'>
              <div className='web-container'>  
              <form ref={form} onSubmit={sendEmail}>              
          <div className='contactform'>
            <h2>CONTACT FORM</h2>
            <ul>
              <li><input type="text" placeholder='Company Name *' name="company_name" required/></li>
              <li><input type="tel" placeholder='Contact Number *' name="contact_name" required pattern="\d{10}"/></li>
              {/* <li><input type="tel" placeholder='Telephone' name="telephone"/></li> */}
              {/* <li><input type="tel" placeholder='Fax' name="fax"/></li> */}
              <li><input type="email" placeholder='Email' name="email"/></li>
              <li><input type="text" placeholder='Enquiry' name="enquiry"/></li>
            </ul>
            <div className='text-center d-flex justify-content-center'>
              <span className='btn10'><input type='submit' value='Submit' id="submitButton" /></span>
            </div>
          </div>
          </form>
          </div>
          </div>
          </div></div>       
          <div className='copyright d-block'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <p>&copy; 2023 ns arcus | all rights reserved. </p>
            </div>
            <div className='col-md-6 col-xs-12 text-right d-flex justify-content-end'>
              <p><a href='https://triverseadvertising.com/' target='_blank'>design:triverse</a></p>
            </div>
          </div>          
          </div>
            </div>
          </div>
        </div>
          </div>
    </>
  )
}
