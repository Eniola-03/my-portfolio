import React from 'react'
import './Portfolio.css'
import portfolio_data from '../../assets/portfolio_data'

function Portfolio() {
  return (
    <section id='portfolio'>
       <div className='container text-center'>
         <span className='about_me'>My latest works</span>
       </div>
       <div className='portfolio-container'>
        {portfolio_data.map((work, index) => {
          return (
            <a key={index} href={work.p_link} className='portfolio-item'>
              <img src={work.p_img} alt={work.p_name} />
            </a>
          );
        })}
       </div>
    </section>
  )
}

export default Portfolio