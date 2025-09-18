import React from 'react'
import './Services.css'

function Services() {
  return (
    <section id='services' className='services bg-light'>
            <div className='container text-center'>
        <span className='about_me mt-2'>
            My Services
        </span>
        <div className='services-container'>
            <div className='row'>
                <div className='col-12 col-md-4 mt-3'>
                    <span className='icon'><i class="fa-brands fa-stack-overflow"></i></span>
                    <h3 className='services-heading'>Web Design</h3>
                    <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                </div>
                <div className='col-12 col-md-4'>
                    <span className='icon'><i class="fa-solid fa-code"></i></span>
                    <h3 className='services-heading'>Web Development</h3>
                    <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                </div>
                <div className='col-12 col-md-4'>
                    <span className='icon'><i class="fa-solid fa-users"></i></span>
                    <h3 className='services-heading'>Social media</h3>
                    <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Services