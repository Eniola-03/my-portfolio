import React from 'react'
import './Aboutme.css'

function Aboutme() {
  return (
    <div id='about' className='container'>
    <div className='heading'>
      <span className='about_me mb-2'>About me</span>
      <h2 className='know_me mb-5'>Know me more</h2>
    </div>
    <div className='desc-body pt-3'>
      <div className='desc'>
          <h2 className='desc-heading'>Hi, I'm <span className='desc-name'>Mustapha Eniola</span></h2>
          <p>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our motto.</p>
      </div>
      <div className='experience'>
          <span className='five'>02</span>
          <h3>Years of <span>Experience</span></h3>
      </div>
    </div>
    <div className='row info'>
      <div className='col-12 col-md 3 info-body'>
          <p className='text-muted'>Name:</p>
          <p className='text-4'>Mustapha Eniola</p>
      </div>
      <div className='col-12 col-md 3 info-body'>
          <p className='text-muted'>E-mail:</p>
          <p className='text-4'><a className='link-dark' href='adijateniola99@gmail.com'>adijateniola99@gmail.com</a></p>
      </div>
      <div className='col-12 col-md 3 info-body'>
          <p className='text-muted'>Date of birth</p>
          <p className='text-4'>17 January, 2003</p>
      </div>
      <div className='col-12 col-md 3 info-body'>
          <p className='text-muted'>From:</p>
          <p className='text-4'>Lagos, Nigeria.</p>
      </div>
    </div>
    <div className='skill'>
      <h2 className='my-skills pt-2 mb-4 mt-5'>My skills</h2>
      <div className='row'>
        <div className='col-12 col-md-6'style={{visibility: "visible"}}>
          <p>
            HTML/CSS
          <span>80%</span>
          </p>
          <div className='progress mb-3'>
            <div className='progressbar' role='progressbar' style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p>Javascript
          <span>70%</span>
          </p>
          <div className='progress mb-4'>
            <div className='progressbar' role='progressbar' style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p>
            Vue JS
            <span>60%</span>
          </p>
          <div className='progress mb-4'>
            <div className='progressbar' role='progressbar' style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-12 col-md-6' style={{visibility: "visible"}}>
          <p className='mb-2'>React JS<span>70%</span></p>
          <div className='progress mb-4'>
            <div className='progressbar' role='progressbar' style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p>
            Node JS
            <span>50%</span>
            </p>
          <div className='progress'>
            <div className='progressbar' role='progressbar' style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Aboutme