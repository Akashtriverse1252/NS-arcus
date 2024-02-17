import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import Logo from '../images/anand-niketan.png';
import { Link, animateScroll as scroll } from "react-scroll";


export const Realtyheader = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
        window.addEventListener('scroll', changeBackground);             
    
        return () => {
          window.removeEventListener('scroll', changeBackground);
        }
       }, []);
       const [menus, setActive] = useState("false");
          
            const handleToggle = () => {
              setActive(!menus);
            };
       const [header,setNavbar] = useState(false);
        const changeBackground = () => {
         if(window.scrollY >= 80) {
           setNavbar(true);
         } else {
           setNavbar(false);
         }
        };
  return (
    <header className='niketan'>
      <div className={header ? 'header fixed' : 'header'}>
    <div className='container'>
      <div className='row'>
      <div className='col-3 d-flex align-items-center'>
      <div className='logo anandniketan' data-aos="fade" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
             <NavLink to='/'><img src={Logo} alt=''/></NavLink>
          </div>
        </div>
        <div className='col-9 a-center d-flex align-items-center justify-content-end'>
        <div className='navbar p-0 realty'>
            <div className={menus ? 'menus' : 'menus active'} >
              <ul className='d-flex align-items-center toplinks'>
              <li className='desktop-show'><Link activeClass="active" to="aboutsrealestates" spy={true} smooth={true} offset={-80} duration={500}>Anand Niketan</Link> </li>
              <li className='desktop-show'><Link activeClass="active" to="snapshot" spy={true} smooth={true} offset={-80} duration={500}>Snapshot</Link> </li>
              <li className='desktop-show'><Link activeClass="active" to="plots" spy={true} smooth={true} offset={-80} duration={500}>Plots</Link> </li>
              <li className='desktop-show'><Link activeClass="active" to="amenities" spy={true} smooth={true} offset={-40} duration={500}>Amenities</Link> </li>
              <li className='desktop-show'><Link activeClass="active" to="location" spy={true} smooth={true} offset={-80} duration={500}>Location</Link> </li>
              <li className='desktop-show'><Link activeClass="active" to="requestacall" spy={true} smooth={true} offset={-80} duration={500}>Contact Us</Link> </li>
              <li className='desktop-show'><NavLink className="btn-3" to='/'><span>Back to Ns Arcus</span></NavLink></li>
              <li className='mobile-show'><button onClick={handleToggle} className={menus ? 'hemburgur' : 'hemburgur active'}><span></span><span></span><span></span></button></li>
              </ul>  
              <div className='menuslide'>
                <div className='container'>
                <div className='togmenu'>
                <ul>
                <li className='mobile-show'><NavLink to='/' exact>Home</NavLink> </li>
                <li className='mobile-show'><NavLink to='/about-nsarcus'>About us</NavLink></li>
                <li className='mobile-show'><NavLink to='/concrete'>Concrete</NavLink></li>
                {/* <li className='mobile-show'><NavLink to='/ns-realty'>Ns Realty</NavLink></li> */}
                <li className='mobile-show'><NavLink to='/real-estate'>Real Estate</NavLink></li>
                <li className='mobile-show'><NavLink to='/services'>Services</NavLink></li>
                <li className='mobile-show'><NavLink to='/clients'>Clients</NavLink></li>
                <li><NavLink to='/career'>Career</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                <li><NavLink to='/contact-us'>Contact us</NavLink></li>
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
  )
}
export default Realtyheader;
