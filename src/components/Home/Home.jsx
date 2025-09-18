import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Image1 from '../../assets/9052ce73-e984-4b1b-8784-e81eda64ab72.jpeg'

const Home = () => {
  return (
    <>
        <div id='home' className='home'>
        <div className='cover'>
                   <div className='introContent'>
                       <h1 className='hello'>Hello, I'm<br/><span className='name'>Mustapha Eniola</span><br/>a SOFTWARE DEVELOPER</h1>
                       <p>I'm a Software developer with a passion for developing simple, clean and slick websites that <br/>provide real value to the end user. Delivering work within time which meets client’s requirements is our motto.</p>
                       <Link><button className='btn btn-dark'>Resume</button></Link>
                    </div>
                      <img src={Image1} alt=''  style={{ height: "30rem", width: "30rem"}} className='headshot'/>
            </div>
        </div>
    </>
  )
}

export default Home