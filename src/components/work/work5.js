import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work5 extends Component {
  render() {
    return (
      <div id='work5'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Smart 3 mini</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Smart 3 mini</div>
        <div className='text-lg'>PUI Design / 2020.03 - 2020.09</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Developed a product design strategy for a new form of mini-sized STB, conducting surveys and user researches to collect user's voices and TV environment.</li>
          <li>Led the design process from guiding the product design agency to collaborating with the manufacturer.</li>
          <li>Designed overall PUI including a button's usability, location and LED lights' scenarios, focusing on the users' convenience while the STB is hidden behind TV.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini1.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini2.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini3.png'} alt=''/>
        </div>

        <div className=''>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini4.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini5.png'} alt=''/>
         
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini6.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/smart3mini/mini7.png'} alt=''/>
        </div>
        
      </div>

      </div>
    )
  }
}

export default Work5