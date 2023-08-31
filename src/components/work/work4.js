import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work4 extends Component {
  render() {
    return (
      <div id='work4'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / B tv air</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>B tv air</div>
        <div className='text-lg'>Tablet UX Design / 2021.03 - 2021.05</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Designed UX for Live Channel Player and EPG</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air1.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air2.png'} alt=''/>
        </div>

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air3.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air4.png'} alt=''/>
         
        </div>

        <div>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air5.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air6.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/btvair/air7.png'} alt=''/>
        </div>
        
      </div>


      </div>
    )
  }
}

export default Work4