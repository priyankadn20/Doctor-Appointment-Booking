import { assets } from '../assets/assets'

const Contact = () => {


  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full max-w-[300px]' src={assets.contact_image} />
        <div className='flex flex-col gap-6 justify-center items-center '>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>3100,Noyasorok,Thikana <br/>tower,Sylhet,Bangladesh</p>
          <p className='text-gray-500'>Tel: (415) 555-0123 <br/>Email: info@company.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm rounded-md hover:bg-black hover:text-white transition duration-300'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
