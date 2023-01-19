import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/ad_logo.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDice, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <p className='name'>Aditi Mahabole</p>
            {/* <h6>+91 8586810062</h6>
            <h6>akmbole2002@gmail.com</h6> */}
        </Link>
        {/* 1 */}
        <nav>
            <NavLink exact="true" activeclassname="active" to="/index">
                <FontAwesomeIcon icon={faHome} color="#022c43"/>
            </NavLink>
        </nav>
        {/* 2 */}
        <nav>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#022c43"/>
            </NavLink>
        </nav>
        {/* 3 */}
        <nav>
            <NavLink exact="true" activeclassname="active" className="skills-link"to="/skills">
                <FontAwesomeIcon icon={faDice} color="#022c43"/>
            </NavLink>
        </nav>
        <nav>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#022c43"/>
            </NavLink>
        </nav>
       
        <ul>
            <li style="--i:1">
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/aditi-mahabole-89b4b61b8/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li style="--i:1">
                <a target='_blank' rel="noreferrer" href='https://github.com/aditimahabole/chunnubola'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar