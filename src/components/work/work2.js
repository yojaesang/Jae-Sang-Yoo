import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work2 extends Component {
  render() {
    return (
      <div id='work2'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / B tv for Apple tv</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>B tv for Apple tv</div>
        <div className='text-lg'>TV UX Design / 2020.02 - 2023.08</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Conducted various forms of user research including surveys, in-depth interviews, focus group interviews,
            contextual inquiry, Observation, and usability testing.</li>
          <li>Built UX policies for B tv app in tvOS platform, integrating STB-oriented B tv UX into Apple tv.</li>
          <li>Designed UI components and wireframes, managing the overall service UX from the launch of the project.</li>
          <li>Experimented new UI features to aid the needs caused by the lack of remote control buttons.</li>
          <li>Filed a patent application for the Floating Menu UI. Now waiting to be allowed.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv1.png'} alt=''/>
        </div>

        <div className=''>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv2.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv3.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv7.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv8.png'} alt=''/>
         
        </div>

        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv5.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv9.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv10.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/appletv/appletv11.png'} alt=''/>
        </div>
        
      </div>


      </div>
    )
  }
}

export default Work2