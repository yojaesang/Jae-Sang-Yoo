import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work10 extends Component {
  render() {
    return (
      <div id='work10'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Naver Design Camp</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Naver Design Camp Global Internship</div>
        <div className='text-lg'>Mobile UI Design / 2017.11 - 2018.07</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Proposed two new services for french, a game platform service and daily jogging App, conducting user researches to discover French users' needs and business opportunities.</li>
          <li>Proposed UI solutions for Line and Naver services, such as Naver Blog, Emoticon for Line, Naver home screen and E-commerce.</li>
          <li>Supported French startups joining in Naver Incubating program to develop their service UX.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        

        <div className=''>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver1.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver2.png'} alt=''/>
          <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver3.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver4.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver5.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver6.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver7.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver8.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver9.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/naver/naver10.png'} alt=''/>
        </div>

      </div>


      </div>
    )
  }
}

export default Work10