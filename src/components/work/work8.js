import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work8 extends Component {
  render() {
    return (
      <div id='work8'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Production Guide for B tv</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Device Production Guide for B tv</div>
        <div className='text-lg'>Guideline Design / 2020.11 - 2021.06</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Established the product mass-production guidelins for product designers and manufacturers.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide1.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide2.png'} alt=''/>

        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide3.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide4.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide5.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide6.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide7.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/guide/guide8.png'} alt=''/>
        </div>

      </div>


      </div>
    )
  }
}

export default Work8