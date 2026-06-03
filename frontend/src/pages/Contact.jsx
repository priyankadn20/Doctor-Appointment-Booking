import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {


  return (
    <div>
      <div className='text-xenter text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 fond semibold'>US</span></p>
      </div>
      <div>
        <img src={assets.contact_image} />
        <div>
          <p>Our Office</p>
          <p>3100,Noyasorok,Thikana <br/>tower,Sylhet,Bangladesh</p>
          <p>Tel: (415) 555-0123 <br/>Email: info@company.com</p>
          <p>Careers at PRESCRIPTO</p>
          <p>Learn more about our teams and job openings</p>
          <button>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
