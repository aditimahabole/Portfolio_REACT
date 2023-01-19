import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    const aboutArray=['A','b','o','u','t',' ','M','e']


    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={aboutArray} idx={15} />
                </h1>

                <p className='para'>I'm a B.Tech.,Computer Science undergraduate student from India.
                You will always find me,building new things and exploring new technologies.
                I enjoy solving puzzles and taking part in coding competitions.I am interested 
                in working  with the latest technologies and diverse projects.

                </p>
                <p className='para'>
                    I'm quietly confident,naturally curious,innovative,
                    and perpetually
                    working on improving my skills.
                </p>
                <p className='para'>
                    If I need to define myself in some words that would be
                    friendly,enthusiast,
                    sports fanatic,music lover
                    and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    
                <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" />

        </>

    )

}
export default About
