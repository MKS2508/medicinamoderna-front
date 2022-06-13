import React, {useEffect, useState} from 'react'
import {IoIosShirt, IoLogoWhatsapp} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './Header.css'
import 'font-awesome/css/font-awesome.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {config} from "@fortawesome/fontawesome-svg-core";
import {FaBong, FaCannabis, FaExpandAlt, FaFacebookSquare, FaJoint} from "react-icons/fa";
import {RiInstagramFill, RiPlantFill} from "react-icons/ri";
import {GiLightBulb} from "react-icons/gi";
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'

const SideBar = () => {
    config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
    const [active, setActive] = useState(false)
    const [mobileMode, setMobileMode] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }
    const closeNav = () => {
        setActive(false)
    }
    function getWindowDimensions() {
        const width = window.innerWidth
        const height = window.innerHeight
        return {
            width,
            height
        };
    }

      function useWindowDimensions() {

        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const checkMobileMode = () =>{
        const bol = (width <= 950);
        return bol;
        //setMobileMode(bol);
    }
    const { height, width } = useWindowDimensions();

    const mob = checkMobileMode();
    return (<>
            <div>
                <div className={active ? 'header' : 'header-mobile'}  onMouseLeave={closeNav}>

                    {(!active) ? <div className="logo">
                            <img width="100%" alt="logo" src={logo}/>
                        </div> :
                        <div className="banner">
                            <img width="100%" height="85%" alt="logo" src={banner}/>
                        </div>
                    }



                    <nav>
                        <ul className={active ? 'ul-item' : 'ul-item oicon'}>
                            {!mob && !active?
                            <li className="expandIcon" onClick={activateNav}>
                                 <FaExpandAlt className='icon'/>
                            </li>: <></>}

                            <li>
                                <RiPlantFill className='icon'/>
                                <Link to="CULTIVO">CULTIVO</Link>
                            </li>


                            <li>
                                <GiLightBulb className='icon'/>
                                <a href="/">ILUMINACION</a>
                            </li>

                            <li>
                                <FaCannabis className='icon'/>

                                <a className='customspan' to='/'>CBD</a>
                            </li>


                            <li>
                                <FaBong className='icon'/>
                                <a href="/">MARCAS</a>
                            </li>


                            <li>
                                <FaJoint className='icon'/>
                                <a href="/">PARAFERNALIA</a>
                            </li>
                            <li>
                                <IoIosShirt className='icon'/>
                                <a href="/">ROPA</a>
                            </li>
                            <div className="rrssIcons">

                            </div>

                            <li>
                                <IoLogoWhatsapp className='icon'/>
                                <a href="/">whatsapp</a>
                            </li>
                            <li>
                                <RiInstagramFill className='icon'/>
                                <a href="/">INSTAGRAM</a>
                            </li>
                            <li>
                                <FaFacebookSquare className='icon'/>
                                <a href="/">FACEBOOK</a>
                            </li>


                        </ul>
                    </nav>

                </div>
            </div>


        </>
    )
}

export default SideBar