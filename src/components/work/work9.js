import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work9 extends Component {
  render() {
    return (
      <div id='work9'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Concept design for B tv</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Concept Design for Wi-Fi AP, Set-top box, and Voice control</div>
        <div className='text-lg'>Mobile UI Design / 2019.03 - 2019.10</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Participated in building product family look and each product exterior design.</li>
          <li>Won Pinup Design award Finalist and Asian prize award.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc1.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc2.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc3.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc4.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc9.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc8.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc10.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc11.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc7.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc6.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/poc/poc5.png'} alt=''/>
        </div>

      </div>


      </div>
    )
  }
}

export default Work9