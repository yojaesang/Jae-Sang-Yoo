import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work3 extends Component {
  render() {
    return (
      <div id='work3'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / PlayZ</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>PlayZ</div>
        <div className='text-lg'>TV UX Design / 2023.01 - 2023.04</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Designed User scenarios with wireframes for Version 1.3.1.</li>
          <li>Refined UI scenarios and organized UI documents.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/playz/playz1.png'} alt=''/>
        </div>

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/playz/playz3.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/playz/playz2.png'} alt=''/>
         
        </div>

        <div>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/playz/playz5.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/playz/playz4.png'} alt=''/>
        </div>
        
      </div>


      </div>
    )
  }
}

export default Work3