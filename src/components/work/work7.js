import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work7 extends Component {
  render() {
    return (
      <div id='work7'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Accessories for B tv</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Accessories for B tv Device</div>
        <div className='text-lg'>PUI Design / 2019.05 - 2019.12</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Developed the design strategy for accessories&#40;Adapter, LAN and HDMI Cables, and Brackets&#41;, and collaborated with the product design agency for the product design.</li>
          <li>Guided the manufacturer to follow the design guidelines from the text sample production to the mass-production.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce5.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce6.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce7.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce8.png'} alt=''/>
          {/* <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce9.png'} alt=''/> */}
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce10.png'} alt=''/>
        </div>

        <div>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce11.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce12.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce13.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce14.png'} alt=''/>
        </div>

        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce1.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce2.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce3.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/accessories/acce4.png'} alt=''/>
        </div>

      </div>


      </div>
    )
  }
}

export default Work7