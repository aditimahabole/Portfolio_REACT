import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Lo from '../../assets/images/ava2.jpeg';

  import Loader from 'react-loaders'


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    const skillsArray=['S','k','i','l','l','s',' ','&',' ','E','x','p','e','r','i','e','n','c','e','s']
    const skillsArrays=['P','r','o','j','e','c','t','s']

    return(
        <>
        <div className='container skills-page'>
            <div className='text-zone text1'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={skillsArray} idx={10} />
                </h1>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <ul>
                                <li>
                                    <span className='text'>C|C++ : 85%</span>
                                    <span className='percent1'></span>
                                </li>
                    <br/>
                                <li>
                                    <span className='text'>HTML|CSS|BOOTSTRAP : 90%</span>
                                    <span className='percent2'></span>
                                </li>
                    <br/>
                                <li>
                                    <span className='text'>Python : 40%</span>
                                    <span className='percent3'></span>
                                </li>
                    <br/>
                                <li>
                                    <span className='text'>REACT : 50%</span>
                                    <span className='percent4'></span>
                                </li>
                    <br/>
                                <li>
                                    <span className='text'>MYSQL|PHP : 45%</span>
                                    <span className='percent5'></span>
                                </li>
                    <br/>
                                <li>
                                    <span className='text'>BLENDER : 10%</span>
                                    <span className='percent6'></span>
                                </li>
                             </ul>
                        </div>

                        <div class="flip-card-back">
                            <img className='solid-logo' src={Lo} alt='S'></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' text2'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={skillsArrays} idx={15} />
                </h1>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <ul>
                                <li>
                                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/posts/activity-6742402224586145792-laFl?utm_source=linkedin_share&utm_medium=android_app'>PIANO-PROGRAM</a>
                                 <p>Using C Language</p>
                                </li>
                                
                                <li>
                                <a  target='_blank' rel="noreferrer" href="https://github.com/aditimahabole/chunnubola/blob/master/TELE_DICE.py">TELE-DICE</a>
                                 <p>Using Python Language inspired by Telegram emojis</p>
                                </li>
                                <li>
                                <a target='_blank' rel="noreferrer"  href="https://github.com/manika-6303/projects/tree/main/RouteFinder">CAB_BOOKING_SYSTEM </a>
                                 <p>Using HTML|CSS|PHP|MYSQL</p>
                                </li>
                               
                                <li>
                                <a target='_blank' rel="noreferrer"  href="https://github.com/aditimahabole/food.git">FOOD_WEBSITE</a>
                                 <p>Using HTML CSS </p>
                                </li>
                               

                                <li>
                                <a target='_blank' rel="noreferrer"  href="https://github.com/manika-6303/projects/tree/main/RouteFinder">ROUTE_FINDER</a>
                                 <p>Using C++ Floyd Warshall Algorithm and Job Scheduling</p>
                                </li>
                                <li>
                                <a target='_blank' rel="noreferrer"  href="https://github.com/manika-6303/projects/tree/main/dictionary">DICTIONARY</a>
                                 <p>Using C++ LinkList Data structure</p>
                                </li>
                                
                                
                             </ul>
                        </div>

                        {/* <div class="flip-card-back">
                            <img className='solid-logo' src={Lo} alt='S'></img>
                        </div> */}
                    </div>
                </div>
            </div>



        </div>
        <Loader type="pacman" />

        </>

    )

}
export default Skills
