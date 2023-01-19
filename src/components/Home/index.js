
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import'./index.scss';
import Logo from './Logo';
const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','d','i','t','i',' ','M','a','h','a','b','o','l','e']
    const jobArray=['S','t','u','d','e','n','t',' ','A','t', ' ' ,'J','I','I','T']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={21} />
                    <br/>
                </h1>
                <h2> Pursuing BTech | Computer Science</h2>
                <br/><br/><br/><br/>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo>

            </Logo>
       </div>
       <Loader type="pacman"/>
       </>
    )
}
export default Home