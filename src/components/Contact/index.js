import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {faAddressBook, faDatabase, faDice, faEnvelope, faHeart, faHome, faKeyboard, faMicrophone, faMusic, faPaintRoller, faRandom, faSoccerBall, faUser } from '@fortawesome/free-solid-svg-icons';
import {faAmazon, faGithub, faGoogle,  faHackerrank, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Contact=()=>{

    const [letterClass,setLetterClass]= useState('text-animate')
    const refForm =useRef()
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e)=>{
        e.preventDefault()
        emailjs
        .sendForm('service_n22n7an',
        'template_c4upzhk',
        refForm.current,
        '-KuhGGpqv3F2fLSOK')
      }
    const contactArray=['C','o','n','t','a','c','t',' ','M','e']

    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray}  idx={15}/>
                </h1>
                <p className='para'>
                    My Skill set is : C++ ,HTML,CSS,JS,REACT
                    If you have question or request,don't hesitate 
                    to contact me using below form either.
                </p>

                <div className='contact-form'>
                
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />

                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />

                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject"/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"></input>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>

            <div className="right">
                <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>

             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>
             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>


             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>

             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>

             <div className='row'>
                    <div>
                    <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    

                </div>
             </div>

             <div className='row'>
                    <div>
             <FontAwesomeIcon className ="i"icon={faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faUser} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHome} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDice} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faEnvelope} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faHackerrank} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faPaintRoller} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faKeyboard} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faGoogle} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMicrophone} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faRandom} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faReact} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAmazon} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faAddressBook} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faMusic} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faSoccerBall} color="#4d4d4e"/>
                    <FontAwesomeIcon className ="i" icon={faDatabase} color="#4d4d4e"/>
                    <FontAwesomeIcon  className ="i"icon={faHeart} color="#4d4d4e"/>
                    </div>
               </div>
            </div>
        </div>
        <Loader type="pacman"></Loader>
        </>

    )
}
export default Contact